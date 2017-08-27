var randomNumber='';
var userNumber='';
var chances=3;

function generateNumber() {
	randomNumber=Math.floor((Math.random()*100)+1);
	console.log(randomNumber);
}


function testThisNumber() {
	userNumber=document.getElementById('testNumber').value;
	if (chances>0) {
		if (userNumber==randomNumber) {
		document.getElementById('answer').innerHTML="Congratulations! You guessed right!";
		document.getElementById('chancesLeft').innerHTML="You had " + chances + " chance(s) left!";
		return;
		} else if (userNumber>randomNumber) {
		document.getElementById('answer').innerHTML="Your guess of " + userNumber + " is too high!";
		} else if (userNumber<randomNumber) {
		document.getElementById('answer').innerHTML="Your guess of " + userNumber + " is too low!";
		}
		chances--;
		document.getElementById('chancesLeft').innerHTML="You have " + chances + " tries left!";
	} else {
		document.getElementById('answer').innerHTML="You have run out of guesses! Reload the page to try again!";
		document.getElementById('chancesLeft').innerHTML=":(";
	}
}