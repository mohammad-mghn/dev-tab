import React from "react";
import Image from "next/image";

import CodeImg from "../../public/codeImg.svg";
import Link from "next/link";

function Header() {
  return (
    <section className="p-6 lg:p-0 flex justify-between flex-col items-center gap-y-14 lg:flex-row lg:items-center overflow-visible h-full">
      <div className="mr-10">
        <h1 className="text-gradient w-fit text-[2.25rem] xl:text-[2.75rem] 2xl:text-[3.5rem] font-bold sm:mx-auto lg:mx-0">
          Stay up-to-date
        </h1>
        <h1 className="text-[2rem] xl:text-[2.75rem] 2xl:text-[3.5rem] font-bold sm:text-center lg:text-start">
          with the latest <br />
          tech news<span className="text-gradient">.</span>
        </h1>
        <p className="mt-5 text-light md:w-[20rem] xl:w-[25rem] 2xl:[30rem] leading-[2rem] sm:text-center lg:text-start">
          WEB TAB makes it easy for you to stay up-to-date with the latest developer news, tools, jobs and events.
        </p>
        <div className="mt-[2rem] w-fit flex gap-x-5 sm:mx-auto lg:mx-0">
          <Link
            className="px-4 sm:px-6 py-3 bg-gradient rounded-full text-primary text-[0.55rem] sm:text-[0.9rem] font-semibold sm:font-medium"
            href="https://chrome.google.com/webstore/detail/hackertabdev-developer-ne/ocoipcahhaedjhnpoanfflhbdcpmalmp"
            target="_blank"
          >
            ADD TO CHROME
          </Link>
          <Link
            className="px-4 sm:px-6 py-3 rounded-full text-light border-light border-2 text-[0.55rem] sm:text-[0.9rem] font-semibold sm:font-medium"
            href="/dashbaord"
          >
            USE ON WEB
          </Link>
        </div>
      </div>

      <div className="relative lg:max-w-[30rem] xl:max-w-[34rem] flex items-center justify-center md:justify-end flex-1 overflow-visible">
        <b className="bg-pink-gradient" />
        <b className="bg-orange-gradient" />
        <b className="bg-red-gradient" />
        <Image src={CodeImg} className="w-[32.5rem] relative z-5" alt="code image" />
      </div>
    </section>
  );
}

export default Header;
