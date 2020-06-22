

var value = document.getElementById('val');
var result= document.getElementById('result');
var Calculate= document.getElementById('Calc');



value.onkeyup = function(){

result.innerHTML="Calculating";

};

value.onkeydown = function(){

result.innerHTML="  ";

};

Calculate.onclick = function() {

  result.innerHTML= value.value *3 +" "+"in USD";


};
