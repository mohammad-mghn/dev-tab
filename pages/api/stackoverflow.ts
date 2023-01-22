import type { NextApiRequest, NextApiResponse } from "next";

// For fetching Website Html
import axios from "axios";
// For loading Html and finding Html elements
const cheerio = require("cheerio");

import { Question } from "../../type";

type Query = {
  [key: string]: string | string[] | undefined;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Newest
  // MostVotes

  const { topic, sort }: Query = req.query;

  // URL of the StackOverFlow
  const url = `https://stackoverflow.com/questions/tagged/${topic}?sort=${sort}&edited=true`;

  async function scrapeQuestions() {
    try {
      // Fetch HTML of the page
      const { data } = await axios.get(url);
      // Load HTML we fetched in the previous line
      const $ = cheerio.load(data);
      // Select all the list items
      const listItems = $("body > .container > .snippet-hidden > #mainbar > #questions > div");
      // Stores data for all questions
      const questions: Question[] = [];

      listItems.each((idx: number, el: any) => {
        // Object holding data for each question
        const question: Question = {
          title: "",
          dscr: "",
          user: "",
          votes: "",
          answers: "",
          time: "",
          tags: [""],
        };

        // now we get question's title
        question.title = $(el)
          .find(
            `div.s-post-summary--content >
           h3 >
           a`
          )
          .text();

        question.votes = $(el)
          .find(
            `div.s-post-summary--stats > 
          div.s-post-summary--stats-item__emphasized >
          span.s-post-summary--stats-item-number`
          )
          .text();

        question.answers = $(el)
          .find(
            `div.s-post-summary--stats >
           div:nth-child(2) >
           span.s-post-summary--stats-item-number`
          )
          .text();

        question.dscr = $(el)
          .find(
            `div.s-post-summary--content >
           .s-post-summary--content-excerpt`
          )
          .text();

        question.user = $(el)
          .find(
            `div.s-post-summary--content >
           .s-post-summary--meta >
           .s-user-card >
           .s-user-card--info >
           .s-user-card--link >
           a`
          )
          .text();

        question.time = $(el)
          .find(
            `div.s-post-summary--content >
           .s-post-summary--meta >
           .s-user-card >
           .s-user-card--time >
           span`
          )
          .text();

        const tagsElements = $(el).find(
          `div.s-post-summary--content >
           .s-post-summary--meta >
           .s-post-summary--meta-tags >
           ul > li`
        );

        // Stores data for all tags
        const tags: any = [];

        question.tags = tagsElements.map((idx: number, el: any) => {
          // Get Question tag text
          const tag = $(el).find("a").text();

          tags.push(tag);
        });

        question.tags = tags;

        questions.push(question);
      });

      res.status(200).json(questions);
    } catch (error) {
      res.status(500).json({ response: "An error has occurred!" });
    }
  }
  scrapeQuestions();
}
