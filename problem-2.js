import { readText, writeText } from "./common.js";
console.log("\n" + "Code for problem two starts" + "\n");
main2();
function main2() {
  const voteText = readText("vote-1000.txt")
    .split("\n")
    .filter(n => n);
  let firstNames = [];
  let lastNames = [];
  let votes = [];
  let extravotes = [];
  let thing = "";
  let y = 0;
  let x = 0;
  let i = 0;
  voteText.forEach(name => {
    const parts = name.trim().replace(/'/g, "").split(" ");
    firstNames.push(parts[0]);
    lastNames.push(parts[1]);
  });
  console.log(firstNames);
  for (let k = 0; k < firstNames.length; k++) {
    if (firstNames[k] == null) {
      continue;
    }
    thing = firstNames[k];
    x = 0;
    for (i = 0; i < firstNames.length; i++) {
      if (thing == firstNames[i]) {
        x++;
        firstNames[i] = null;
      }
    }
    votes[y] = x;
    extravotes[y] = lastNames[k];
    console.log(thing + " voted for " + x + " times");
    y++;
  }
  console.log("Votes = " + votes);
  let winner = 0;
  for (let k = 1; k < votes.length; k++) {
    if (votes[k] > votes[winner]) {
      winner = k;
    }
    else if (votes[k] == votes[winner]) {
      if (extravotes[k] > extravotes[winner]) {
        winner = k;
      }
    }
  } writeText("vote-1000-winner.txt", extravotes[winner]);
}