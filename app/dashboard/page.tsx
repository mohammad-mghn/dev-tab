import React from "react";
import Image from "next/image";

import DevTo from "../../components/devto";
import Time from "../../components/time/time";
import Bookmarks from "../../components/bookmarks/bookmarks";
import Searchbar from "../../components/searchbar/searchbar";
import Hackernews from "../../components/hackernews/hackernews";
import Stackoverflow from "../../components/stackoverflow/stackoverflow";

import NightJapan from "../../public/backgrounds/night-japan.jpg";

const revalidationTime = 60;

const PostsFetcher = async () => {
  const [questionsResponse, newsResponse, postsResponse] = await Promise.all([
    fetch(`${process.env.DB_HOST}/api/stackoverflow`, { next: { revalidate: revalidationTime } }),
    fetch(`${process.env.DB_HOST}/api/hackernews`, { next: { revalidate: revalidationTime } }),
    fetch(`${process.env.DB_HOST}/api/devto`, { next: { revalidate: revalidationTime } }),
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

  return (
    <main className="p-4 lg:h-screen mx-auto md:max-w-[40rem] lg:max-w-full xl:max-w-[95rem] flex flex-col">
      <Image src={NightJapan} alt="" className="w-screen h-screen fixed inset-0 z-[-1]" />

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

        <Hackernews news={news} />
      </div>
    </main>
  );
}

export default Dashboard;
