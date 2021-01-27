// This Wrapper class accepts no arguments for parameters. It includes a single method called
// wrap that accepts two arguments inputString {string} and maxColumnLength {int} and returns a
// new string {string}. This string has no lines over the length of maxColumnLength, and where
// the string would extend past this length, it breaks to a new line.

class Wrapper {
  constructor() {}

  wrap(inputString, maxColumnLength) {
    // Before formatting the inputString, we first run some checks to make sure our
    // wrap method receives valid arguments

    if (typeof inputString !== "string") {
      throw "inputString must be a string";
    } else if (
      typeof maxColumnLength !== "number" ||
      !Number.isInteger(maxColumnLength)
    ) {
      throw "maxColumnLength must be an integer";
    } else if (maxColumnLength < 0) {
      throw "maxColumnLength must be positive number";
    }

    const wordsArray = inputString.split(" ");
    const wordCount = wordsArray.length;

    // Here I initialize the return value newString and an empty sting for a container
    // as I work through all values of wordsArray
    let newString = "";
    let intermediateLineString = "";

    // Below I will loop over every single value in the wordsArray array and check its length with the
    // existing string to determine if the value should be added to the exisitng line or pushed to a new
    // line
    for (let i = 0; i < wordCount; i++) {
      // Check to see if you are starting a new line or continuing an existing one. This stops us from
      // adding extra spaces at the beginning of new lines
      let attemptedWordAddString =
        intermediateLineString +
        (intermediateLineString.length > 0 ? " " : "") +
        wordsArray[i];

      // Check if the existing intermediate string is the less than or equal to the allowable length.
      // If it is, set our current string variable to equal this new string.
      if (attemptedWordAddString.length <= maxColumnLength) {
        intermediateLineString = attemptedWordAddString;
      } else {
        // If the new string would be longer than our max characters, store the current word and then
        // add an new line to our current string container.
        const nextWord = wordsArray[i];
        if (newString.length >= 0) {
          intermediateLineString += "\n";
        }
        // Add the string to our results string
        newString += intermediateLineString;

        // We need to check that the next word is shorter than the max allowable characters. If it's
        // longer, we break it up into an array of elements that are the maximum length
        if (nextWord.length > maxColumnLength) {
          let truncatedWordParts = nextWord.match(
            new RegExp(`.{1,${maxColumnLength}}`, "g")
          );

          // We remove the last element of the array to evaluate in case we can add another word to its
          // line
          const finalPartOfWord = truncatedWordParts.pop();

          // For the full elements left, we join them on a new line and add a new line to the end before
          // adding this string to our return string.
          newString += truncatedWordParts.join("\n") + "\n";

          // We then check if the last element is shorter than the max allowable characters. If it is, we
          // reset our container variable to hold the value and will move to our next word in wordsArray
          if (finalPartOfWord.length < maxColumnLength) {
            intermediateLineString = finalPartOfWord;
          } else {
            // If not, we want to add the current element to our results string. However, we have to
            // check that it is not the very last word in the wordsArray, otherwise we will add an
            // unnecessary new line
            newString += finalPartOfWord;
            if (i < wordCount.length - 1) {
              newString += "\n";
            }
            intermediateLineString = "";
          }
        } else {
          // If the word is not longer than maxColumnLength, we set our new line to contain the last
          // element of our truncated long word and move to the next iteration of the loop
          intermediateLineString = nextWord;
        }
      }
    }

    return newString + intermediateLineString;
  }
}

module.exports = Wrapper;
