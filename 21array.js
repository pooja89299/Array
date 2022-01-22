// Remove the duplicates and put them in a separate list


// var number_list = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
// u=[]
// duplicates=[]
// for(var i of number_list){
// if(!u.includes(i)){
// u.push(i)
// }
// }
// for(var j of u){
// count=0
// for(var k of number_list){
// if (j === k){
// count+=1
// }
// }
// if(count >1){
// duplicates.push(j);
// };
// }

// console.log(duplicates);





// var n = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
// var b=[]
// for (var i of n){
//   if (!b.includes(i)){
//     b.push(i)
//   }
// }
// console.log(b)









// num=int(input("enter a number"))
// i=1
// while num>0:
// i=i*num
// num=num-1
// print("factorial=",i)




const a=require("readline-sync")
var num=a.questionInt("enter a number:")
i=1
while (num>0){
    i=i*num
    num=num-1
    console.log("factorial",i)
}





// var n=5
// var i=1
// d={}
// while(i<=n){
//     d[i]=i**2
//     i++
// }
// console.log(d)




// var dict={"name":"Raju","marks":56}
// const a=require("readline-sync")
// var data=a.question("enter a data")
// for (i in dict){
//     if (i==data){
//         console.log("exist")
//         break;
//     }else{
//         console.log("not exist")
//         break;
//     }
// }







// a=[5,6,8,9,10,43,33,67,2]
// i=0
// while i<length(a):
// print(a[i])
// i=i+2



// var a=[5,6,8,9,10,33,67,2]
// i=0
// while (i<a.length){
//     console.log(a[i])
//     i++
// }












// const num=require("readline-sync")
// var a=num.questionInt("enter a number 1:")
// var b=num.questionInt("enter a number 2:")
// var c=num.questionInt("enter a number 3:")
// if (a<b && b>c && a<c){
//     console.log(a,b,c)
// }





