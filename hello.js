const company=[
   {
      companyname:"Wipro",place:"Chennai",
      employees:
         [{name:"Pradeep",age:19,role:"MERN stack developer"},
         {name:"siva",age:16,role:"MEAN stack developer"},
         {name:"Ranjan",age:39,role:"Manager"}]
   },
   {
      companyname:"TCS",place:"Bangalore",
      employees:
         [{name:"venkat",age:29,role:"Java stack developer"},
         {name:"shiva",age:24,role:"react developer"},
         {name:"Rahul",age:30,role:"Manager"}]
   },
   {
      companyname:"hardware",place:"Chennai",
      employees:
         [{name:"Pradeep renganathan",age:32,role:"Full stcck developer"},
         {name:"siva sankar",age:23,role:" Node js developer"},
         {name:"Ranjith",age:20,role:"Manager specialist"}]
   }
]
console.log(company)
console.log(company[0].employees[0])
console.log(company[1].employees[0])
console.log(company[2].employees[2])
const studentdetails={
   hello:{
names:["Pradeep","siva","Perraish","Kumar","Nithish","santhosh kumar"],
age:[19,20,30,29,16]
   }
}
let x=studentdetails.hello.names.splice(1,4,"hi","hello")
console.log(x);
let fruits=["Apple","orange","bannana","strawberry","pineapple"];
console.log(fruits);
fruits.splice(1,2,"Perraish","Pradeep","Prabhakar");
console.log(fruits);
// Join.
var welcome=["Good","Morning","Pradeep","How are you?","What are you doing?"];
let g=welcome.map(hi => hi+" "+'pradeep')
console.log(g);
console.log(welcome)




















