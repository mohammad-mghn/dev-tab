import type { NextApiRequest, NextApiResponse } from "next";

const request = require("request");
const cheerio = require("cheerio");

// type Data = {
//   name: string;
// };
// Loading the dependencies. We don't need pretty
// because we shall not log html to the terminal
const axios = require("axios");
const fs = require("fs");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // const url = "https://chrome.google.com/webstore/detail/hackertabdev-developer-ne/ocoipcahhaedjhnpoanfflhbdcpmalmp";

  // request(url, (err: any, res: any, body: any) => {
  //   if (err) console.log(err);
  //   else {
  //     // console.log(body);
  //     const $ = cheerio.load(body);
  //     $.prototype.logHtml = function () {
  //       console.log("asdfs", this.text());
  //     };

  //     console.log("123123", $(".nAtiRe").logHtml());
  //     // parseBody(body);
  //   }
  // });

  // function parseBody(body: any) {
  //   const $ = cheerio.load(body);

  //   // $.prototype.logHtml = function () {
  //   //   console.log(this.text());
  //   // };

  //   const hhhh = $(".nAtiRe");

  //   console.log(hhhh);
  // }

  // URL of the page we want to scrape
  const url = "https://chrome.google.com/webstore/detail/hackertabdev-developer-ne/ocoipcahhaedjhnpoanfflhbdcpmalmp";
  // const url = "https://github.com/vito-mohagheghian";

  // Async function which scrapes the data
  async function scrapeData() {
    // Fetch HTML of the page we want to scrape
    const { data } = await axios.get(url);
    // Load HTML we fetched in the previous line
    const $ = cheerio.load(data);
    // Select all the list items in plainlist class
    const listItems = $("body").attr("style");
    // const listItems = $(
    //   "body > div > div.application-main > main > div > div > div > div > div.js-profile-editable-replace > div > div > h1 > span"
    // ).text();
    // Stores data for all countries
    // const countries = [];
    // // Use .each method to loop through the li we selected
    // listItems.each((idx, el) => {
    //   // Object holding data for each country/jurisdiction
    //   const country = { name: "", iso3: "" };
    //   // Select the text content of a and span elements
    //   // Store the textcontent in the above object
    //   country.iso3 = $(el).text();
    //   // Populate countries array with country data
    //   countries.push(country);
    // });
    // Logs countries array to the console
    // console.dir(countries);
    // Write countries array in countries.json file
    // fs.writeFile("coutries.json", JSON.stringify(countries, null, 2), (err) => {
    //   if (err) {
    //     console.error(err);
    //     return;
    //   }
    //   console.log("Successfully written data to file");
    // });
    console.log(listItems);
  }
  // Invoke the above function
  scrapeData();
}
