let array = [1, 2, 3, 4, 5];

// Using Temp Variable
const temp = array[0];
array[0] = array[4];
array[4] = array[0];
array[4] = temp;
console.log(array) // Output : [ 5, 2, 3, 4, 5 ]


// Shortcut array destructuring waye :::: 1
[array[0], array[4]] = [array[4], array[0]];
console.log(array); 



// // Shortcut array destructuring waye ::::: 2
let a = 1;
let b = 2; 
// [a, b] = [b, a];
// console.log(a, b)



// Shortcut math use waye :::: 3
b = a + (a = b) - b;
console.log(a, b)