import { useNavigate } from "react-router-dom";

const PendingPaymentsCard = () => {
  // DATA INITIALIZATION
  const navigate = useNavigate();

  return (
    <div className=" bg-white">
      <div className="flex justify-between py-3 border-b border-solid">
        <div>
          <p className="font-normal text-xs text-[#8D85A0] pb-1">
            09/06/38 - 10:56AM
          </p>
          <div  className="flex gap-1">
          <h4 className="text-base font-bold text-black">#100,000.00(BTC)</h4>
          <span className="w-2 h-2 bg-[#EB9B00] rounded mt-2"></span>
          </div>
          <h4 className="font-normal text-xs text-[#8D85A0] pt-1">
            ASEMOTA JOEL
          </h4>
        </div>

        {/* see listing button */}
        <span
          onClick={() => navigate("/listing/pending-payments/nbfrthjkut")}
          className="bg-[#F4EFFE] rounded-[32px] h-[35px] px-4 mt-2 inline-flex items-center justify-center hover:bg-gray-200 cursor-pointer text-[#3A0CA3] text-xs font-normal"
        >
          See Listing
        </span>

        {/* view more button */}
        <span className="bg-[#F4EFFE] rounded-[32px] h-[35px] px-4 mt-2 inline-flex items-center justify-center hover:bg-gray-200 cursor-pointer text-[#3A0CA3] text-xs font-normal">
          View More
        </span>
      </div>
    </div>
  );
};

export default PendingPaymentsCard;
