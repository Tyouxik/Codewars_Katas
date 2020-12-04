//String compression ( from Craking the coding Interview)
//CompressString is a function that perform basic compression using the counts of repeated characters.
//It takes a string as argument and returns a string.
//If the compressed string is bigger than the original string, it returns the original string.
const compressString = function (str) {
  let comprStr = "";
  let startIdx = 0;
  let count = 1;

  for (let endIdx = 1; endIdx < str.length + 1; endIdx++) {
    if (str[endIdx] === str[startIdx]) {
      count++;
    } else {
      comprStr += str[startIdx] + count;
      startIdx = endIdx;
      count = 1;
    }
  }
  return str.length < comprStr.length ? str : comprStr;
};
