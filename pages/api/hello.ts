import type { NextApiRequest, NextApiResponse } from "next";

const fs = require("fs");
const request = require("request");
const cheerio = require("cheerio");

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const url = "https://vito.vercel.app";

  request(url, (err: any, res: any, body: any) => {
    if (err) console.log(err);
    else {
      parseBody(body);
    }
  });

  function parseBody(body: any) {
    const $ = cheerio.load(body);
    let array = [];
    $.prototype.logHtml = function () {
      console.log(this.text());
    };
    $("div.C-b-p-j-Pb").logHtml();
  }
}
