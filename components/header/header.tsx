import React from "react";
import Image from "next/image";

import CodeImg from "../../public/codeImg.png";
import Link from "next/link";

function Header() {
  return (
    <section className="md:p-6 lg:p-0 flex lg:justify-between flex-col items-center gap-y-14 lg:flex-row overflow-visible h-full">
      <div className="lg:mr-10 flex lg:block flex-col items-center">
        <h1 className="text-gradient w-fit text-[2.125rem] xl:text-[2.75rem] 2xl:text-5xl !leading-relaxed font-bold sm:mx-auto lg:mx-0 text-center lg:text-start">
          Stay up-to-date
        </h1>
        <h1 className="text-[2rem] xl:text-[2.75rem] 2xl:text-5xl !leading-relaxed font-bold text-center lg:text-start">
          with the latest <br />
          tech news<span className="text-gradient">.</span>
        </h1>
        <p className="mt-2 lg:mt-5 text-sm lg:text-base text-light md:max-w-[20rem] xl:max-w-[25rem] 2xl:max-w-[30rem] !leading-loose sm:!leading-[2rem] text-center lg:text-start">
          WEB TAB makes it easy for you to stay up-to-date with the latest developer news, tools, jobs and events.
        </p>

        <div className="mt-5 lg:mt-[2rem] w-fit sm:w-full lg:w-fit flex justify-center sm:justify-center gap-x-5">
          <Link
            className="px-3 sm:px-6 py-3 bg-gradient rounded-full text-primary text-xs sm:text-sm font-semibold sm:font-medium !leading-relaxed
            "
            href="https://chrome.google.com/webstore/detail/hackertabdev-developer-ne/ocoipcahhaedjhnpoanfflhbdcpmalmp"
            target="_blank"
          >
            ADD TO CHROME
          </Link>
          <Link
            className="px-4 sm:px-6 py-3 rounded-full text-light border-light border-2 text-xs sm:text-sm font-semibold sm:font-medium"
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
