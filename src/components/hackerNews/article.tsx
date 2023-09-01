import React from "react";
import Image from "next/image";

import { TheNews } from "../../types/type";

import AvatarIcon from "../../public/icons/avatar.svg";
import CommentsIcon from "../../public/icons/comments.svg";
import TriangleIcon from "../../public/icons/triangle.svg";
import TriangleOutlineIcon from "../../public/icons/triangle-outline.svg";

function HackerNews({ item }: { item: TheNews }) {
  return (
    <a href={item.link}>
      <article className="p-3 bg-secondary-glass rounded-lg border-glass">
        <div className="flex items-start">
          <Image
            src={TriangleIcon}
            alt="gradient triangle"
            className="mt-[.3rem] w-3"
          />

          <h1 className="pl-3 text-[.95rem] flex-1">{item.title}</h1>
        </div>

        <div className="ml-[1.4rem] mt-1 flex items-center gap-x-2">
          <Image src={AvatarIcon} alt="avatar icon" className="w-[1.1rem]" />

          <h2 className="text-lightSecondary text-[.8rem] font-medium w-full threedots">
            {item.user}
          </h2>
        </div>

        <div className="mt-2 ml-[1.5rem] flex items-center text-lightgray text-[.65rem] lg:text-[.85rem]">
          <div className="flex items-center gap-x-2 flex-1 font-medium">
            <Image src={TriangleOutlineIcon} alt="solid triangle" />
            <h3>{item.points}</h3>

            <Image src={CommentsIcon} alt="solid triangle" />
            <h3>{item.comments}</h3>
          </div>

          <time>{item.time}</time>
        </div>
      </article>
    </a>
  );
}

export default HackerNews;
