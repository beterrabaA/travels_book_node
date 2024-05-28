import fs from "fs";

export function writeDataFromFile(content) {
  fs.writeFileSync("./src/data/products.json", JSON.stringify(content), "utf-8", (err) => {
    if (err) {
        console.log("something went wrong writing products file");
    }
  });
}
