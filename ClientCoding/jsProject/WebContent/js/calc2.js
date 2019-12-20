//객체 리터럴로 작성
var Calculator = {
	num1 : 0,
	num2 : 0,
	oper : null,
	
	setValue : function(num1, oper, num2){
		this.num1 = num1;
		this.oper = oper;
		this.num2 = num2;
	},
	
	operation : function(){
		var formula;
		formula = Calculator.num1 + Calculator.oper + Calculator.num2;
		
		return formula;
	},
	
	print : function(formula){
		document.getElementById("result").innerHTML = eval(formula);
	}
};

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