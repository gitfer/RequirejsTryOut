define(function(){
	var CIN = "12345";
	var CAB = "12345";
	var Conto = "123456789012";
	return {
		ABI: "11030",
		getBban: function(){
		var result = CIN + this.ABI + CAB + Conto;
		console.log(result);
		return result;
		}
	};
});
