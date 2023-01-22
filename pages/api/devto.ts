import type { NextApiRequest, NextApiResponse } from "next";

// For fetching Website Html
import axios from "axios";
// For loading Html and finding Html elements
const cheerio = require("cheerio");

import { Post } from "../../type";

type Query = {
  [key: string]: string | string[] | undefined;
};

type GetPostData = (el: any) => Post;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { topic, sort }: Query = req.query;

  // URL of the dev.to
  // * sort: year , month , week , infinity
  const url = "https://dev.to/";

  async function scrapePosts() {
    try {
      // Fetch HTML of the page
      const { data } = await axios.get(url);
      // Load the HTML we fetched in the previous line
      const $ = cheerio.load(data, { ignoreWhitespace: true });
      // Select the first post which is the header
      const firstPost = $(
        "body > #page-content > #page-content-inner > .crayons-layout > #main-content > .crayons-story"
      );
      // Select all the list items
      const postsList = $(
        "body > #page-content > #page-content-inner > .crayons-layout > #main-content > .substories > div"
      );

      // Function for Extracting each post data
      const getPostData: GetPostData = (el) => {
        // Object holding data for each post
        const post: Post = {
          title: "",
          user: "",
          time: "",
          tags: [""],
          comments: "",
          readTime: "",
          timeline: "",
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

        post.timeline = $(el).find(`.crayons-article__cover > a > img`).attr("src");

        post.avatarImage = $(el)
          .find(
            `.crayons-story__body > .crayons-story__top > .crayons-story__meta > div.crayons-story__author-pic > a.crayons-avatar > img`
          )
          .attr("src");

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
          .find(`.crayons-story__body > .crayons-story__indention > .crayons-story__tags`)
          .text()
          .replaceAll("\n         ", "")
          .trim()
          .split(" ");

        return post;
      };

      // Stores data for all posts
      const posts = [];

      // Add the first post whch was an exception
      posts.push(getPostData(firstPost));

      // Then add other posts
      postsList.each((idx: number, el: any) => {
        const post = getPostData(el);

        if (post.title) posts.push(post);
      });

      // Finally, response the API to page
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ response: "An error has occurred!" });
    }
  }
  scrapePosts();
}
