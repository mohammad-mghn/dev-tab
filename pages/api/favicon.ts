import type { NextApiRequest, NextApiResponse } from "next";

const getFavicons = require("get-website-favicon");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  getFavicons(req.headers.link)
    .then((data: { icons: { src: string }[] }) => {
      res.status(200).json(data.icons[0].src);
    })
    .catch(() => {
      res.status(500).json("An error accured!");
    });
}
