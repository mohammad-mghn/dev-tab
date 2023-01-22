import Image from "next/image";
import React from "react";
import Bookmark from "./bookmark";

import AddIcon from "../../public/icons/add.svg";
import { link } from "fs";

function Bookmarks() {
  const bookmarks = [
    {
      title: "SoundCloud",
      link: "https://soundcloud.com/discover",
      icon: "https://a-v2.sndcdn.com/assets/images/sc-icons/favicon-2cadd14bdb.ico",
    },
    {
      title: "TailWindCSS",
      link: "https://tailwindcss.com/",
      icon: "https://tailwindcss.com/favicons/favicon-32x32.png?v=3",
    },
    {
      title: "NextJs 13",
      link: "https://nextjs.org/",
      icon: "https://nextjs.org/static/favicon/favicon-32x32.png",
    },
    {
      title: "Youtube",
      link: "https://youtube.com",
      icon: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png",
    },
    {
      title: "Vercel Dash",
      link: "https://vercel.com/dashboard",
      icon: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
    },
    {
      title: "Gmail Inbox",
      link: "https://mail.google.com/mail/u/0/#inbox",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png",
    },
    {
      title: "Dev To",
      link: "https://dev.to",
      icon: "https://d2fltix0v2e0sb.cloudfront.net/dev-black.png",
    },
    {
      title: "Figma",
      link: "https://www.figma.com/files/recent",
      icon: "https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=670&h=670&q=75&fit=max&auto=format",
    },
    {
      title: "Github",
      link: "https://github.com/vito-mohagheghian",
      icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    },
  ];

  return (
    <div className="mt-3 h-fit lg:h-[5.75rem] overflow-y-auto flex gap-4 flex-wrap justify-center lg:justify-start scrollbar-dark">
      {bookmarks.map((item, index) => (
        <Bookmark key={index} title={item.title} link={item.link} icon={item.icon} />
      ))}

      <button className="w-[4rem] h-[4rem] lg:w-[5.5rem] lg:h-[5.5rem] bg-secondary-glass flex flex-col justify-center items-center gap-y-2 border-glass rounded-md">
        <Image src={AddIcon} alt="" className="w-8 max-h-8 lg:w-12 lg:max-h-12" />
        <h2 className="text-[.6rem] lg:text-[.75rem] text-light">Add</h2>
      </button>
    </div>
  );
}

export default Bookmarks;
