import * as fs from "fs/promises";

export const WriteHTMLFile = (content: any) => {
  fs.writeFile("hghg.html", content, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Successfully written data to file");
  });
};
