import Image from "next/image";
import Link from "next/link";
import React from "react";

import { GithubIcon, LinkedInIcon } from "@/assets/icons";

function Footer() {
  return (
    <div className="my-10 pt-10 border-t-2 border-dark">
      <div className="flex justify-between">
        <p className="text-lighter text-[1.25rem] sm:text-[1.75rem]">DEV TAB</p>

        <ul className="flex items-center gap-x-4 text-light text-[.85rem] sm:text-[1.25rem] ">
          <li className="hover:text-lighter">
            <Link href="/contact">Contact</Link>
          </li>

          <li className="hover:text-lighter">
            <Link href="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>

      <div className="mt-3 flex justify-between items-center">
        <p className="text-[.85rem] sm:text-[1.25rem]">©️ MIT Liecese</p>

        <div className="flex items-center gap-x-2">
          <Link
            href="https://www.linkedin.com/in/vito-mohagheghian-5a8160214/"
            target="_blank"
          >
            <Image src={LinkedInIcon} alt="" className="w-7 sm:w-9" />
          </Link>

          <Link href="https://github.com/vito-mohagheghian" target="_blank">
            <Image
              src={GithubIcon}
              alt=""
              className="w-[2.25rem] sm:w-[2.6rem]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
