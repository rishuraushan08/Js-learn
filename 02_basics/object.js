let sym=Symbol("Symbol 1")
let myData={
    name:"Raushan Kumar",
    aage:22,
    email:"raushanlive2000@gmail.com",
    company:"Xebia",
    "My tech Stack":["Java","SpringBoot","JavaScript","Mysql","Git"],
    [sym]:"Mykey1"
}
console.log(myData)
//console.log(typeof myData.sym)//string
console.log(typeof myData[sym])//string

//console.log(myData["My tech Stack"])