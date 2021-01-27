# Word Wrap - Coding Challenge

## Goals

The goal of this coding challenge is to create a class called Wrapper, with a method of wrap that will take two inputs. The first input is an input string {str} and the second is a maximum number of characters allowed per line {int}. From these inputs, the wrap method must return a formatted string where each time the limit of characters per line is met, a new line character will be inserted to create a new line, and the string will continue to be read. Upon completion of the function, a reformatted string will be returned {str}.

## Assumptions

For this question, I assumed that words should not be truncated unless their length was greater than the length of the maximum allowable column. Because of this, I check to see if all words will fit on a line, and if a word will not fit on the line, I start a new line instead of splitting the word.

Another assumption is that we will allow inputs with words longer than the maxColumnLength given. We assume we can accept these given our assumption above, that we can split words that are too long for lines. If this assumption is invalid, then I would write another validator at the beginning of the wrap method to throw an error for invalid inputs of strings longer than our maxColumnLength argument.

## Testing Setup

For this question, I used Jest to do unit testing for checking the validity of the input, the type of the output and finally a few example cases.
