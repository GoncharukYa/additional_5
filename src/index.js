module.exports = function check(str, bracketsConfig) {
  let arrOfStr = str.split('');
  let bracketsStack = [];
  let openBrackets = [];
  let closeBrackets = [];
  let sameBrackets = [];

// Collecting openBrackets, closeBrackets and sameBrackets.
  for (let i = 0; i < bracketsConfig.length; i++) {
    openBrackets.push(bracketsConfig[i][0]);
    closeBrackets.push(bracketsConfig[i][1]);
    if (openBrackets[i] === closeBrackets[i]) {
      closeBrackets[i] = closeBrackets[i] + "!";
      sameBrackets.push(openBrackets[i]);
    }
  }

// Changing closing bracket if the brackets  same.
  let k = 0;
  for (let i = 0; i < sameBrackets.length; i++) {
    for (let j = 0; j < arrOfStr.length; j++) {
      if (arrOfStr[j] === sameBrackets[i]) {
        k++;
        if (!(k % 2)) {
          arrOfStr[j] = arrOfStr[j] + "!";
          k = 0;
        }
      }
    }
  }

  for (let i = 0; i < arrOfStr.length; i++) {
    if (openBrackets.indexOf(arrOfStr[i]) > -1) {
      bracketsStack.push(arrOfStr[i]);
      } else {
        let lastIndexOfSuitableOpeningBracket = bracketsStack.lastIndexOf(openBrackets[closeBrackets.indexOf(arrOfStr[i])]);
        if (lastIndexOfSuitableOpeningBracket > -1) {
          bracketsStack.length = lastIndexOfSuitableOpeningBracket;
        } else {
          bracketsStack.push(arrOfStr[i]);
        }
      }
  }

  if (bracketsStack.length === 0) {
    return true;
  } else {
    return false;
  }
}
