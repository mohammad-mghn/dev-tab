import type { NextApiRequest, NextApiResponse } from "next";

// For fetching Website Html
import axios from "axios";
// For loading Html and finding Html elements
const cheerio = require("cheerio");

type TheNews = {
  [key: string]: string;
};

type Query = {
  [key: string]: string | string[] | undefined;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page }: Query = req.query;

  // URL of the StackOverFlow
  // In hacker ycombinator.com the maximum page number you search for is 34 so first check
  // if the client mentioned to page and then check if it's not greater than 34
  const url = `https://news.ycombinator.com/?p=${page && +page >= 34 ? "34" : page}`;

  async function scrapeNews() {
    try {
      // Fetch HTML of the page
      const { data } = await axios.get(url);
      // Load HTML we fetched in the previous line
      const $ = cheerio.load(data);
      // Select all the list items
      const listItems = $("body > center > table > tbody > tr:nth-child(3) > td > table > tbody > tr");
      // Due to hacker news HTML structure, each news is held in three tr so we need to make
      // a new array in which each array item has three chuck of the previous array
      const chunk = (arr: any, chunkSize: number) => {
        var result: any = [];
        for (var i = 0, len = arr.length; i < len; i += chunkSize) result.push(arr.slice(i, i + chunkSize));
        return result;
      };
      // Stores data for all questions
      const news: TheNews[] = [];

      // Then chunk the array 3 and then scrape each the news data
      chunk(listItems, 3).forEach((item: any) => {
        // Object holding data for each question
        const theNews: TheNews = {
          title: "",
          link: "",
          user: "",
          time: "",
          points: "",
          comments: "",
        };

        theNews.title = $(item[0]).find(":last-child > a").text();

        theNews.link = $(item[0]).find(":last-child > span > a:first").attr("href");

        theNews.points = $(item[1]).find(":last-child > span > span:first").text().replace(" points", "");

        theNews.user = $(item[1]).find(":last-child > span > .hnuser").text();

        theNews.time = $(item[1]).find(":last-child > span > .age > a").text();

        theNews.comments = $(item[1]).find(":last-child > span > a:last").text().replace(" comments", "");

        // Check if it is not the empty one
        if (theNews.title) {
          news.push(theNews);
        }
      });

      res.status(200).json(news);
    } catch (error) {
      res.status(500).json({ response: "An error has occurred!" });
    }
  }
  scrapeNews();
}
