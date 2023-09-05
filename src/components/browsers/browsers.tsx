import React from "react";
import Image from "next/image";

import {
  EdgeIcon,
  BraveIcon,
  ChromeIcon,
  SafariIcon,
  FirefoxIcon,
} from "@/assets/icons/browsers";

function Browsers() {
  const BrowsersIcon = [
    { icon: BraveIcon, text: "Brave" },
    { icon: ChromeIcon, text: "Chrome" },
    { icon: EdgeIcon, text: "Edge" },
    { icon: FirefoxIcon, text: "Firefox" },
    { icon: SafariIcon, text: "Safari" },
  ];

  return (
    <section className="my-36">
      <h1
        className="text-[2rem] sm:text-[2.5rem] font-semibold"
        data-aos="fade-right"
      >
        <span className="text-gradient">Try it now</span> — Free
      </h1>

      <p
        className="mt-1 text-[1rem] sm:text-[1.25rem] font-medium text-light"
        data-aos="fade-up"
      >
        Hackertab extension is available on Chrome, Firefox, Brave and Edge
      </p>

      <div className="mt-8 grid grid-cols-2 sm:flex flex-wrap gap-4">
        {BrowsersIcon.map((item, index) => (
          <div
            className="h-[10rem] sm:h-[14rem] w-full sm:w-[13.5rem] flex flex-col items-center justify-center bg-secondary rounded-md cursor-pointer duration-300 hover:shadow-xl"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <Image
              src={item.icon}
              alt={item.text}
              className="w-[4.5rem] sm:w-[6rem]"
            />

            <h2 className="mt-6 font-medium text-light text-[1.25rem]">
              {item.text}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Browsers;
