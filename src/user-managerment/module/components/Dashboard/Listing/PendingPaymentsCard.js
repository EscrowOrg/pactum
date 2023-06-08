import { useNavigate } from "react-router-dom";

const PendingPaymentsCard = () => {
  // DATA INITIALIZATION
  const navigate = useNavigate();

  return (
    <div className=" bg-white">
      <div className="flex justify-between py-3 border-b border-solid">
        <div>
          <p className="font-bold text-xs text-[#3A0CA3] pb-1">BUY ORDER</p>
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-[#EB9B00] rounded mt-2"></span>
            <h4 className="text-base font-bold text-black">₦100,000.00(BTC)</h4>
          </div>
          <h4 className="font-normal text-xs text-[#8D85A0] pt-1">
            jhoellnosa
          </h4>
        </div>

        <div>
          {/* time */}
          <p className="font-normal text-xs text-[#8D85A0] pl-16">
            09/06/2023 - 10:56AM
          </p>

          {/* see listing button */}
          <span
            onClick={() => navigate("/listing/pending-payments/nbfrthjkut")}
            className="bg-[#F4EFFE] rounded-[32px] h-[35px] px-4 mt-2 inline-flex items-center justify-center hover:bg-gray-200 cursor-pointer text-[#3A0CA3] text-xs font-normal mr-2"
          >
            See Listing
          </span>

          {/* view more button */}
          <span className="bg-[#F4EFFE] rounded-[32px] h-[35px] px-4 mt-2 inline-flex items-center justify-center hover:bg-gray-200 cursor-pointer text-[#3A0CA3] text-xs font-normal">
            View More
          </span>
        </div>
      </div>
    </div>
  );
};

export default PendingPaymentsCard;
