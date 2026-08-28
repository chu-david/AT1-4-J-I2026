import { readText, writeText } from "./common.js";

console.log("Code for problem one starts" + "\n");
main1();

function main1() {
  let currentGroup = 1;
  let anagramText = readText("anagram1.txt")
    .split("\n")
    .filter((n) => n);
  while (anagramText.length != 0) {
    let group = [anagramText[0]];
    for (let j = 1; j < anagramText.length; j++) {
      if (group[0].length == anagramText[j].length) {
        group.push(anagramText[j]);
      }
    }
    for (let j = 0; j < group.length; j++) {
      let counter = 0;
      for (let h = 0; h < group[0].length; h++) {
        if (group[0][h] == group[j][h]) {
          counter++;
        }
      }
      if (counter != group[0].length) {
        group.splice(group.indexOf(group[j]), 1);
      }
    }
    for (let j = 0; j < group.length; j++) {
      anagramText.splice(anagramText.indexOf(group[j]), 1);
    }
    console.log("\n");
    // writeText("anagram" + currentGroup + ".txt", group);
    currentGroup++;
  }
}
