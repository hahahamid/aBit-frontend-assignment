import React from "react";

const MainText = () => {
  return (
    <section className="">
      <div className="pt-[147px]">
        <div className="ml-24 mr-[124px] grid grid-cols-2">
          <div>
            <div className="text-[28px] font-serif">Releases</div>
            <div className="text-[#565656] italic font-serif">
              Videos that you upload in collaboration with aBit appear here.
            </div>
          </div>
          <div className="grid grid-cols-4 text-[#696969]">
            <div className="border-l border-[#7A7A7A] pl-[17px] h-[61px] items-center flex">
              <div className="flex flex-col space-y-[5px] ">
                <div className="font-bold">1</div>{" "}
                <div className="w-[70px] text-[14px]">Shared Videos</div>
              </div>
            </div>
            <div className="border-l border-[#7A7A7A] pl-[17px] h-[61px] items-center flex">
              <div className="flex flex-col space-y-[5px]">
                <div className="font-bold ">$9510</div>{" "}
                <div className="w-[70px] text-[14px]">Funds Raised</div>
              </div>
            </div>
            <div className="border-l border-[#7A7A7A] pl-[17px] h-[61px] items-center flex">
              <div className="flex flex-col space-y-[5px]">
                <div className="font-bold ">317</div>{" "}
                <div className="w-[77px] text-[14px]"> Co-owner community</div>
              </div>
            </div>
            <div className="border-l border-[#7A7A7A] pl-[17px] h-[61px] items-center flex">
              <div className="flex flex-col space-y-[5px]">
                <div className="font-bold ">$3804</div>{" "}
                <div className="w-[70px] text-[14px] ">Co-owner Earnings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainText;
