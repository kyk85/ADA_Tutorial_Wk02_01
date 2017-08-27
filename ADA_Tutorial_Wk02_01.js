var randomNumber='';
var userNumber='';
var chances=3;
var answer=document.getElementById('answer')
var chancesLeft=document.getElementById('chancesLeft')
var clickme=document.getElementById('clickme')
var tryagain=document.getElementById('tryagain')

function generateNumber() {
	randomNumber=Math.floor((Math.random()*100)+1);
	tryagain.style.display='none'
	console.log(randomNumber);
}

function testThisNumber() {
	userNumber=document.getElementById('testNumber').value;
	if (chances>0) {
		if (userNumber==randomNumber) {
		answer.innerHTML="Congratulations! You guessed right!";
		chancesLeft.innerHTML="You had " + chances + " chance(s) left!";
		clickme.style.display='none'
		tryagain.style.display=''
		return;
		} else if (userNumber>randomNumber) {
		answer.innerHTML="Your guess of " + userNumber + " is too high!";
		} else if (userNumber<randomNumber) {
		answer.innerHTML="Your guess of " + userNumber + " is too low!";
		}
		chances--;
		chancesLeft.innerHTML="You have " + chances + " tries left!";
	} else {
		answer.innerHTML="You have run out of guesses! The right number is " + randomNumber + ". Reload the page to try again!";
		chancesLeft.innerHTML=":(";
		clickme.style.display='none';
		tryagain.style.display='';
	}
}

function reloadpage() {
	location.reload();
}