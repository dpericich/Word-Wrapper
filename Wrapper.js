// This Wrapper class accepts no arguments for parameters. It includes a single method called
// wrap that accepts two arguments inputString {string} and maxColumnLength {int} and return a
// new string {string}. This string has no lines over the length of maxColumnLength, and where
// the string would extend past this length, it breaks to a new line.

class Wrapper {
  constructor() {}

  wrap(inputString, maxColumnLength) {
    if (typeof inputString !== "string") {
      throw "inputString must be a string";
    } else if (typeof maxColumnLength !== "number") {
      throw "maxColumnLength must be a number";
    }
  }
}

module.exports = Wrapper;
