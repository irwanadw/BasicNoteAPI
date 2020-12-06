# Definition
The find() method returns the value of the first element in the provided array that satisfies the provided testing function.

## Case
imagine that we have weight data(in kilogram) for a group. we put in on the array. Like this
*["60","67","45","50","80","78","73","55"]*

and we code put that to variable *const*
*const weight = ["60","67","45","50","80","78","73","55"];*

lets say we want return value what thefirst element after weight data more than 67 kg..

## Solution
For solve that question we can use the array.find. The code just like this

const result = weight.data(element=>element > 67)
console.log(result)

## full Syntax

*const weight = ["60","67","45","50","80","78","73","55"]

const result = weight.data(element=>element > 67)
console.log(result)

expected output to be  "80". Because the first index that found a data more than 67kg is 80 kg"
*
## reference
[text](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)