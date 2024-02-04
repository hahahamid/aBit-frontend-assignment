import Image from "next/image";
import Link from "next/link";
import React from "react";
import wallet from "@/assets/wallet.png";
import bell from "@/assets/bell.png";
import arrow from "@/assets/arrow.png";
import img from "@/assets/img.png";
import bg from "@/assets/bg.png";
const Navbar = () => {
  

  const backgroundImageStyle = {
    backgroundImage: `url(${bg.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  
  return (
    <section style={backgroundImageStyle}  class=" border-b-2 border-black">
      <div class="max-w-full">
        <nav class="flex items-center justify-between h-[110px]">
          <Link
            href="#"
            class="text-3xl font-semibold leading-none  ml-[123px] text-[#292D32]"
          >
            aBit
          </Link>
          <div class="lg:hidden">
            <button class="flex items-center px-3 py-2 text-blue-200 border border-blue-200 rounded dark:text-gray-400 hover:text-blue-300 hover:border-blue-300 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </button>
          </div>

          <ul class="hidden lg:w-auto lg:space-x-[15px] lg:items-center lg:flex mr-[54px] ">
            <li>
              <div class="hidden lg:block">
                <Link
                  href=""
                  class="inline-block font-semibold px-4 py-3 mr-2 text-xs leading-none text-[#764CC2] border-2 border-[#764CC2] rounded-full hover:bg-[#764CC2]  hover:text-white"
                >
                  Share new video
                </Link>
              </div>
            </li>
            <li>
              <Link
                href=""
                class="text-sm text-gray-200  hover:text-blue-200 dark:hover:text-blue-200"
              >
                <Image src={wallet} />
              </Link>
            </li>
            <li>
              <Link
                href=""
                class="text-sm text-gray-200  hover:text-blue-200 dark:hover:text-blue-200"
              >
                <Image src={bell} />
              </Link>
            </li>
            <li>
              <Link
                href=""
                class="text-sm text-gray-200  hover:text-blue-200 dark:hover:text-blue-200"
              >
                <Image src={img} />
              </Link>
            </li>
            <li>
              <Link
                href=""
                class="text-sm text-gray-200  hover:text-blue-200 dark:hover:text-blue-200"
              >
                <Image src={arrow} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
