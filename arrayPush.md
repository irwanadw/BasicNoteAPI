# Definition
The push() method adds one or more elements to the end of an array and returns the new length of the array.

## Case
imagine that we have weight data(in kilogram) for a group. we put in on the array. Like this
*["60","67","45","50","80","78","73","55"]*

and we code put that to variable *const*
*const weight = ["60","67","45","50","80","78","73","55"];*

lets say we want adding new weight data {77,82}
so we just write

*const add = weight.push(77,82);*

and if we want to see data that we push, we just add
*console.log(weight)*

if we want to see how many index that we push, we just add
*console.log(add)*

## full Syntax

*const weight = ["60","67","45","50","80","78","73","55"]

const add = weight.push(90);
console.log(add)
console.log(weight)
*
## reference
[text](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)