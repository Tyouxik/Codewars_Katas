//Alphabet symmetry
function solve(arr) {
  return arr.map((word) => {
    let counter = 0;
    word.split("").forEach((letter, idx) => {
      if (letter.toLowerCase().charCodeAt() - 96 === idx + 1) {
        counter++;
      }
    });
    return counter;
  });
}

//Odd or Even?
function oddOrEven(array) {
  return array.reduce((acc, val) => (acc += val), 0) % 2 === 0 ? "even" : "odd";
}

//String matchup
function solve(a, b) {
  return b.map((word) => {
    let wordCounter = 0;
    for (let el of a) {
      if (word === el) wordCounter++;
    }
    return wordCounter;
  });
}

//Filter Coffee
function search(budget, prices) {
  return prices
    .map((price) => {
      if (price <= budget) {
        return price;
      }
    })
    .filter((el) => el !== undefined)
    .sort((a, b) => a - b)
    .join(",");
}

//Mumbling
//Refactored version
function accum(s) {
  return s
    .split("")
    .map((letter, idx) => {
      return letter.toUpperCase() + letter.toLowerCase().repeat(idx);
    })
    .join("-");
}

/* function accum(string) {
  const upperString = [...string.toUpperCase()];
  let mumbling = "";
  for (let i = 0; i < upperString.length; i++) {
    mumbling += upperString[i] + upperString[i].toLowerCase().repeat(i) + "-";
  }
  return mumbling.substring(0, mumbling.length - 1);
} */

//Vowel Count
//Refactored version
function getCount(str) {
  return str.split("").filter((letter) => "aeiou".includes(letter)).length;
}

/* function getCount(str) {
  return str.split("").filter((letter) => {
    let vowel = "aeiou";
    return vowel.includes(letter);
  }).length;
} */

//The Office I - Outed
//Refactored version
function outed(meet, boss) {
  const numOfPerson = Object.keys(meet).length;
  let totalScore = 0;

  for (let person in meet) {
    person === boss
      ? (totalScore += meet[person] * 2)
      : (totalScore += meet[person]);
  }
  return totalScore / numOfPerson <= 5 ? "Get Out Now!" : "Nice Work Champ!";
}

/* function outed(meet, boss) {
  let happyTotal = 0;
  let colleagueNum = 0;
  for (let colleague in meet) {
    if (colleague === boss) {
      happyTotal += meet[colleague] * 2;
      colleagueNum += 1;
    } else {
      happyTotal += meet[colleague];
      colleagueNum += 1;
    }
  }

  if (happyTotal / colleagueNum <= 5) {
    return "Get Out Now!";
  } else {
    return "Nice Work Champ!";
  }
} */

//Turkish Numbers, 0-99
const units = {
  0: "sıfır",
  1: "bir",
  2: "iki",
  3: "üç",
  4: "dört",
  5: "beş",
  6: "altı",
  7: "yedi",
  8: "sekiz",
  9: "dokuz",
};

let tens = {
  10: "on",
  20: "yirmi",
  30: "otuz",
  40: "kırk",
  50: "elli",
  60: "altmış",
  70: "yetmiş",
  80: "seksen",
  90: "doksan",
};

const getTurkishNumber = (num) => {
  let ten = num.toString()[0] + 0;
  let unit = num.toString()[1];
  if (num < 10) {
    return units[num];
  } else if (num >= 10) {
    if (unit === "0") {
      return tens[ten];
    } else {
      return tens[ten] + " " + units[unit];
    }
  }
};

//Most sales
function top3(products, amounts, prices) {
  const rev = products.map(function (val, i, arr) {
    return { revenue: prices[i] * amounts[i], name: arr[i], index: i };
  });
  const sorted = rev.sort(function (a, b) {
    // if b.revenue - a.revenue is 0 -> falsy then we sort by the index ascending
    return b.revenue - a.revenue || a.index - b.index;
  });
  return sorted.slice(0, 3).map(function (item) {
    return item.name;
  });
}

//Ordered Count of Characters
let orderedCount = function (text) {
  console.log();
  const uniqLetters = [...new Set(text)];
  let ordCount = [];
  uniqLetters.map((letter) => {
    let letterCount = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] === letter) {
        letterCount++;
      }
    }
    ordCount.push([letter, letterCount]);
  });
  return ordCount;
};

//Find all pairs
//Refactored version using filter
function duplicates(array) {
  let noDuplicate = [...new Set(array)];
  if (array.length <= 1) return 0;
  let pairCounter = 0;
  noDuplicate.forEach((number) => {
    const occurences = array.filter((el) => el === number).length;
    pairCounter += Math.floor(occurences / 2);
  });
  return pairCounter;
}

/* function duplicates(array) {
  let sortedArray = array.sort();
  let pairCounter = 0;
  for (let i = 0; i < array.length - 1; i++) {
    if (sortedArray.indexOf(sortedArray[i], i + 1) !== -1) {
      pairCounter++;
      i++;
    }
  }
  return pairCounter;
} */

//Simple Fun #144: Distinct Digit Year
const numberIsDistinct = (num) => {
  const str = num.toString();
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i], i + 1) !== -1) {
      return false;
    }
  }
  return true;
};

function distinctDigitYear(year) {
  // count up that year
  for (let i = year + 1; i <= 9000; i++) {
    if (numberIsDistinct(i)) return i;
  }
}

//Frequency sequence
function freqSeq(str, sep) {
  return str
    .split("")
    .map((letter) => {
      let result = 0;
      for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) result++;
      }
      return result;
    })
    .join(sep);
}

//The Office VI - Sabbatical
function sabb(s, val, happiness) {
  const letterS = "sabticl";
  let scoreLetter = 0;
  letterS.split("").map((letter) => {
    for (let i = 0; i < s.length; i++) {
      if (s[i] === letter) {
        scoreLetter += 1;
      }
    }
  });
  const decision = scoreLetter + val + happiness;
  if (decision > 22) {
    return "Sabbatical! Boom!";
  } else {
    return "Back to your desk, boy.";
  }
}

//Credit Card Mask
function maskify(cc) {
  let hashtagString = "";
  const lastFour = cc.slice(-4);
  for (let i = 0; i < cc.length - 4; i++) {
    hashtagString += "#";
  }
  return hashtagString + lastFour;
}

//List Filtering
function filter_list(list) {
  let noStringsAttached = list.filter((el) => typeof el === "number");

  return noStringsAttached;
}

//The Office II - Boredom Score
let score = {
  accounts: 1,
  finance: 2,
  canteen: 10,
  regulation: 3,
  trading: 6,
  change: 6,
  IS: 8,
  retail: 5,
  cleaning: 4,
  "pissing about": 25,
};

function boredom(staff) {
  let boredomScore = 0;
  for (let person in staff) {
    boredomScore += score[staff[person]];
  }
  if (boredomScore <= 80) {
    return "kill me now";
  } else if (boredomScore > 80 && boredomScore < 100) {
    return "i can handle this";
  } else {
    return "party time!!";
  }
}

//Pandemia
function infected(s) {
  let continents = s.split("X");
  console.log("what is s", continents);
  let total = 0;
  let infected = 0;
  for (let continent of continents) {
    total += continent.length;
    if (continent.includes("1")) {
      infected += continent.length;
    }
  }
  if (total === 0) {
    return 0;
  }
  return (infected / total) * 100;
}
