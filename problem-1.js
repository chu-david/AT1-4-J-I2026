import { readText } from "./common.js";

console.log("Code for problem one starts" + "\n");
main1();

function main1() {
  let anagramText = readText("anagram1.txt").split("\n").filter(n => n);
  for (let i = 0; i < anagramText.length; i++) {
    let group = [anagramText[i]];
    for (let j = i + 1; j < anagramText.length; j++) {
      if(group[0].length == anagramText[j].length){
        group.push(anagramText[j]);
      }
    }
  }
}
