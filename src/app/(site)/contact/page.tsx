import React from "react";
import { Metadata } from "next";

import { Contact } from "@/components";

export const metadata: Metadata = {
  title: "DEV TAB • Contact 🤙",
  description:
    "WEB TAB makes it easy for you to stay up-to-date with the latest developer news, tools, jobs and events.",
  keywords:
    "web tab, developer tab, developer dashboard, developer home page, DEV TAB",
};

function Page() {
  return <Contact />;
}

export default Page;
