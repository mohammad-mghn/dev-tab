"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import Menu from "../../public/icons/menu.svg";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle((prevValue) => !prevValue);
  };

  return (
    <nav className="px-6 lg:px-0 relative py-6 flex items-center justify-between">
      <h1 className="text-[1.5rem] font-medium hover:underline">
        <Link href={"/"}>DEV TAB</Link>
      </h1>
      <div className="hidden ml-8 sm:flex flex-1 items-center justify-between">
        <ul className="flex gap-x-6">
          <li className="text-light hover:text-lighter">
            <Link href={"/about"}>About</Link>
          </li>
          <li className="text-light hover:text-lighter">
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
        <button className="py-2 px-5 bg-lighter text-primary text-[0.9rem] rounded-full font-medium">DASHBOARD</button>
      </div>

      {/* <mobile> */}
      <div
        className={`sm:hidden ${
          toggle
            ? "flex justify-between flex-col gap-4 w-[calc(100%-6rem)] absolute top-[5rem] animate-zoom-in"
            : "hidden"
        }`}
      >
        <ul className="flex gap-x-4 items-center">
          <li className="text-light hover:text-lighter">
            <Link href={"/about"}>About</Link>
          </li>
          <li className="text-light hover:text-lighter">
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
        <button className="py-2 px-5 bg-lighter text-primary text-[0.9rem] rounded-full font-medium w-fit">DASHBOARD</button>
      </div>

      <button className="sm:hidden" onClick={toggleHandler}>
        <Image src={Menu} alt="menu icon" />
      </button>
      {/* </mobile> */}
    </nav>
  );
}

export default Navbar;
