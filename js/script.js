$ (function(){

	console.log("all set");
	var squares = $('td');
	var resetButton = $('#reset');
	var stepCounter = 0;
	squares.on("click" , function(event){

		if(stepCounter %2 == 0){
			$(this).html("X");
		}else{
			$(this).html("0");
		}
		//$(this).html("X");
		stepCounter ++ //could also be ++stepCounter (means the same)
	});

	resetButton.on("click", function(event){
		squares.html("");
	});



});