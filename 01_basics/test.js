// console.log("hii")
// console.log("hello")
// let dta="steysdhc";
// console.log(typeof dta)
// console.log(typeof undefined)//undefined
// console.log(typeof null)//object
// console.log(typeof object);//undefined
//console.log(typeof String)

// console.log([typeof dta,typeof null,typeof object,typeof string])//[ 'string', 'object', 'undefined', 'undefined' ]
// console.log(null==0);//false
// console.log(null>=0);//true
// console.log(null>0);//false
// console.log(undefined>0);
// console.log(undefined>=0);
// console.log(undefined==0);
//console.log("true">false);
// const id=Symbol('12')
// const anotherId=Symbol('12')
// console.log(id===anotherId)//false
// const names="raushan";
// const newname =names.toUpperCase()
// const age=23;
// console.log(`Hello my name is ${newname} and my age is ${age}`);
//console.log(names[0])
//console.log(Math.random());//0.232521970888555
//console.log(Math.random()*10);//5.22619779043795
//console.log((Math.random()*10)+1);//to avoid zero 
//console.log(Math.floor((Math.random()*10)+1));//3 to get the whole number

/*//to get random value within certain range
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1)+min))*/

//let mydate=new Date()
//console.log(mydate.toDateString());//Tue Jan 23 2024
//console.log(mydate.toString());//Tue Jan 23 2024 10:50:52 GMT+0000 (Coordinated Universal Time)
//console.log(mydate.toLocaleTimeString());//10:52:44 AM
//console.log(mydate.toLocaleString()) //1/23/2024, 10:53:43 AM
//console.log(mydate.toLocaleDateString())//1/23/2024
//console.log(mydate.getTimezoneOffset())
// let mydate=new Date(2023, 15, 23)
// console.log(mydate.toDateString())//Mon Jan 23 2023
let myDate=new Date("09-23-2023")//mm//dd/yyyy
console.log(myDate.toLocaleDateString())
myDate.toLocaleString('default',{
    weekday:"long"
})