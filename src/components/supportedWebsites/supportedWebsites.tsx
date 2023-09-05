import React from "react";
import Image from "next/image";

import {
  RedditIcon,
  DevToIcon,
  GithubIcon,
  HashnodeIcon,
  HackerNewsIcon,
  FreeCodeCampIcon,
  StartOverFlowIcon,
} from "../../assets/icons/websites";

function SupportedWebsites() {
  const websitesImages = [
    RedditIcon,
    DevToIcon,
    FreeCodeCampIcon,
    HackerNewsIcon,
    GithubIcon,
    HashnodeIcon,
    StartOverFlowIcon,
  ];

  return (
    <section className="my-24 sm:my-36 flex flex-col items-center text-center">
      <h1 className="text-[1.75rem] sm:text-[2.5rem] font-medium">
        <span className="text-gradient font-semibold">In one place,</span> Your
        favorite websites.
      </h1>

      <h4 className="mt-3 text-light text-[0.75rem] sm:text-[1.1rem] font-medium">
        DEV TAB has everything you need to stay-to-date as developer
      </h4>

      <div className="mt-8 px-2 flex flex-wrap gap-x-12 gap-y-4 justify-center">
        {websitesImages.map((item, index) => (
          <Image src={item} key={index} alt={item} className="w-12 sm:w-16" />
        ))}
      </div>
    </section>
  );
}

export default SupportedWebsites;
