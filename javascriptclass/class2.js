//operators.
let a=12;
let b=9;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);
var d=9;
console.log(++d);
d--;
console.log(d);
var p=3
p**=4;
console.log(p);
// let a=2;
// let b=20;
var z=10;
z**=a;
console.log(z)
// Relational operators.
let i=true && true;
console.log(i);
var x=true && false;
console.log(x);
console.log(true || true);
console.log(true || false);
console.log(true ^ false);
if( 20==2 || 2!=7){
   console.log(true)
}
// Real time applications using if else conditions.
function Username(username){
if(username == "Pradeep"){
   console.log("You are successfully loged in . Welcome to the web page")
}
else{
   console.log("invalid username or password.Please check the username or password")
}
}
Username("Prraddeep");
// string operator.
// let name="Pradeep";
let name1="Renganathan";
let Fullname;
Fullname = name +" "+name1;
console.log(Fullname);
let z=Fullname.replace("Renganathan","Kumar");
console.log(z)
let f=!(3==2 ^ 7==7)
console.log(f);
// bitwise operator.
var bitcode=5 & 3;
console.log(bitcode);
var bitcode1=2 | 9;
console.log(bitcode1);
let bitcode2=~19;
console.log(bitcode2);
let bitcode3= 4 ^ 9;
console.log(bitcode3);
//optionalchainingoperator.
let userdetails = {
   name: "Pradeep",
   age: 19,
   gender:null ?? "male",
   city: "chennai",
   Address: "8/4A,Vasantha garden 2nd Lane Ayanavaram ,chennai-23.",
   hobbies: ["Playing cricket", "Watching movies"],
   CollegeDetails: {
      name: "Panimalar engineering college",
      location: "Nazarathpet,Ponamalee",
   }
}
console.log(userdetails.CollegeDetails.name)
console.log(userdetails.hobbies[1])
console.log(userdetails?.phone)
console.log(userdetails.gender);
//nullieshcoalescingoperator.
let name;
const r= name ?? "Pradeep Renganathan";
console.log(r);
let age='25';
var voting=(age !== '45') ? "you are eligible to vote" : "you are not eligible to vote"
console.log(voting);

















