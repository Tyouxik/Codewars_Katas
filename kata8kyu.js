//Keep Hydrated!
//Javascript
function litres(time) {
  return Math.floor(time / 2);
}
/* Typescript
export function litres(time: number): number {
    return Math.floor(time / 2);} */

//String repeat
function repeatStr(n, s) {
  return s.repeat(n);
}

//Smallest unused ID
function nextId(ids) {
  let sortedID = ids.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < sortedID.length + 1; i++) {
    if (!sortedID.includes(i)) {
      return i;
    }
  }
}

//Sum of differences in array
function sumOfDifferences(arr) {
  let descendingArr = arr.sort(function (a, b) {
    return b - a;
  });
  let result = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    result += arr[i] - arr[i + 1];
  }
  return result;
}

//Welcome!
function greet(language) {
  const languages = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso",
  };

  for (let lang in languages) {
    if (lang === language) return languages[language];
  }
  return "Welcome";
}

//Filter out the geese
function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(function (bird) {
    return !geese.includes(bird);
  });
}

//Total amount of points
function points(result) {
  let totalPoints = 0;
  for (let i = 0; i < result.length; i++) {
    if (result[i][0] > result[i][2]) {
      totalPoints += 3;
    } else if (result[i][0] === result[i][2]) {
      totalPoints += 1;
    }
    console.log(totalPoints);
  }
  return totalPoints;
}

// Get Planet Name By ID
function getPlanetName(id) {
  var name;
  switch (id) {
    case 1:
      name = "Mercury";
      break;
    case 2:
      name = "Venus";
      break;
    case 3:
      name = "Earth";
      break;
    case 4:
      name = "Mars";
      break;
    case 5:
      name = "Jupiter";
      break;
    case 6:
      name = "Saturn";
      break;
    case 7:
      name = "Uranus";
      break;
    case 8:
      name = "Neptune";
  }

  return name;
}

//Even or Odd
function even_or_odd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

//Multiply
function multiply(a, b) {
  return a * b;
}
