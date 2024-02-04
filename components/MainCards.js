import Image from "next/image";
import React from "react";
import plus from "@/assets/plus.png";
import man from "@/assets/man.png";
import mann from "@/assets/mann.png";
const MainCards = () => {
  return (
    <section className="pt-[68px] ml-[97px]">
      <div className="flex gap-x-[42px] ">
        <div className="relative h-[312px] w-[284px] bg-[#EDEDED] justify-center items-center flex rounded-3xl hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
          <Image src={plus} />

          <div className="absolute  bottom-0 w-[222px] text-sm text-[#A0A0A0] text-center pb-[34px]">
            You haven’t uploaded any videos with aBit yet. Add now!
          </div>
        </div>

        <div className="relative justify-center items-center flex rounded-3xl scale-105 cursor-pointer">
          <Image src={mann} className="object-cover  h-[312px] w-[284px]" />
          <div className="absolute top-0 left-0 pt-[19px] pl-[13px] text-[20px] drop-shadow-xl text-white font-semibold">
            The Sound of Silence
          </div>

          <div className="absolute bottom-0 w-[246px] h-[53px] text-sm text-white bg-[#696969] text-center mb-[17px] rounded-xl  bg-opacity-40 backdrop-filter backdrop-blur-lg">
            <div className="grid grid-cols-3 pt-1.5">
              <div className="flex flex-col ">
                <div>Shares</div> <div className="font-semibold">317</div>
              </div>
              <div className="flex flex-col">
                <div>Offered</div> <div className="font-semibold">75%</div>
              </div>
              <div className="flex flex-col">
                <div>Raised</div> <div className="font-semibold">$9510</div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainCards;
