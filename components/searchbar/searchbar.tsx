"use client";

import React, { FormEvent } from "react";
import Image from "next/image";

import SearchIcon from "../../public/icons/search.svg";
import SettingsIcon from "../../public/icons/settings.svg";

function Searchbar() {
  const searchbarHandler: (e: any) => void = (e) => {
    e.preventDefault();

    const text = e.target[0].value;

    if (text) {
      window.location.href = `https://www.google.com/search?q=${text}`;
    }
  };

  return (
    <div className="p-[.6rem] lg:px-4 flex-1 w-full h-[3.5rem] bg-secondary-glass border-glass flex items-center rounded-lg shadow-sm">
      <form className="w-full flex items-center gap-x-[.5rem] lg:gap-x-[1rem]" onSubmit={searchbarHandler}>
        <Image src={SearchIcon} alt="search icon" className="w-[1.25rem] lg:w-[1.75rem]" />
        <input
          type="text"
          className="h-full w-full bg-transparent outline-none border-none text-[.8rem] lg:text-[1rem] placeholder:text-lightSecondary"
          placeholder="Search on Google"
        />
      </form>
      <button className="flex items-center">
        <Image src={SettingsIcon} alt="settings icon" className="w-[1.25rem] lg:w-[1.5rem]" />
      </button>
    </div>
  );
}

export default Searchbar;
