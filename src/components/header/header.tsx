import React from "react";
import Link from "next/link";
import Image from "next/image";

import { CodeImg } from "@/constants";

function Header() {
  return (
    <section className="md:p-6 lg:p-0 mt-16 flex lg:justify-between flex-col items-center gap-y-14 lg:flex-row h-full">
      <div className="lg:mr-10 flex lg:block flex-col items-center">
        <h1
          className="text-gradient w-fit text-[2.125rem] xl:text-[2.75rem] 2xl:text-5xl !leading-relaxed font-bold sm:mx-auto lg:mx-0 text-center lg:text-start"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Stay up-to-date
        </h1>
        <h1
          className="text-[2rem] xl:text-[2.75rem] 2xl:text-5xl !leading-relaxed font-bold text-center lg:text-start"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          with the latest <br />
          tech news<span className="text-gradient">.</span>
        </h1>
        <p
          className="mt-2 lg:mt-5 text-sm lg:text-base text-light md:max-w-[20rem] xl:max-w-[25rem] 2xl:max-w-[30rem] !leading-loose sm:!leading-[2rem] text-center lg:text-start"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="750"
        >
          WEB TAB makes it easy for you to stay up-to-date with the latest
          developer news, tools, jobs and events.
        </p>

        <div className="mt-5 lg:mt-[2rem] w-fit sm:w-full lg:w-fit flex justify-center sm:justify-center gap-x-5">
          <Link
            className="px-3 sm:px-6 py-3 bg-gradient rounded-full text-primary text-xs sm:text-sm font-semibold sm:font-medium !leading-relaxed transition-all duration-300"
            href="https://chrome.google.com/webstore/detail/hackertabdev-developer-ne/ocoipcahhaedjhnpoanfflhbdcpmalmp"
            target="_blank"
            data-aos="zoom-in-up"
            data-aos-delay="600"
          >
            ADD TO CHROME
          </Link>
          <Link
            className="px-4 sm:px-6 py-3 rounded-full hover:bg-light text-light hover:text-primary border-light border-2 text-xs sm:text-sm font-semibold sm:font-medium transition-all duration-300"
            href="/dashboard"
            data-aos="fade-left"
            data-aos-delay="700"
          >
            USE ON WEB
          </Link>
        </div>
      </div>

      <div className="xl:-mr-4 relative lg:max-w-[30rem] xl:max-w-[34rem] flex items-center justify-center md:justify-end flex-1 overflow-visible">
        <b className="bg-pink-gradient" />
        <b className="bg-orange-gradient" />
        <b className="bg-red-gradient" />
        <Image
          src={CodeImg}
          className="w-[32.5rem] relative z-5"
          alt="code image"
          data-aos="fade-up"
          data-aos-duration="1250"
          data-aos-anchor-placement="center-bottom"
        />
      </div>
    </section>
  );
}

export default Header;
