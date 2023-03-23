function divideBy(firstNumber) {
  return function(secondNumber) {
    return secondNumber / firstNumber;
  }
}

function addBy(firstNumber) {
  return function(secondNumber) {
    return firstNumber + secondNumber;
  }
}

let divideBy10 = divideBy(10);
let divideBy100 = divideBy(100);
let addBy100 = addBy(100);
let addBy1000 = addBy(1000);
