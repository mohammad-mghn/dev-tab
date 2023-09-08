import { NextRequest, NextResponse } from "next/server";

// For fetching Website Html
import axios from "axios";
// For loading Html and finding Html elements
import * as cheerio from "cheerio";

import { Post } from "@/types";

type GetPostData = (el: any) => Post;

export async function GET(request: NextRequest) {
  const params: URLSearchParams = request.nextUrl.searchParams;

  // moods like latest posts, top posts, and relevant posts which is default
  const mood: string | null = params.get("mood");

  // topics like TypeScript, vscode, etc
  const topic: string | null = params.get("topic");

  // URL of the dev.to
  const url: string = `https://dev.to`;

  try {
    var path: string = url;

    if (topic) path += `/t/${topic}`;

    switch (mood) {
      case "top":
        const period: string | null = params.get("period");

        if (period === "month" || period === "year" || period === "infinity") {
          path += `/top/${period}`;
          break;
        }

        path += "/top/week";
        break;

      case "latest":
        path += "/latest";
        break;
    }

    // Fetch HTML of the page
    const { data } = await axios.get(path);
    // Load the HTML we fetched in the previous line
    const $ = cheerio.load(data);
    // Select the first post which is the header
    const firstPost = $(
      "body > #page-content > #page-content-inner > .crayons-layout > #main-content > .crayons-story"
    );

    // Select all the list items
    const postsList = $(
      topic
        ? "body > #page-content > #page-content-inner > .home > .articles-list > .substories > div"
        : "body > #page-content > #page-content-inner > .crayons-layout > #main-content > .substories > div"
    );

    // Function for Extracting each post data
    const getPostData: GetPostData = (el) => {
      // Object holding data for each post
      const post: Post = {
        title: "",
        user: "",
        time: "",
        link: "",
        tags: [""],
        comments: "",
        readTime: "",
        thumbnail: "",
        reactions: "",
        avatarImage: "",
      };

      // Now we get each post data
      post.title = $(el).find(`.crayons-story__hidden-navigation-link`).text();

      post.user = $(el)
        .find(
          `.crayons-story__body > .crayons-story__top > .crayons-story__meta > div:nth-child(2) > div > .crayons-story__secondary`
        )
        .text()
        .replaceAll("\n", "")
        .trim();

      const postPath = $(el).find(".crayons-story > a").attr("href");
      post.link = `https://dev.to/${postPath}`;

      post.thumbnail = $(el)
        .find(`.crayons-article__cover > a > img`)
        .attr("src");

      post.avatarImage = $(el)
        .find(
          `.crayons-story__body > .crayons-story__top > .crayons-story__meta > div.crayons-story__author-pic > a.crayons-avatar > img`
        )
        .attr("src")!;

      post.time = $(el)
        .find(
          `.crayons-story__body > .crayons-story__top > .crayons-story__meta > div:nth-child(2) > .crayons-story__tertiary > time`
        )
        .text();

      post.reactions = $(el)
        .find(
          `.crayons-story__body > .crayons-story__indention > .crayons-story__bottom > .crayons-story__details > a:first-child`
        )
        .text()
        .replace("\n              Reactions\n\n", "")
        .replace("reactions\n", "")
        .trim();

      post.comments = $(el)
        .find(
          `.crayons-story__body > .crayons-story__indention > .crayons-story__bottom > .crayons-story__details > a:last-child`
        )
        .text()
        .replace("\n              Comments\n\n", "")
        .replace("comments\n", "")
        .trim();

      post.readTime = $(el)
        .find(
          `.crayons-story__body > .crayons-story__indention > .crayons-story__bottom > .crayons-story__save > small`
        )
        .text()
        .replaceAll("\n", "")
        .trim();

      post.tags = $(el)
        .find(
          `.crayons-story__body > .crayons-story__indention > .crayons-story__tags`
        )
        .text()
        .replaceAll("\n         ", "")
        .trim()
        .split(" ");

      return post;
    };

    // Stores data for all posts
    const posts = [];

    // Add the first post whch was an exception
    if (!topic) posts.push(getPostData(firstPost));

    // Then add other posts
    postsList.each((_, el: any) => {
      const post = getPostData(el);

      if (post.title) posts.push(post);
    });

    // Finally, response the API to page
    return NextResponse.json(posts);
  } catch (error) {
    //   res.status(500).json({ response: "An error has occurred!" });
    return NextResponse.json({
      error: "some error happened during fetching data",
      fixSolution: "check your internet connection, or contact us",
    });
  }
}
