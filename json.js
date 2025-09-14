// json - JAVASCRIPT OBJECT Notation.
// we are going to get a response from a server in json Format.
let obj=`{
"name":"Pradeep",
"age":20,
"gender":"male",
"schooling":"sda school"
}`
let obj1=JSON.parse(obj)
console.log(obj1)
Object.values(obj1).forEach((keys =>{
   console.log(keys)
}))
const hello=JSON.stringify(obj1)
console.log(hello);

