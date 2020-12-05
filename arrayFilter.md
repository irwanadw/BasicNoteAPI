# Definition
The array.filter() method creates an array filled with all array elements that pass a test (provided as a function).

## Case
imagine that we have weight data(in kilogram) for a group. we put in on the array. Like this
*["60","67","45","50","80","78","73","55"]*

and we code put that to variable *const*
*const weight = ["60","67","45","50","80","78","73","55"];*

so we want to select weight data that is over 60 kilograms

## Solution
We can solve it by using an array.filter(). We write a function to select weight data like this
*function selectWeight(weight){
    return weight > 60;
}*

*return* that mean we ask for responses the array that over 60 kg.

## Full Syntax
So the full syntax will be like this..

const weight = ["60","67","45","50","80","78","73","55"];

function selectWeight(weight){
    return weight > 60;
}

[reference :](https://www.w3schools.com/jsref/jsref_filter.asp)
