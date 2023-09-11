import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AUTH_GET_AD_LISTING_BY_VALUE } from "../../../../../serivce/apiRoutes.service";
import { getUserId } from "../../../../../serivce/cookie.service";
import { BackButton, TransactionsListButton } from "../../../components/Button";
import ListingAdList from "../../../components/Dashboard/Listing/ListingAdList";
import LoadingSpinner from "../../../components/Global/LoadingSpinner";
import { TextLabelInput } from "../../../components/Input";
import SelectInput from "../../../components/SelectInput";
import { Asset, ListingType } from "../../../helpers/enums";
import { isEmpty } from "../../../helpers/isEmpty";
import useMakeReq from "../../../hooks/Global/useMakeReq";
import Drawer from "../../../layouts/Drawer";
import StrictWrapper from "../../../layouts/Drawer/StrictWrapper";
import PageWrapper from "../../../layouts/PageWrapper";
import ListingAdPagination from "../Listing/ListingAdPagination";
import Assets from "./Assets";
import "./buysellcoin.scss";
import { toast } from "react-toastify";

const BuySellCoin = () => {
  // STATES
  const [action, setAction] = useState(1);
  const [coinSelect, setCoinSelect] = useState(null);
  const [listingAds, setListingAds] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  // DRAWER STATES
  const [isOpen, setIsOpen] = useState(false);

  // HOOKS
  const skip = useMemo(() => {
    let output = currentPage * 10 - 1;
    return output < 0 ? 0 : output;
  }, [currentPage]);

  // DATA INTIALIZATION
  const { getLoading, makeAuthGetReq, isSuccessful, data } = useMakeReq();
  const [searchParams] = useSearchParams();
  const coinOptions = [
    { value: 1, label: "USDC"},
    { value: 2, label: "ETH" },
    { value: 3, label: "BNB" },
    { value: 4, label: "BTC" },
    { value: 6, label: "USDT"},
  ];
  const coinId = searchParams?.get("asset");
  const id = searchParams?.get("id");
  const currentUserId = getUserId();

  // SIDE EFFECTS
  useEffect(() => {
    setCoinSelect(
      coinId
        ? coinOptions.find((item) => item.label === coinId)
        : coinOptions[0]
    );
    if (id) {
      setAction(+id);
    } else {
      toast.error("ID isn't present");
    }
  }, []);

  useEffect(() => {
    // making GET request
    makeAuthGetReq(
      `${AUTH_GET_AD_LISTING_BY_VALUE}?skip=${skip}&take=${10}&asset=${
        coinSelect?.value ||
        coinOptions.find((item) => item.label === coinId)?.value ||
        Asset.ETH
      }`
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, coinSelect]);

  // populate data
  useEffect(() => {
    if (isSuccessful && !isEmpty(data)) {
      setListingAds(data?.data);
    }
  }, [data, isSuccessful]);
  return (
    <PageWrapper>
      <div className="w-full min-h-full flex flex-col gap-3 bg-[#f0f0f0]">
        {/* header */}
        <div className="border-b border-[#F5F3F6] bg-white pb-[14px] w-full flex flex-col pt-5 gap-4">
          {/* navbar */}
          <nav className="flex items-center w-[92%] mx-auto justify-between">
            {/* back button */}
            <BackButton />

            {/* text */}
            <div className="flex items-center gap-6">
              <h3
                 onClick={() => setAction(ListingType.BUY)}
                className={`cursor-pointer font-bold pb-2 text-lg ${
                  action === ListingType.BUY
                    ? "active-action1"
                    : "text-[#C3BFCD]"
                }`}
              >
                Buy
              </h3>

              <h3
                onClick={() => setAction(ListingType.SELL)}
                className={`cursor-pointer font-bold pb-2 text-lg ${
                  action === ListingType.SELL
                    ? "active-action2"
                    : "text-[#C3BFCD]"
                }`}
              >
                Sell
              </h3>
            </div>

            {/* transaction list button */}
            <TransactionsListButton />
          </nav>

          {/* wrapper */}
          <div className="w-[92%] mx-auto">
            {/* container */}
            <div className="grid grid-cols-[2fr_1fr] w-full gap-x-3">
              {/* textinput */}
              <TextLabelInput
                label={"NGN"}
                type="number"
                placeholderText={"Enter amount"}
              />

              {/* select input */}
              <SelectInput
                isDisabled={getLoading}
                value={coinSelect}
                onChange={(e) => setCoinSelect(e)}
                options={coinOptions}
              />
            </div>
          </div>
        </div>

        {/* body */}
        <div className="w-full h-full flex flex-col justify-between mx-auto gap-5 bg-transparent">
          {/* container */}
          <div className="w-[92%] flex flex-col mx-auto gap-5 bg-transparent">
            {getLoading ? (
              <LoadingSpinner
                bgColor="bg-transparent"
                viewPortHeight="h-[60vh]"
              />
            ) : (
              <ListingAdList
                coinSelect={coinSelect}
                coinId={coinId}
                listingAds={listingAds?.items 
                  ?.filter(
                    (listingAd) =>
                      listingAd.listingType === action &&
                      listingAd.active === true
                  )
                  }
              />
            )}
          </div>
        </div>

        {/* pagination */}
        <ListingAdPagination
          disabledNextBtn={isEmpty(listingAds) || isEmpty(listingAds.items)}
          totalCount={listingAds?.totalCount}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          skip={skip}
        />

        {/* Drawer */}
        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          position="bottom"
        >
          {/* drawer content container */}
          <StrictWrapper title={"Report"} closeDrawer={() => setIsOpen(false)}>
            {/* Body content */}
            <Assets />
          </StrictWrapper>
        </Drawer>
      </div>
    </PageWrapper>
  );
};

export default BuySellCoin;

//
