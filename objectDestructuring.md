# Definition
The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.


like we have a function in this folder, heplers folder.
function signJwt{....
...}

and the second function
function parseJwt{
    ....
}

we want to export that to function. So export it this two function with object destructuring
So the solution will be like this

module.exports= {
    signJwt,
    pareJwt
}