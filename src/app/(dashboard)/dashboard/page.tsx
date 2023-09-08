import React from "react";
import Image from "next/image";
import { Metadata } from "next";

import {
  Time,
  DevTo,
  Bookmarks,
  Searchbar,
  Stackoverflow,
  HackerNewsSection,
} from "@/components";

import { NightJapanBackground } from "@/constants/backgrounds";

export const metadata: Metadata = {
  title: "DEV TAB • Dashboard 🔥",
  description:
    "WEB TAB makes it easy for you to stay up-to-date with the latest developer news, tools, jobs and events.",
  keywords:
    "web tab, developer tab, developer dashboard, developer home page, DEV TAB",
};

const revalidationTime = 60;

const PostsFetcher = async () => {
  const [questionsResponse, newsResponse, postsResponse] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_DB_HOST}/api/stackoverflow`, {
      next: { revalidate: revalidationTime },
    }),
    fetch(`${process.env.NEXT_PUBLIC_DB_HOST}/api/hackernews`, {
      next: { revalidate: revalidationTime },
    }),
    fetch(`${process.env.NEXT_PUBLIC_DB_HOST}/api/devto`, {
      next: { revalidate: revalidationTime },
    }),
  ]);

  const [questions, news, posts] = await Promise.all([
    questionsResponse.json(),
    newsResponse.json(),
    postsResponse.json(),
  ]);

  return { questions, news, posts };
};

async function Dashboard() {
  const { questions, news, posts } = await PostsFetcher();

  console.log(posts);
  return (
    <main className="p-4 lg:h-screen mx-auto md:max-w-[40rem] lg:max-w-full xl:max-w-[95rem] flex flex-col">
      <Image
        src={NightJapanBackground}
        alt=""
        className="w-screen h-screen fixed inset-0 z-[-1]"
      />

      <header className="h-fit lg:h-[10.25rem]">
        <nav className="flex items-center flex-col lg:flex-row gap-x-10 gap-y-5">
          <Time />

          <Searchbar />
        </nav>

        <Bookmarks />
      </header>

      <div className="mt-3 lg:mt-3 h-[calc(100%-11.5rem)] flex justify-between flex-col lg:flex-row gap-y-3">
        <Stackoverflow questions={questions} />

        <DevTo posts={posts} />

        <HackerNewsSection news={news} />
      </div>
    </main>
  );
}

export default Dashboard;
