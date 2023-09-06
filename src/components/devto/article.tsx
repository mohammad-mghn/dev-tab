/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

import { LikeIcon, CommentsIcon } from "@/constants/icons";

import { Post } from "@/types";

function Article({ item }: { item: Post }) {
  return (
    <a href={`https://dev.to${item.link}`} target="_blank" rel="noreferrer">
      <article className="p-3 border-b-2 border-gradient">
        {item.timeline && (
          <img
            src={item.timeline}
            alt=""
            className="mb-4 rounded-lg shadow-md"
          />
        )}

        <h2 className="text-lighter text-[.75rem] lg:text-[.95rem]">
          {item.title}
        </h2>

        <div className="flex items-center mt-2 gap-x-2">
          <img
            src={item.avatarImage}
            alt={item.user}
            className="rounded-full w-7 h-7"
          />

          <h3 className="text-lightSecondary font-normal text-[.8rem]">
            {item.user}
          </h3>
        </div>

        {item.tags.length !== 0 && (
          <ul className="flex flex-wrap items-center my-3 gap-x-1 h-fit lg:h-6">
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
