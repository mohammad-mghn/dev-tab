import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

import { Testimonials } from "@/components";

export const metadata: Metadata = {
  title: "DEV TAB • About 🧑‍💻👨‍💻",
  description:
    "WEB TAB makes it easy for you to stay up-to-date with the latest developer news, tools, jobs and events.",
  keywords:
    "web tab about, web tab about developer developers, tab about, developer dashboard about, developer home page, DEV TAB about",
};

function AboutPage() {
  return (
    <main>
      <h1
        className="text-3xl md:text-5xl text-center font-medium"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <span className="text-gradient font-semibold">About</span> Developers
        <span className="text-gradient">.</span>
      </h1>

      <div className="mt-14 pb-6 flex flex-col md:flex-row items-center gap-5 border-b-2 border-[#6F6E6F]">
        <Image
          src="https://avatars.githubusercontent.com/u/77550037"
          alt="vito mohagheghian"
          width={326}
          height={326}
          className="rounded-xl w-full sm:w-48"
          data-aos="fade-right"
        />

        <div className="p-4" data-aos="fade-left">
          <h2 className="flex gap-2 items-baseline flex-wrap">
            <span className="text-gradient text-2xl font-bold">@</span>
            {"  "}
            <Link
              href={"https://vito-dev.ir"}
              className="text-base md:text-lg hover:underline underline-offset-2"
            >
              Vito Mohagheghian
            </Link>
            {"  "}
            <span className="text-xs sm:text-sm opacity-90">
              Frontend developer - Owner
            </span>
          </h2>

          <p className="mt-3 text-sm text-light leading-loose">
            I&apos;m Vito Mohagheghian. One day, I couldn&apos;t find a suitable
            dashboard for my browser homepage, so I decided to create one
            myself. Now, I have now created a dashboard that is visually
            appealing, highly functional, and customizable. You can personalize
            the appearance and content according to your needs and preferences.
            It has become an essential tool in my daily routine.
          </p>
          <span className="mt-2 block space-x-4">
            <Link
              href={"https://github.com/vito-mohagheghian"}
              className="text-base md:text-lg hover:underline underline-offset-2"
            >
              Github
            </Link>
            <Link
              href={"https://github.com/vito-mohagheghian"}
              className="text-base md:text-lg hover:underline underline-offset-2"
            >
              Portfolio
            </Link>
            <Link
              href={"https://github.com/vito-mohagheghian"}
              className="text-base md:text-lg hover:underline underline-offset-2"
            >
              LinkedIn
            </Link>
          </span>
        </div>
      </div>

      <div className="mt-20">
        <Testimonials />
      </div>
    </main>
  );
}

export default AboutPage;
