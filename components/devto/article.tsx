/* eslint-disable @next/next/no-img-element */
import React from "react";

import Image from "next/image";

import { Post } from "../../type";

import LikeIcon from "../../public/icons/like.svg";
import CommentsIcon from "../../public/icons/comments.svg";

function Article({ item }: { item: Post }) {
  return (
    <a href={item.title}>
      <article className="p-3 border-gradient border-b-2">
        {item.timeline && <img src={item.timeline} alt="" className="mb-4 shadow-md rounded-lg" />}

        <h2 className="text-lighter text-[.75rem] lg:text-[.95rem]">{item.title}</h2>

        <div className="mt-2 flex items-center gap-x-2">
          <img src={item.avatarImage} alt={item.user} className="w-7 h-7 rounded-full" />

          <h3 className="text-lightSecondary font-normal text-[.8rem]">{item.user}</h3>
        </div>

        {item.tags.length !== 0 && (
          <ul className="my-3 flex items-center gap-x-1 flex-wrap h-fit lg:h-6">
            {item.tags.map((item: string) => (
              <li
                key={item}
                className="p-2 bg-secondary rounded-md text-lightSecondary text-[.6rem] lg:text-[.7rem] shadow-md"
              >
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 flex items-center text-lightgray text-[.65rem] lg:text-[.8rem]">
          <div className="pr-1 flex items-center gap-x-2 w-[70%]">
            <Image src={LikeIcon} alt="vote icon" className="h-4" />
            <h3>{item.reactions && "No reaction"}</h3>

            <Image src={CommentsIcon} alt="comments icon" className="h-4" />
            <h3>{item.comments}</h3>
          </div>

          <time className="w-full text-end">{item.time}</time>
        </div>
      </article>
    </a>
  );
}

export default Article;
