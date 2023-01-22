/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {
  link: string;
  icon: string;
  title: string;
};

function Bookmark({ title, link, icon }: Props) {
  return (
    <a
      href={link}
      className="w-[4rem] h-[4rem] lg:w-[5.5rem] lg:h-[5.5rem] bg-secondary-glass flex flex-col justify-center items-center gap-y-2 border-glass rounded-md"
    >
      <img src={icon} alt={title} className="w-6 max-h-6 lg:w-10 lg:max-h-10 rounded-md" />
      <h2 className="px-1 text-[.6rem] lg:text-[.75rem] w-full threedots text-light text-center">{title}</h2>
    </a>
  );
}

export default Bookmark;
