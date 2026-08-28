import fs from "node:fs";

export function readText(file) {
  try {
    const data = fs.readFileSync("./input/" + file, 'utf8');
    return(data);
  } catch (err) {
    console.error(err);
  }
}
