function newRoll(){

	var dice1 = document.getElementById('dice1').style.border = "";
	var dice2 = document.getElementById('dice2').style.border = "";
	var dice3 = document.getElementById('dice3').style.border = "";
	var dice4 = document.getElementById('dice4').style.border = "";
	var dice5 = document.getElementById('dice5').style.border = "";
	var dice6 = document.getElementById('dice6').style.border = "";
	var dice7 = document.getElementById('dice7').style.border = "";
	var dice8 = document.getElementById('dice8').style.border = "";
	var dice9 = document.getElementById('dice9').style.border = "";
	var dice10 = document.getElementById('dice10').style.border = "";
	var dice11 = document.getElementById('dice11').style.border = "";
	var dice12 = document.getElementById('dice12').style.border = "";

	var spantotalScore = document.getElementById('spantotalScore');
	spantotalScore.innerText = "";

	rollDice();
}

function rollDice(){

	var diceOne = parseInt(Math.random() * 6)+1;

	var diceTwo = parseInt(Math.random() * 6)+1;

	var dice1 = document.getElementById('dice1');
	var dice2 = document.getElementById('dice2');
	var dice3 = document.getElementById('dice3');
	var dice4 = document.getElementById('dice4');
	var dice5 = document.getElementById('dice5')
	var dice6 = document.getElementById('dice6');
	var dice7 = document.getElementById('dice7');
	var dice8 = document.getElementById('dice8');
	var dice9 = document.getElementById('dice9');
	var dice10 = document.getElementById('dice10');
	var dice11 = document.getElementById('dice11');
	var dice12 = document.getElementById('dice12');

	if(diceOne == "1"){
		dice1.style.border = "10px solid black";
	}
	if(diceOne == "2"){
		dice2.style.border = "10px solid black";
	} 
	if(diceOne == "3"){
		dice3.style.border = "10px solid black";
	}
	if(diceOne == "4"){
		dice4.style.border = "10px solid black";
	}
	if(diceOne == "5"){
		dice5.style.border = "10px solid black";
	}
	if(diceOne == "6"){
		dice6.style.border = "10px solid black";
	}

	if(diceTwo == "1"){
		dice7.style.border = "10px solid black";
	}
	if(diceTwo == "2"){
		dice8.style.border = "10px solid black";
	}
	if(diceTwo == "3"){
		dice9.style.border = "10px solid black";
	}
	if(diceTwo == "4"){
		dice10.style.border = "10px solid black";
	}
	if(diceTwo == "5"){
		dice11.style.border = "10px solid black";
	}
	if(diceTwo == "6"){
		dice12.style.border = "10px solid black";
	}

	var sum = diceOne + diceTwo;

	var spantotalScore = document.getElementById('spantotalScore');

	spantotalScore.innerText = sum;


}