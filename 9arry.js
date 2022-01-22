// // Write a program to check the second 
// // max of the array,
// // and console it.



// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
// var max=0;
// var second_max=0;
// for (var i =0;i<numbers.length;i++){
// if (max<numbers[i]){
// if (second_max<max){
// second_max=max;
// }
// max=numbers[i];
// }
// else{
// if (second_max<numbers[i]){
// second_max=numbers[i];
// }
// }
// }
// console.log(second_max)






var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
var max=0
var second_max=0
var i=0
while (i<numbers.length){
    if (max<numbers[i]){
        if (second_max<max){
            second_max=max

        }
        max=numbers[i]
    }else{
        if (second_max<numbers[i]){
        second_max=numbers[i]
        }
    
    }
    i++
}
console.log(second_max)






// var m = ["Mango", "Orange", "Banana"];
// var v=m.pop();
// console.log(m)





// var m = ["Ramani", "Black",1, "jan 2 1996"];
// var v=[]
// // for (var i=0;i<m.length;i++){
// //     v.push(m[i])
// // }
// // console.log(v)


// var i=0
// while (i<m.length){
//     v.push(m[i])
//     i++
// }
// console.log(v)






// for(let i = 65; i <= 90; i++){
//     console.log(String.fromCharCode(i));
//   }





// var i=65
// while (i<=90){
//     console.log(String.fromCharCode(i))
//     i++
// }





// var array = [ 1, 2, 3, 4, 5, 6 ];
// for (var index = 0; index < array.length; index++) {
// console.log(array[index]);
// }






// var fruits = ['Apple', 'Banana']
// fruits.push('orange ')
// console.log (fruits)




// var fruits = ['Apple', 'Banana', 'Orange','pooja']
// fruits.pop()
// console.log(fruits)





// var fruits = ['Apple', 'Banana', 'orange']
// fruits.shift()
// console.log(fruits)








// var fruits = ['Apple', 'Banana']
// fruits.unshift('Grapes')
// console.log(fruits);








// let fruits = ['Apple', 'Banana', 'Orange']
// let position = fruits.indexOf('orange')
// console.log(position);












// // javascript
// var arr = ['shweta', 'nayak', 'komal', 'zeba']
// console.log(arr[0])              // output 'shweta' the first element
// console.log(arr[1])
// console.log(arr[2])              // logs 'nayak' the second element
// console.log(arr[arr.length - 1]) // logs 'Zeba' the last element.







// let arr = ['shweta', 'nayak', 'komal', 'Zeba']
// console.log(arr[0])   // syntax error