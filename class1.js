// //object javascript.
// const person={
//   name:"Pradeep",
//   age:100,
//   FirstName:"Pradeep",
//   LastName:"Renganathan",
//   city:"chennai",
//   state:"TamilNadu",
//   gender:"male",
//   country:"India",
//   movies:["jana Nayagan","Bigil","Madharaasi","Anjaan","Leo"],
//   :function(){
//       this.FirstName+" "+this.LastName
//   }

// }
// console.log("state is",person.state);
// console.log(person.movies)
// console.log(person.movies[0])
// console.log(person.movies[2])
// console.log(person.movies[4])
// console.log(person.names())
//another object.
let mobile = {
  name: "oppo",
  quality: 15,
  price: 1200,
  instock: true
}
// for (const keys1 in mobile) {
//   console.log(keys1 +" " +mobile[keys1])
// }
// Object.keys(mobile).forEach(key => {
//   console.log(key + ":" + mobile[key])
// })
// console.log("Another method");
// Object.values(mobile).forEach((values =>{
//   console.log(values)
// }))
console.log("Entries method")
Object.entries(mobile).forEach(([key,value]) => {
   console.log(key = value)
})




















