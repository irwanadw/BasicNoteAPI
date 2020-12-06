# Definition
The findIndex() method returns the index of the first element in an array that pass a test (provided as a function).

The findIndex() method executes the function once for each element present in the array:

If it finds an array element where the function returns a true value, findIndex() returns the index of that array element (and does not check the remaining values)
Otherwise it returns -1
**Note: findIndex() does not execute the function for array elements without values.**

**Note: findIndex() does not change the original array.**

## Case
imagine that we have weight data(in kilogram) for a group. we put in on the array. Like this
*["60","67","45","50","80","78","73","55"]*

and we code put that to variable *const*
*const weight = ["60","67","45","50","80","78","73","55"];*

so we want to select which the first index  that have a obesity (which is have a weight >70 kg) 
 
## Solution
We can solve it by using an array.findIndex(). We write a function to select weight data like this

*const obesity = (data) =>data>70;*

*console.log(weight.findIndex(obesity));*


*return* that mean we ask for responses the array that over 60 kg.

*findIndex* that mean we want to retunr how many index that have weight over 60kg

## Full Syntax
So the full syntax will be like this..

*const weight = ["60","67","45","50","80","78","73","55"]*

*const obesity = (data) =>data>70;*
*console.log(weight.findIndex(obesity));*


## reference
[text](https://www.w3schools.com/jsref/jsref_findindex.asp)