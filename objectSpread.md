## Definition
The spread operator is the shortest and most simplest method to copy enumerable properties from a provided object to another newly created object.

### syntax
const addSlowLearner =["Irwan","Irfan"]; 
const slowLearner = ["Rizka", ...addSlowLearner, "Daniel", "Lingga"]

console.log(slowLearner) 

<!-- //expected output  [ 'Rizka', 'Irwan', 'Irfan', 'Daniel', 'Lingga' ] -->