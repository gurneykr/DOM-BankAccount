
function makeBankAccount(){
	var accountBalance = 0.0;

	var deposit = function(amount){
	accountBalance += parseFloat(amount);
};
var withdraw = function (amount){
	accountBalance -= parseFloat(amount);
};
var balance = function (){
	return accountBalance;
};
return{
	deposit:deposit,
	withdraw:withdraw,
	balance:balance
};
}

$(function(){
	function showBalance(){
		
		$("#container").empty().append("<h2> Balance($):" + bankAccount.balance() + "</h2>");
	}

	var bankAccount = makeBankAccount();
	$("#increment").click(function(){
		var amount  = $("input").val();
		bankAccount.deposit(amount);
		showBalance();
	});
	$("#decrement").click(function(){
		var amount  = $("input").val();
		bankAccount.withdraw(amount);
		showBalance();
	});
});
