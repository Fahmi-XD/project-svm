import fs from "node:fs";

export async function load() {
  let file = JSON.parse(await fs.readFileSync("src/assets/quotes.json", "utf-8"));

  setTimeout(() => {
    file = {};
  }, 2000)

  return {
    quotes: file
  }
}