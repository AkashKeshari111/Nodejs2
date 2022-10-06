

const add=(a,b)=>{
    return a+b
}

const diff=(a,b)=>{
    return a-b
}

const mul=(a,b)=>{
    return a*b
}

const div=(a,b)=>{
    return a/b
}


const sin=(deg)=>{
   return Math.sin(deg * Math.PI / 180).toFixed(2);
}

const cos=(deg)=>{
    return Math.cos(deg * Math.PI / 180).toFixed(2);
 }

 
const tan=(deg)=>{
    return Math.tan(deg * Math.PI / 180).toFixed(2);
 }
 

 const random_num=(num)=>{
   return num;
 }
 

module.exports={add,diff,mul,div,sin,cos,tan,random_num}