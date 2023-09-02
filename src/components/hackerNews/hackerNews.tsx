import React from "react";

import HackerNews from "./article";

import { TheNews } from "@/types";

function HackerNewsSection({ news }: { news: TheNews[] }) {
  return (
    <div className="h-[30rem] lg:h-full w-full lg:w-[25%] flex flex-col gap-y-4 overflow-y-auto overflow-x-hidden scrollbar-dark">
      {news.map((item: TheNews, index: number) => (
        <HackerNews item={item} key={index} />
      ))}
    </div>
  );
}

export default HackerNewsSection;
