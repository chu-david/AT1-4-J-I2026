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
      if (group[j].split("").sort().join("") != group[0].split("").sort().join("")) {
        group.splice(group.indexOf(group[j]), 1);
      }
    }
    for (let j = 0; j < group.length; j++) {
      anagramText.splice(anagramText.indexOf(group[j]), 1);
    }
    console.log(group);
    console.log("\n");
    writeText("anagram" + currentGroup + ".txt", group);
    currentGroup++;
  }
}
