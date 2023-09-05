import Image from "next/image";
import { Metadata } from "next";

import {
  Header,
  Contact,
  Redirect,
  Browsers,
  Statuses,
  Testimonials,
  SupportedWebsites,
} from "@/components";

import Banner from "../../../public/banner.png";

export const metadata: Metadata = {
  title: "DEV TAB 🚀",
  description:
    "WEB TAB makes it easy for you to stay up-to-date with the latest developer news, tools, jobs and events.",
  keywords:
    "web tab, developer tab, developer dashboard, developer home page, DEV TAB",
};

export default function Home() {
  return (
    <main>
      <Header />

      <Image
        src={Banner}
        className="mt-10 lg:mt-28 w-full scale-105"
        alt="dev tab dashboard preview"
        data-aos="zoom-in"
        data-aos-duration="1000"
      />

      <Statuses />

      <SupportedWebsites />

      <Testimonials />

      <Browsers />

      <Contact />

      <Redirect />
    </main>
  );
}
