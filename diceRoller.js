function getRandomNumbers() {
  let randomNum = Math.ceil(Math.random() * 6)
  return randomNum;
};

// First Attempt: 24mins 11secs
function rollDice(num) {
  let dice = "";
  for (let i = 1; i <= num; i++) {
    dice += getRandomNumbers();
    if (i < num) {
      dice += ", ";
    }
  }
  return `Rolled ${num} dice: ${dice}`;
};

// Second Attempt: 12mins 46 secs
function rollDice(num) {
  let dice = [];
  for (let i = 0; i < num; i++) {
    dice[i] = getRandomNumbers(); // assigns each random number to the dice array.
  }
  return `Rolled ${num} dice: ${dice.join(", ")}`; // joins num with commas and return as a string.
};

console.log(rollDice(4));