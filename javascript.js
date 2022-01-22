// const fs=require("fs")

// // fs.writeFileSync("pooja.txt","Welcome in javascript file.")

// // fs.appendFileSync("pooja.txt","  I am sonam kumari")

// fs.readFileSync("pooja.txt")

// const buf_data=fs.readFileSync("pooja.txt")
// console.log(buf_data);





let jsonObj={
    name:"pooja",
    cahnne1:"nav",
    friend:"pooja singh",
    food:"Bhindi"
}
// console.log(jsonObj)
var myjsonstr=JSON.stringify(jsonObj)
console.log(myjsonstr)
myjsonstr=myjsonstr.replace("pooja","kiran")
console.log(myjsonstr)
newjsonObj=JSON.parse(myjsonstr)
console.log(newjsonObj)