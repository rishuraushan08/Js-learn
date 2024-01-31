let sym=Symbol("Symbol 1")
let myData={
    name:"Raushan Kumar",
    aage:22,
    email:"raushanlive2000@gmail.com",
    company:"Xebia",
    "My tech Stack":["Java","SpringBoot","JavaScript","Mysql","Git"]
   // [sym]:"Mykey1"
}
//console.log(myData)
//console.log(typeof myData.sym)//string
// console.log( myData[sym])//string
myData.email="rishuraushan2000@gmail.com"//email get changed
// console.log(myData)
// Object.freeze(myData.name);//freeze name field
//Object.freeze(myData);//freeze whole field of myData
// myData.aage=233;
// console.log(myData)
//console.log(myData["My tech Stack"])
//  myData.greeting=function(){
//     console.log("Hello Js user");
// }
// myData.greeting=function(){
//      console.log(`Hello Js user, ${this.name}`);
// }
// console.log(myData.greeting())
//const newUSer=new Object();//singleton Object
//const newUSer={};//non Singelton Object

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// const obj3={obj1, obj2}
// console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
const obj3=Object.assign({},obj1, obj2);//{}->to make sure we are creating a new object as this empty paren.. will be the target object in which all object will get merged
//console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const user ={
     id:1,
     name:"raushan",
     email:"rauhsanlive2000@gmail.com"
 }

// console.log(Object.keys(user))//[ 'id', 'name', 'email' ]
// console.log(Object.values(user))//[ 1, 'raushan', 'rauhsanlive2000@gmail.com' ]
// // console.log(Object.entries(user))/[[ 'id', 1 ],[ 'name', 'raushan' ],[ 'email', 'rauhsanlive2000@gmail.com' ]]
// console.log(user.hasOwnProperty('name'))//true
// console.log(user.hasOwnProperty('fullname'))//false

// const{name}=user
// console.log(name);//raushan

// const{name:myname}=user
// console.log(myname);//raushan

// function userName(name="sam"){
//     return `${name} just logged in`
// }
// console.log(userName());//sam just logged in
// console.log(userName("hitesh"))//hitesh just logged in

// result1(1)
// let result1=function(num){
//     return num+1;
// }
// result1(1)

// console.log(addone(1))
// function addone(num){
//     return num+1;
// }
