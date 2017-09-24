module.exports = function check(str, bracketsConfig) {
  let arrOfStr = str.split('');
  let bracketsStack = [];
  let openBrackets = [];
  let closeBrackets = [];
  let sameBrackets = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    openBrackets.push(bracketsConfig[i][0]);
    closeBrackets.push(bracketsConfig[i][1]);
    if (openBrackets[i] === closeBrackets[i]) {
      closeBrackets[i] = closeBrackets[i] + "!";
      sameBrackets.push(openBrackets[i]);
    }
  }

  console.log("openBrackets- " + openBrackets);
  console.log("closeBrackets- " + closeBrackets);
  console.log("sameBrackets- " + sameBrackets);

  let k = 0;
  for (let i = 0; i < sameBrackets.length; i++) {
    for (let j = 0; j < arrOfStr.length; j++) {
      if (arrOfStr[j] === sameBrackets[i]) {
        console.log(arrOfStr[j] + "===" + sameBrackets[i]);
        k++;
        console.log(k);
        if (!(k % 2)) {
          arrOfStr[j] = arrOfStr[j] + "!";
          console.log(arrOfStr[j]);
          k = 0;
        }
      }
    }
  }



  for (let i = 0; i < arrOfStr.length; i++) {

    console.log("Обработка " + arrOfStr[i]);

    if (openBrackets.indexOf(arrOfStr[i]) > -1) {
        console.log(arrOfStr[i] + " in " + openBrackets);
        bracketsStack.push(arrOfStr[i]);
        console.log(arrOfStr[i] + "- go to stack");
      } else {

            console.log(arrOfStr[i] + "- not open, then analize");
            console.log("bracketsStack-" + bracketsStack);

        if (bracketsStack.lastIndexOf(openBrackets[closeBrackets.indexOf(arrOfStr[i])]) > -1) {
          bracketsStack.length = bracketsStack.lastIndexOf(openBrackets[closeBrackets.indexOf(arrOfStr[i])]);
        } else {
            bracketsStack.push(arrOfStr[i]);
        }
        console.log(bracketsStack);
      }
    }

  console.log("final");
  console.log(bracketsStack);
  if (bracketsStack.length === 0) {
    return true;
  } else {
    return false;
  }
  // your solution
}
