const calculator = {
  add: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  square: function (a, b) {
    return a ** b;
  },
};

const addResult = calculator.add(2, 3);
const minusResult = calculator.minus(addResult, 4);
const divideResult = calculator.divide(addResult, minusResult);
const multiplyResult = calculator.multiply(5, 8);
const squareResult = calculator.square(addResult, 2);
