# Definition
The find() method returns the value of the first element in the provided array that satisfies the provided testing function.

## Case
imagine that we have a bearer token like this
const token = 'Bearer Tajwojkdjkwjakjdawjdlkajdwajlk.'

lets say we want to choose just a token, not a header. 

## Solution
For solve that question we can use the string.split

const result = token.split(' '); this mean we split it by space in between two word
console.log(result[1]); this mean we want show up string index 1


## full Syntax

*const token = 'Bearer Tajwojkdjkwjakjdawjdlkajdwajlk.';

const result = token.split(' ');
console.log(result[1]);
// expected output: "Tajwojkdjkwjakjdawjdlkajdwajlk"

*
## reference
[text](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)