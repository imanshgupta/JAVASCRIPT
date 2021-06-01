//-----------------------spread operator=======================
let arr = [1, 2, 3, 4, 5];
let arr2 = [...arr, 5, 6, 7, 8, 9]; //spread operator to add in old array to the new one
let obj={
    name="ansh",
    age=23
}
let newobj={
    ...obj,
    mind="jenius"//here thsi new object has all the members of the old object of name and age

}
//---------------------rest operator------------------------------
//used to merge a lot of arguments into the function as an array 

hellow=(...arg) => arg.sort();
//function hellow(..args){
// return arg.sort();
//this arg is an array that consists of all the parameters passed inside the function
// }
console.log(hellow(1,2,4,5,6));