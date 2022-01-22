// Palindrome is the string or number if 
// we reverse it will be same as number or string.



const n=require("readline-sync");
let name=n.question("Enter a palindrome:")
var new_array=[];
for (var i=name.length-1; i>=0;i--){
new_array.push(name[i]);
}
var count=0;
for (var j=0; j<name.length; j++){
if (new_array[j]===name[j]){
count++;
}
}
if(count===name.length){
console.log("This is palindrome");
}else{
console.log("This is not a palindrome");
}
console.log(count);


// const n=require("readline-sync")
// var name=n.question("enter a name")
// var array=[]
// var i=name.length-1
// while (i>=0){
//     array.push(name[i])
//     i--
// }
// var c=0
// var j=0
// while (j<name.length){
//     if (array[j]===name[j]){
//         c++
//         j++
//     }
// }
// if (c===name.length){
//     console.log("This is palindrome")
// }else{
//     console.log("This is Not palindrome")
// }
// console.log(c)



// var Name=['m','a','l','a','y','a','l','a','m']
// var new_array=[];
// for (var i=Name.length-1; i>=0;i--){
// new_array.push(Name[i]);
// }
// var count=0;
// for (var j=0; j<Name.length; j++){
// if (new_array[j]===Name[j]){
// count++;
// }
// }
// if(count===Name.length){
// console.log("This is palindrome");
// }else{
// console.log("This is not a palindrome");
// }