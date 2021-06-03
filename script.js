alert("This website allowed to adults - above 18 - , maybe it contains horrific views .  ")

var age = prompt("Enter your age :");
console.log(age);
if (age >= 18) {
  alert("welcome to our website")
} else if(age < 18) {
  alert("sorry u are not adult..u will not be able to acsess our website ")
}else{
  var age = prompt("wrong entry please Enter your age again ? (1 try left) ");
  if (age >= 18) {
  alert("welcome to our website")
} else if(age < 18) {
  alert("sorry u are not adult..u will not be able to acsess our website ")
}else{
  var age = prompt("alot trys .. we are sorryu will not be allowed to acsess our websit .. bye");
}
}
