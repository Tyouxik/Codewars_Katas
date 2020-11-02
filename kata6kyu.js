//Break camelCase
function solution(string) {
  let spacedStr = "";
  for (i = 0; i < string.length; i++) {
    spacedStr +=
      string[i] === string.toLowerCase()[i] ? string[i] : ` ${string[i]}`;
  }
  return spacedStr;
}

//Equal Sides Of An Array
function findEvenIndex(arr) {
  for (i = 0; i < arr.length; i++) {
    let right = arr.slice(i + 1).reduce((acc, val) => {
      return (acc += val);
    }, 0);
    let left = arr.slice(0, i).reduce((acc, val) => {
      return (acc += val);
    }, 0);
    console.log(right, left, left === right);
    if (left === right) return i;
  }
  return -1;
}
//Duplicate Encoder
function duplicateEncode(word) {
  return word
    .split("")
    .map((letter) => {
      letter = letter.toLowerCase();
      if (word.toLowerCase().split(`${letter}`).length > 2) return ")";
      else return "(";
    })
    .join("");
}

//Simple frequency sort
//Refactored version
function solve(arr) {
  let nums = {};
  for (let i = 0; i < arr.length; i++) {
    !nums[arr[i]] ? (nums[arr[i]] = 1) : nums[arr[i]]++;
  }
  return arr.sort((a, b) => {
    return nums[b] !== nums[a] ? nums[b] - nums[a] : a - b;
  });
}
/* function solve(arr) {
  let nums = {};
  for (let i = 0; i < arr.length; i++) {
    if (!nums[arr[i]]) {
      nums[arr[i]] = 1;
    } else {
      nums[arr[i]]++;
    }
  }
  return arr.sort((a, b) => {
    if (nums[b] !== nums[a]) {
      return nums[b] - nums[a];
    } else if (nums[b] === nums[a]) {
      return a - b;
    }
  });
} */

//Replace With Alphabet Position
function alphabetPosition(text) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return text
    .split("")
    .map((letter, idx) => {
      //console.log(letter, letter!== " ")
      if (letter !== " ") {
        return alphabet.indexOf(letter.toLowerCase()) + 1;
      }
    })
    .filter((el) => el)
    .join(" ");
}

//Your order, please
function order(words) {
  let wordArr = words.split(" ");
  let newWords = [];

  for (let i = 0; i < wordArr.length; i++) {
    for (let word of wordArr) {
      console.log(word, (i + 1).toString(), word.includes((i + 1).toString()));
      if (word.includes((i + 1).toString())) {
        newWords.push(word);
      }
    }
  }
  return newWords.join(" ");
}

//Mexican Wave
wave = (str) => {
  let wave = [];
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) !== " ") {
      let newStr = str.split("");
      newStr.splice(i, 1, str.charAt(i).toUpperCase());
      wave.push(newStr.join(""));
    }
  }
  return wave;
};

//Counting Duplicates
function duplicateCount(text) {
  return [
    ...new Set(
      text
        .toLowerCase()
        .split("")
        .filter((letter, idx, word) => {
          return word.indexOf(letter, idx + 1) > -1;
        })
    ),
  ].length;
}

//Who likes it?
function likes(names) {
  let others = names.length - 2;
  return names.length === 0
    ? "no one likes this"
    : names.length === 1
    ? `${names[0]} likes this`
    : names.length === 2
    ? `${names[0]} and ${names[1]} like this`
    : names.length === 3
    ? `${names[0]}, ${names[1]} and ${names[2]} like this`
    : names.length > 3
    ? `${names[0]}, ${names[1]} and ${others} others like this`
    : null;
}

//Find the odd int
function findOdd(A) {
  const uniqNum = [...new Set(A)];
  return uniqNum
    .map((uNum) => {
      let count = 0;
      A.map((aNum) => {
        if (uNum === aNum) {
          count++;
        }
      });
      if (count % 2 === 1) {
        return uNum;
      }
    })
    .filter((el) => el)[0];
}

//Multiples of 3 or 5
function solution(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

//Convert string to camel case
function toCamelCase(str) {
  const string = str.split(/\_|\-/);
  const first = string.slice(0, 1).join("");
  const last = string
    .slice(1)
    .map((word) => {
      return word.slice(0, 1).toUpperCase() + word.slice(1);
    })
    .join("");

  return first + last;
}

//The Supermarket Queue
function queueTime(customers, n) {
  let tills = [];
  for (let i = 0; i < n; i++) {
    tills.push(0);
  }
  customers.map((customer) => {
    tills.sort((a, b) => a - b);
    tills[0] += customer;
    console.log(tills);
  });
  tills.sort((a, b) => a - b);
  return tills[n - 1];
}

//Meeting
function meeting(s) {
  return s
    .toUpperCase()
    .split(";")
    .map((person) => `(${person.split(":").reverse().join(", ")})`)
    .sort((a, b) => {
      return a.localeCompare(b);
    })
    .join("");
}

//Restaurant Tables
function restaurant(a, b, t) {
  let deniedCust = t.reduce((a, b) => a + b, 0);
  let arr2 = [];
  for (let i = 0; i < b; i++) {
    arr2.push(2);
  }
  t.map((customer) => {
    if (arr2[0] == 0) {
      arr2.shift();
    }
    if (customer === 1 && a >= 1) {
      a--;
      deniedCust--;
    } else if (customer === 1 && a === 0 && arr2.length > 0) {
      if (arr2.includes(2)) {
        arr2[arr2.indexOf(2)] = 1;
        deniedCust--;
      } else if (arr2.includes(1)) {
        arr2.splice(arr2.indexOf(1), 1);
        deniedCust--;
      }
    }
    if (customer === 2 && arr2.includes(2)) {
      arr2.splice(arr2.indexOf(2), 1);
      deniedCust -= 2;
    }
  });
  return deniedCust;
}
//Format a string of names like 'Bart, Lisa & Maggie'.
function list(names) {
  const namesArray = names.map((name) => name.name);
  if (names.length === 0) {
    return "";
  } else if (names.length === 1) {
    return namesArray[0];
  } else {
    return (
      namesArray.slice(0, namesArray.length - 1).join(", ") +
      " & " +
      namesArray.slice(-1)
    );
  }
}

//Count characters in your string
function count(string) {
  let counter = {};
  string.split("").map((letter) => {
    if (!counter[letter]) {
      counter[letter] = 1;
    } else {
      counter[letter]++;
    }
  });
  return counter;
}

//Find The Parity Outlier
function findOutlier(numbers) {
  const even = numbers.filter((el) => Math.abs(el) % 2 === 0);
  const odd = numbers.filter((el) => Math.abs(el) % 2 === 1);

  if (even.length === 1) return even[0];
  if (odd.length === 1) return odd[0];
}

//IQ Test
function iqTest(numbers) {
  const even = numbers.split(" ").filter((el) => el % 2 === 0);
  const odd = numbers.split(" ").filter((el) => el % 2 === 1);

  if (even.length === 1) return numbers.split(" ").indexOf(even[0]) + 1;
  if (odd.length === 1) return numbers.split(" ").indexOf(odd[0]) + 1;
}

//Bit Counting
var countBits = function (n) {
  return (n >>> 0)
    .toString(2)
    .split("")
    .filter((e) => e !== "0").length;
};

//Array.diff
function arrayDiff(a, b) {
  let diffArray = [];
  a.map((el) => {
    console.log(el, b);
    if (!b.includes(el)) {
      diffArray.push(el);
    }
  });
  return diffArray;
}

//Build Tower
function towerBuilder(nFloors) {
  let tower = [];
  for (let i = 0; i < nFloors; i++) {
    tower.push(
      " ".repeat(nFloors - i - 1) +
        "*".repeat(1 + i * 2) +
        " ".repeat(nFloors - i - 1)
    );
  }
  return tower;
}

//Count letters in string
function letterCount(s) {
  let sArray = s.split("");
  let letterCount = {};
  sArray.map((letter) => {
    let counter = 0;
    for (let i = 0; i < sArray.length; i++) {
      if (letter === sArray[i]) counter++;
    }
    return (letterCount[letter] = counter);
  });
  return letterCount;
}

//Are they the "same"?
function comp(array1, array2) {
  if (!array1 || !array2) return false;
  let a1 = array1.sort((a, b) => a - b);
  const a2 = array2.sort((a, b) => a - b);
  a1 = a1.map((num) => {
    return num * num;
  });
  if (a1.join("") === a2.join("")) {
    return true;
  } else {
    return false;
  }
}

//Stop gninnipS My sdroW!
function spinWords(str) {
  return str
    .split(" ")
    .map((word) => {
      if (word.length >= 5) {
        return word.split("").reverse().join("");
      } else {
        return word;
      }
    })
    .join(" ");
}

//Backspaces in string
function cleanString(s) {
  let cleanedS = [];
  s.split("").map((letter) => {
    if (letter !== "#") {
      cleanedS.push(letter);
    } else if (letter === "#") {
      cleanedS.pop();
    }
  });
  return cleanedS.join("");
}

//Two Sum
function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
}
