import React from "react";

const Footer = () => {
  return (
    <section className="h-[387px] flex items-center justify-between">
      <div className="flex items-center px-[135px] space-x-[705px]">
        <div className="flex flex-col">
          <div className="font-bold text-[40px]">aBit</div>
          <div className="font-serif w-[313px] text-[20px] capitalize">
            Changing the way in which creators and fans interact.
          </div>
        </div>

        <div>
          <div className="border-l border-[#7A7A7A] pl-[23px] h-[108px] items-center flex">
            <ul className="font-bold space-y-[18px]">
              <li>Home</li>
              <li>Are you a Creator?</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
