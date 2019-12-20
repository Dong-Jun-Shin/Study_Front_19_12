var Calculator = {};
	
Calculator.num1 = 0;
Calculator.num2 = 0;
Calculator.oper = null;

Calculator.setValue = function(num1, oper, num2){
	this.num1 = num1;
	this.oper = oper;
	this.num2 = num2;
} 

Calculator.operation = function(){
	var formula;
	formula = Calculator.num1 + Calculator.oper + Calculator.num2;
	
	return formula;
} 

Calculator.print = function(formula){
	document.getElementById("result").innerHTML = eval(formula);
}

function operResult(){
	var num1 = document.getElementById("num1").value;
	var oper = document.getElementById("oper").value;
	var num2 = document.getElementById("num2").value;
	
	Calculator.setValue(num1, oper, num2);
	var formula = Calculator.operation();
	Calculator.print(formula);
}

function formClear(){
	document.getElementById("form").reset();
	document.getElementById("result").innerHTML = "?";
}