let sym=Symbol("Symbol 1")
let myData={
    name:"Raushan Kumar",
    aage:22,
    email:"raushanlive2000@gmail.com",
    company:"Xebia",
    "My tech Stack":["Java","SpringBoot","JavaScript","Mysql","Git"],
   // [sym]:"Mykey1"
}
//console.log(myData)
//console.log(typeof myData.sym)//string
// console.log( myData[sym])//string
myData.email="rishuraushan2000@gmail.com"//email get changed
console.log(myData)
Object.freeze(myData.name);
myData.aage=233;
console.log(myData)

//console.log(myData["My tech Stack"])