//ISBN-10 Validation
function validISBN10(isbn) {
  if (!/[0-9]{9}[0-9X]/.test(isbn)) return false;
  let count = 0;
  for (let i = 0; i < isbn.length; i++) {
    isbn[i] === "X" ? (count += 10 * (i + 1)) : (count += isbn[i] * (i + 1));
  }
  return count % 11 === 0 ? true : false;
}

//RGB To Hex Conversion
function rgb(r, g, b) {
  const hexCode = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F",
  };
  let hexaStr = "";
  const change = (color) => {
    if (color > 255) {
      hexaStr += "FF";
    } else if (color < 0) {
      hexaStr += "00";
    } else {
      hexaStr += hexCode[Math.floor(color / 16)];
      hexaStr += hexCode[Math.floor(color % 16)];
    }
  };
  change(r);
  change(g);
  change(b);
  return hexaStr;
}

//Moving Zeros To The End
// Refactored version
moveZeros = (arr) =>
  arr.filter((el) => el !== 0).concat(arr.filter((el) => el === 0));

// const moveZeros = function (arr) {
//   let zeroCount = 0;
//   let nonZero = arr.filter((el) => {
//     if (el === 0) {
//       zeroCount++;
//     } else {
//       return true;
//     }
//   });
//   for (let i = 0; i < zeroCount; i++) {
//     nonZero.push(0);
//   }
//   return nonZero;
// };

//Human Readable Time
function humanReadable(timeSeconds) {
  let seconds = timeSeconds % 60;
  seconds = seconds > 10 ? `${timeSeconds % 60}` : `0${timeSeconds % 60}`;
  let minutes = Math.floor(timeSeconds / 60) % 60;
  minutes = minutes > 10 ? `${minutes}` : `0${minutes}`;
  let hours = Math.floor(timeSeconds / 60 / 60);
  hours = hours > 10 ? `${hours}` : `0${hours}`;
  return `${hours}:${minutes}:${seconds}`;
}

//Simple Pig Latin
function pigIt(str) {
  return str
    .split(" ")
    .map((word) => {
      return word.match("[.!?\\-]") ? word : `${word.slice(1)}${word[0]}ay`;
    })
    .join(" ");
}

//Valid Parentheses
function validParentheses(str) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") counter++;
    if (str[i] === ")") counter--;
    if (counter === -1) return false;
  }
  return counter === 0;
}
