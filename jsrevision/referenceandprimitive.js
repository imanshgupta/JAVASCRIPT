var num = 1;
//number strings boolean can be copied as they are pri,itive types imp
num1 = num;
//here if we change num1 there is no change in num but in arrays its aliasing
var arr = [1, 2, 3, 4, 4, 5];
var c = arr;
c[1] = 33;
console.log(arr);
//after this in arr at index 1 value is changed so basically c points to arr
//similar is with objects so we cannot make copies of array  or objects like this when working in react

//to copy arrays and objects we use spread ... operator
