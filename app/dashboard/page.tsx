import Image from "next/image";
import React from "react";
import Bookmarks from "../../components/bookmarks/bookmarks";
import Searchbar from "../../components/searchbar/searchbar";

import NightJapan from "../../public/backgrounds/night-japan.jpg";

import Time from "../../components/time/time";
import Stackoverflow from "./stackoverflow";

const questionFetcher = async () => {
  const response = await fetch("http://localhost:3000/api/stackoverflow", { next: { revalidate: 120 } });

  const data = await response.json();

  return data;
};

async function Dashboard() {
  const questions = await questionFetcher();

  return (
    <main className="p-4 lg:h-screen mx-auto lg:max-w-[62.5rem] xl:max-w-[95rem] flex flex-col">
      {/* <Image src={NightJapan} alt="" className="w-screen h-screen fixed inset-0 z-[-1]" /> */}
      <header className="h-fit lg:h-[10.25rem]">
        <nav className="flex items-center flex-col lg:flex-row gap-x-10 gap-y-5">
          <Time />

          <Searchbar />
        </nav>

        <Bookmarks />
      </header>

      <div className="mt-3 lg:mt-3 h-[calc(100%-11.5rem)] flex justify-between flex-col lg:flex-row gap-y-3">
        <Stackoverflow questions={questions} />
        <div className="h-[30rem] lg:h-[100%] w-full lg:w-[42.5%] bg-secondary-glass-full rounded-lg border-glass"></div>

        <div className="h-[100%] w-[25%] flex flex-col gap-y-4">
          <div className="h-[20%] bg-secondary-glass-full rounded-lg border-glass"></div>
          <div className="h-[20%] bg-secondary-glass-full rounded-lg border-glass"></div>
          <div className="h-[20%] bg-secondary-glass-full rounded-lg border-glass"></div>
          <div className="h-[20%] bg-secondary-glass-full rounded-lg border-glass"></div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
