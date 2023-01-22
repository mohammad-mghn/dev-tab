import React from "react";
import Image from "next/image";

import Time from "../../components/time/time";
import Bookmarks from "../../components/bookmarks/bookmarks";
import Searchbar from "../../components/searchbar/searchbar";

import DevToIcon from "../../public/icons/devto.svg";
import NightJapan from "../../public/backgrounds/night-japan.jpg";
import StatckoverflowIcon from "../../public/icons/stackoverflow.svg";

function Loading() {
  return (
    <main className="p-4 lg:h-screen mx-auto lg:max-w-[100%] xl:max-w-[95rem] flex flex-col">
      <Image src={NightJapan} alt="" className="w-screen h-screen fixed inset-0 z-[-1]" />
      <header className="h-fit lg:h-[10.25rem]">
        <nav className="flex items-center flex-col lg:flex-row gap-x-10 gap-y-5">
          <Time />

          <Searchbar />
        </nav>

        <Bookmarks />
      </header>

      <div className="mt-3 lg:mt-3 h-[calc(100%-11.5rem)] flex justify-between flex-col lg:flex-row gap-y-3">
        <div className="h-[30rem] lg:h-full w-full lg:w-[30%] bg-secondary-glass rounded-lg border-glass overflow-hidden">
          <header className="flex gap-x-2 items-center">
            <Image src={StatckoverflowIcon} alt="stackoverflow icon" className="w-[3.25rem]" />

            <h1 className="text-lightgray text-[0.9rem]">Stackoverflow</h1>
          </header>
        </div>

        <div className="h-[30rem] lg:h-full w-full lg:w-[42.5%] bg-secondary-glass rounded-lg border-glass overflow-hidden">
          <header className="flex gap-x-2 items-center">
            <Image src={DevToIcon} alt="stackoverflow icon" className="w-[3.25rem]" />

            <h1 className="text-lightgray text-[1rem]">Stackoverflow</h1>
          </header>
        </div>

        <div className="h-[30rem] lg:h-full w-full lg:w-[25%] flex flex-col gap-y-4 overflow-y-auto overflow-x-hidden scrollbar-dark">
          <article className="p-3 h-24 bg-secondary-glass rounded-lg border-glass" />
          <article className="p-3 h-24 bg-secondary-glass rounded-lg border-glass" />
          <article className="p-3 h-24 bg-secondary-glass rounded-lg border-glass" />
          <article className="p-3 h-24 bg-secondary-glass rounded-lg border-glass" />
          <article className="p-3 h-24 bg-secondary-glass rounded-lg border-glass" />
        </div>
      </div>
    </main>
  );
}

export default Loading;
