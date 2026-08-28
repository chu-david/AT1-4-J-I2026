import fs from "node:fs";

export function readText(file) {
  try {
    const data = fs.readFileSync("./input/" + file, "utf8");
    return data;
  } catch (err) {
    console.error(err);
  }
}

export function writeText(file, content) {
  try {
    fs.writeFileSync("./output/" + file, String(content).replace(/,/g, "\n"));
  } catch (err) {
    console.error(err);
  }
}
