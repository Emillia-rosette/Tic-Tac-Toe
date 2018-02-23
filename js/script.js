$ (function(){

	console.log("all set");
	var squares = $('td');
	var resetButton = $('#reset');
	var stepCounter = 0;
	var winningMoves = $([[0,1,2], [3,4,5], [6,7,8],
						  [0,3,6], [1,4,7], [2,5,8],
						  [0,4,8], [2,4,6]]); //multi dimensional array (it is used to odel the board...it will contain each vallue of moves)
	
	var playerXMoves = [];
	var playerYMoves =[];

	squares.on("click" , function(event){

		if(stepCounter %2 == 0){
			$(this).html("X");

			playerXMoves.push($(this).attr('data-num'));
			//playerXMoves.each(index, value);
			//console.log(playerXMoves);
			checkforWin(playerXMoves, "X"); 

		}else{
			$(this).html("0");
			playerYMoves.push($(this).attr("data-num"));
			checkforWin(playerYMoves, "0"); 
			//playerYMoves.each(index, value);
			//console.log(playerYMoves);
		}
		//$(this).html("X");
		stepCounter ++ //could also be ++stepCounter (means the same)
		//console.log(stepCounter);
		if (stepCounter == 10){ // if you click 10 times, please reset to zero
			squares.html("");
			stepCounter =0;
		}



	resetButton.on("click", function(event){
		squares.html("");
	});


function checkForWin(movesArray, name){
	winningMoves.each(function(index, combination){
		//win counter
		//console.log(movesArray + "moves and the step" + name);
		var winCounter = 0;
		$(combination).each(function(index, winningBox){
			//if moves array contains winning box add 1 to win 
			if (movesArray.indexOf(winningBox) !== -1){//meaning its valide //for every click it will always go there
				//add one
				winCounter ++;
				console.log(winCounter);
			}
			//if counter gets to we have a winning combination 
			if (winCounter ===3){
				alert("Game Over" + name + "wins!");
				resetButton();
			}
		})
		
	})

}
	});

});