define(["modObject"], function(moduloConto){
	return function(){
		return "IT02" + moduloConto.getBban(); 
	}
});
