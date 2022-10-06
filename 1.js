
const {sum,sub,mul,div}=require("./calc")  //here order is not matter {mul,sub,div,sum}-->it is also correct
//const [sum,sub,mul,div]--> we can also import in this way but the order matter

// console.log(sum(2,3))
// console.log(sub(2,3))
// console.log(mul(2,3))
// console.log(div(2,3))

const os=require("os")
// console.log(os.version())
// console.log(os.cpus())
// console.log(os.cpus().length)

const fs=require("fs")
// const data=fs.readFileSync("./calc.js",{encoding:"utf-8"})
// console.log(data)


console.log("Hello")

fs.readFile("./calc.js",{encoding:"utf-8"},(err,data)=>{
   console.log(data)

})


console.log("I'm last line")




