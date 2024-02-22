// How to remove false values from array :::::::

let = foodBox = ["Apple", null, undefined, "laychee", 0]
let foodBoxFilter = foodBox.filter(Boolean)
console.log(foodBoxFilter)

// Output : [ 'Apple', 'laychee' ]



/* Note : Js false values types ::::
--------------------------------------
➤ undefined , 

➤ null , 

➤ NaN , 

➤ 0 , 

➤ "" (empty string), 

➤ false 
*/