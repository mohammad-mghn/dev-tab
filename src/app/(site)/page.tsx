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

      <Statuses />

      <SupportedWebsites />

      <Testimonials />

      <Browsers />

      <Contact />

      <Redirect />
    </main>
  );
}
