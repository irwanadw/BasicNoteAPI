# Definition
The splice() method adds/removes items to/from an array, and returns the removed item(s).

Note: This method changes the original array.

## Syntax
*array.splice(index, howmany, item1, ....., itemX)*

index : which index that we want to splice
howmany : how much index that we want to remove from position index
item1,...,itemX : What item index that we want to add

## Case
imagine that we have weight data(in kilogram) for a group. we put in on the array. Like this
*["60","67","45","50","80","78","73","55"]*

and we code put that to variable *const*
*const weight = ["60","67","45","50","80","78","73","55"];*

lets say we want to remove index number 2 and rewriting it as 48. So the code is

*weight.splice(2,1, "48")*

and also console.log our weight that has Splice

console.log(weight)

## Full Syntax
so, the full syntax is..

*const weight = ["60","67","45","50","80","78","73","55"]*

*weight.splice(2,1,"48")*

*console.log(weight)*

## reference
[text](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)