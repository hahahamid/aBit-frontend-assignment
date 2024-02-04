import Image from "next/image";
import React from "react";
import dan from "@/assets/dan.svg";
import ticket from "@/assets/ticket.png";

const Card = () => {
  return (
    <section className="absolute mt-[470px] ml-[122px] rounded-[26px] h-[234px] w-[571px] flex shadow-lg shadow-[#696969]">
      <div className="relative">
        <Image src={ticket} />
        <div className="absolute top-0 left-0">
          <Image src={dan} />
        </div>
        <div className="absolute top-0 mt-[23px] ml-[262px] items-center flex gap-x-10">
          <div className=" uppercase font-bold text-[24px]">Dan Mace</div>
          <p className="ml-29 text-sm">/Johny_Films/</p>
        </div>

        <div className="absolute top-0 mt-[73px] ml-[262px] flex flex-col text-[#696969]">
          <div className=" font-semibold text-[14]">Bio</div>
          <p className="ml-29 text-sm w-[260px]">Simply a film fan creating original content for YouTube. Let’s Collaborate.</p>
        </div>
        
        <div className="absolute top-0 mt-[167px] ml-[262px] flex text-[#696969]">
          <div className=" font-serif w-[128px] h-[29px] text-center text-[14] border rounded-l-md border-black text-black">Creator</div>
          <p className="ml-29 text-sm w-[128px] h-[29px] rounded-r-md bg-[#535353] border border-black"></p>
        </div>
      </div>
    </section>
  );
};

export default Card;
