import React from "react";
import Image from "next/image";

import { Question } from "../../type";

import VoteIcon from "../../public/icons/vote.svg";
import CommentsIcon from "../../public/icons/comments.svg";
import AvatarIcon from "../../public/icons/avatar.svg";

function Article({ item }: { item: Question }) {
  return (
    <article className="p-3 border-gradient border-b-2">
      <h2 className="text-lighter text-[.75rem] lg:text-[.9rem]">{item.title}</h2>

      <p className="px-2 pt-2 lg:pt-1 text-lightgray text-[.7rem] lg:text-[.8rem]">{item.dscr}</p>

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

      <div className="flex items-center text-lightgray text-[.65rem] lg:text-[.8rem]">
        <div className="pr-1 flex items-center gap-x-2 w-[70%]">
          <Image src={VoteIcon} alt="vote icon" className="h-4" />
          <h3>{item.votes}</h3>

          <Image src={CommentsIcon} alt="comments icon" className="h-4" />
          <h3>{item.answers}</h3>

          <Image src={AvatarIcon} alt="avatar icon" className="w-[.9rem]" />
          <h3 className="w-full max-w-[50%] threedots">{item.user}sdaf asdf asd fasd fasdfasdf </h3>
        </div>
        <time className="w-full text-end">{item.time}</time>
      </div>
    </article>
  );
}

export default Article;
