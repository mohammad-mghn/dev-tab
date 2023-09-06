import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowIcon } from "@/constants/icons";

function Redirect() {
  return (
    <div className="mt-[25rem] sm:mt-10 my-36 sm:my-48 px-4 sm:px-[5rem] text-[2.125rem] sm:text-[4.125rem] font-bold text-center flex flex-col items-center">
      <span data-aos="zoom-out-down" data-aos-duration="1000">
        Find everything in one place. no time wasted.
      </span>
      <span
        className="w-fit text-[2.5rem] sm:text-[4.5rem] text-gradient flex items-center sm:border-b-4 border-gradient"
        data-aos="zoom-out-up"
        data-aos-duration="1000"
      >
        <Link href="/dashboard" className="mr-2">
          Let&apos;s try it on web{" "}
        </Link>
        <Image
          src={ArrowIcon}
          alt="arrow icon"
          className="w-[4.25rem] h-[4.5rem] hidden sm:block"
        />
      </span>
    </div>
  );
}

export default Redirect;
