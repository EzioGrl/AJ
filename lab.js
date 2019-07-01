var userName =  window.prompt("Please enter your name.");
var greetingParagraph = document.getElementById("greeting");

var num1 = parseInt(window.prompt("Enter a Number"));
var num2 = parseInt(window.prompt("Enter another Number"));

var operand1 = document.getElementById("operand1");
var operand2 = document.getElementById("operand2");

var sum = num1 + num2;
var difference = num1 - num2;
var product = num1 * num2;
var quotient = num1 / num2;
var modResult = num1 % num2;

//var myElement = document.getElementById("myElement");
//myElement.innerHTML = "Display this content";
//document.getElementById("myElement").innerHTML = "Display this content";

document.getElementById("addition").innerHTML = "The Sum of " + num1 + " and " + num2 + " is " + sum;
document.getElementById("substraction").innerHTML = "The Difference of " + num1 + " and " + num2 + " is " + difference;
document.getElementById("multiplication").innerHTML = "The Product of " + num1 + " and " + num2 + " is " + product;
document.getElementById("division").innerHTML = "The Quotient of " + num1 + " and " + num2 + " is " + quotient;
document.getElementById("modulus").innerHTML = "The Modulus of " + num1 + " and " + num2 + " is " + modResult;


greetingParagraph.innerHTML += "," + userName;
operand1.innerHTML += num1;
operand2.innerHTML += num2;

