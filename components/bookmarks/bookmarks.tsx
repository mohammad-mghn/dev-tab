"use client";

import Image from "next/image";
import Bookmark from "./bookmark";
import React, { useState, useEffect } from "react";

import AddIcon from "../../public/icons/add.svg";

type bookmarkType = {
  [key: string]: string;
};

const bookmarksDefault: bookmarkType[] = [
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
    icon: "https://cdn.icon-icons.com/icons2/3053/PNG/512/figma_macos_bigsur_icon_190183.png",
  },
  {
    title: "Github",
    link: "https://github.com/vito-mohagheghian",
    icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
  },
  {
    title: "Mongo DB",
    link: "http://mongodb.com/",
    icon: "https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png",
  },
  {
    title: "Spline",
    link: "https://spline.design/",
    icon: "https://june-changelog.s3.eu-central-1.amazonaws.com/spline_icon_twitter_removebg_preview_db2832210b.png",
  },
  {
    title: "Twitter",
    link: "https://twitter.com/",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png",
  },
];

const LOCALSTORGENAME = "dev-tab__bookmarks";

function Bookmarks() {
  const savedBookmarks: string | null = localStorage.getItem(LOCALSTORGENAME);

  // bookmarks array
  const [bookmarks, setBookmarks] = useState(JSON.parse(savedBookmarks) ?? bookmarksDefault);

  // Add bookmark pop-up state
  const [addBookmark, setAddBookmark] = useState(false);

  const localStorgeHandler = (bookmarks: bookmarkType[]) => {
    localStorage.setItem(LOCALSTORGENAME, JSON.stringify(bookmarks));
  };

  const removeBookmarkHandler = (index: number) => {
    // store bookmarks into new variable for adding changes
    const newArray = bookmarks;

    // remove bookmark object
    newArray.splice(index, 1);

    // update bookmark statem but due to cloning object problem in js we have to use this trick
    setBookmarks(JSON.parse(JSON.stringify(newArray)));

    // Finally update localStorge
    localStorgeHandler(newArray);
  };

  // Handler for closing or showing add bookmark pop-up
  const AddBookmarkHandler = () => {
    setAddBookmark((prevValue) => !prevValue);
  };

  const addBookmarkHandler = (e: any) => {
    e.preventDefault();

    // check all input that are filled
    if (e.target[0].value && e.target[1].value && e.target[2].value) {
      // make new bookmark object
      const bookmark: bookmarkType = {
        title: e.target[0].value,
        link: e.target[1].value,
        icon: e.target[2].value,
      };

      // store bookmarks array into new array
      const newArray = bookmarks;

      // then push new bookmark to the end
      newArray.push(bookmark);

      // update bookmarks state but because we update component using next setState there's no need for that trick
      setBookmarks(newArray);

      // update localStorge
      localStorgeHandler(newArray);

      // close pop-up
      AddBookmarkHandler();
    }
  };

  useEffect(() => {
    if (!savedBookmarks) {
      // for first time opening website
      localStorgeHandler(bookmarksDefault);
    }
  }, []);

  return (
    <>
      <div className="pt-2 h-fit  lg:h-[6rem] overflow-y-auto flex gap-4 flex-wrap justify-center lg:justify-start scrollbar-dark">
        {bookmarks.map((item: bookmarkType, index: number) => (
          <Bookmark
            key={index}
            index={index}
            link={item.link}
            icon={item.icon}
            title={item.title}
            removeBookmarkhandler={removeBookmarkHandler}
          />
        ))}

        <button
          className="w-[4rem] h-[4rem] lg:w-[5.5rem] lg:h-[5.5rem] bg-secondary-glass flex flex-col justify-center items-center gap-y-2 border-glass rounded-md"
          onClick={AddBookmarkHandler}
        >
          <Image src={AddIcon} alt="" className="w-8 max-h-8 lg:w-12 lg:max-h-12" />
          <h2 className="text-[.6rem] lg:text-[.75rem] text-light">Add</h2>
        </button>
      </div>

      <div
        className={`fixed top-0 z-10 left-0 h-screen w-screen ${
          addBookmark ? "flex" : "hidden"
        }  items-center justify-center bg-lightgray bg-opacity-25`}
        onClick={(e) => {
          e.stopPropagation();

          AddBookmarkHandler();
        }}
      >
        <form
          className="flex flex-col items-start justify-center w-[calc(100%-3rem)] px-8 py-10 shadow-xl max-w-[25rem] gap-y-3 bg-secondary-glass rounded-2xl"
          onClick={(e) => {
            e.stopPropagation();
          }}
          onSubmit={addBookmarkHandler}
        >
          <label htmlFor="title" className="text-light">
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Youtube"
            className="p-[.6rem] lg:px-4 flex-1 w-full h-[3.5rem] bg-secondary-glass border-glass flex items-center rounded-lg shadow-sm placeholder:text-xs"
          />

          <label htmlFor="url" className="text-light">
            Url
          </label>
          <input
            type="text"
            id="url"
            placeholder="https://example.com"
            className="bg-secondary-glass border-glass p-[.6rem] lg:px-4 flex-1 w-full h-[3.5rem]  flex items-center rounded-lg shadow-sm placeholder:text-xs"
          />

          <label htmlFor="url" className="text-light">
            Icon address
          </label>
          <input
            type="text"
            id="url"
            placeholder="https://example.com/icon.png"
            className="bg-secondary-glass border-glass p-[.6rem] lg:px-4 flex-1 w-full h-[3.5rem]  flex items-center rounded-lg shadow-sm placeholder:text-xs"
          />

          <button className="w-full py-2 mt-2 shadow-md bg-gradient rounded-xl text-primary" type="submit">
            Add
          </button>
        </form>
      </div>
    </>
  );
}

export default Bookmarks;
