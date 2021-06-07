var firstNumber=document.getElementById("firstNumber");

var secondNumber=document.getElementById("secondNumber");

var sec=secondNumber.value;
sec=parseInt(sec);

var secondNumber=document.getElementById("secondNumber");

var sec=firstNumber.value;

sec=parseInt(sec);

var result=document.getElementById("result");


function add() {

var first=firstNumber.value;
first=parseInt(first);
var second=secondNumber.value;
second=parseInt(second);
var adds=first+second;

result.innerHTML=adds;
}

function mul() {
var first=firstNumber.value;
first=parseInt(first);
var second=secondNumber.value;
second=parseInt(second);
var add=first*second;
result.innerHTML=add;
}
function sub() {

  var first=firstNumber.value;
  first=parseInt(first);
  var second=secondNumber.value;
  second=parseInt(second);
  var add=first-second;

  result.innerHTML=add;

}
function dev() {

  var first=firstNumber.value;
  first=parseInt(first);
  var second=secondNumber.value;
  second=parseInt(second);
  var add=first/second;

  result.innerHTML=add;

}
