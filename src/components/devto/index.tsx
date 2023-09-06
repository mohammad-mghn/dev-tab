import React from "react";
import Image from "next/image";

import Article from "./article";

import { DevToIcon } from "@/constants/icons";

import { Post } from "@/types";

function DevTo({ posts }: { posts: Post[] }) {
  return (
    <div className="h-[30rem] lg:h-full w-full lg:w-[42.5%] bg-secondary-glass rounded-lg border-glass overflow-hidden">
      <header className="flex gap-x-2 items-center">
        <Image
          src={DevToIcon}
          alt="stackoverflow icon"
          className="w-[3.25rem]"
        />

        <h1 className="text-lightgray text-[1rem]">Stackoverflow</h1>
      </header>

      <div className="overflow-y-auto overflow-x-hidden h-full scrollbar-dark">
        {posts.map((item: Post, index: number) => (
          <Article item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default DevTo;
