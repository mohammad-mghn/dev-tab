"use client";

/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import React from "react";

import BinIcon from "../../public/icons/bin.svg";

type Props = {
  link: string;
  icon: string;
  index: number;
  title: string;
  removeBookmarkhandler: any;
};

function Bookmark({ title, link, index, icon, removeBookmarkhandler }: Props) {
  const removeHandler = () => {
    removeBookmarkhandler(index);
  };

  return (
    <div className="relative w-[4rem] h-[4rem] lg:w-[5.5rem] lg:h-[5.5rem] bg-secondary-glass flex flex-col justify-center items-center border-glass rounded-md group">
      <a href={link} className="flex flex-col items-center justify-center gap-y-2">
        <img src={icon} alt={title} className="w-6 rounded-md max-h-6 lg:w-10 lg:max-h-10" />
        <h2 className="px-1 text-[.6rem] lg:text-[.75rem] w-full threedots text-light text-center">{title}</h2>
      </a>

      <button
        className="absolute top-[-.5rem] right-[-.5rem] p-2 hidden group-hover:flex items-center justify-center bg-secondary-glass shadow-md rounded-full"
        onClick={removeHandler}
      >
        <Image src={BinIcon} alt="" className="w-4" />
      </button>
    </div>
  );
}

export default Bookmark;
