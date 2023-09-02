import React from "react";

import { TheNews } from "../../type";
import Hackernew from "./article";

function Hackernews({ news }: { news: TheNews[] }) {
  return (
    <div className="h-[30rem] lg:h-full w-full lg:w-[25%] flex flex-col gap-y-4 overflow-y-auto overflow-x-hidden scrollbar-dark">
      {news.map((item: TheNews, index: number) => (
        <Hackernew item={item} key={index} />
      ))}
    </div>
  );
}

export default Hackernews;
