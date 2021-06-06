alert("This website allowed to adults - above 18 - , maybe it contains horrific views .  ")

var age = prompt("Enter your age :");
console.log(age);
while (age < 18) {
  alert("sorry u are not adult..u will not be able to acsess our website ");
  age = prompt("wrong entry please Enter your age again ?  ");

}

alert("welcome to our website");

    /* var j = prompt("how many freedom logo u want :  : ");

var btr = function() {
  var sq = '';
  var j = prompt("numb of pic : ");
  for (var i = 0; i<j; i++) {
    sq = sq +"<img sqr='https://image.freepik.com/free-vector/realistic-golden-bird-logo-design-with-freedom-text_22586-7.jpg' /> ";
   console.log(i,output);

  }
  return sq;

} */
   var x = prompt("how many times u want freedom logo on our websit ?")

var starsFun = function () {
  var output='';
  var i = 0;
  while (i < x) { 
   output = output +  "<img src='logo.png' />"
   console.log(i,output)
    i++;
  }
  return output;

}
