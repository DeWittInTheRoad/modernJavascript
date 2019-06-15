let min = 1;
let max = 10;
let guessesLeft = 3;

const winningNum = parseInt( (Math.random() * (max-min+1) + min));

const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessButton = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;


 game.addEventListener('mousedown', function (e) {
	 if(e.target.className === 'play-again'){
	 	window.location.reload();
	 }
 });
guessButton.addEventListener('click', function () {
	checkNumber()
});

function checkNumber() {
	let guess = parseInt(guessInput.value);

	if (isNaN(guess) || guess < min || guess > max) {
		setMessage(`Please enter a number between ${min} and ${max}`);
	} else if (guess === winningNum) {
		gameOver(true, `${winningNum} is correct, you Won!`);
	} else {
		guessesLeft--;
		if (guessesLeft === 0) {
			gameOver(false, `You lost, the number was ${winningNum}.`);
		} else {
			guessInput.value = '';
			setMessage(`Incorrect, you have ${guessesLeft} guesses left.  Try again.`, 'black');
		}
	}
}

function gameOver(won, msg){
	let color = (won) ? 'green' : 'red';
	guessInput.disabled = true;
	guessInput.style.borderColor = color;

	setMessage(msg, color);

	guessButton.value = 'Play Again';
	guessButton.className += 'play-again';
}

function setMessage(msg, color) {
	message.style.color = color;
	message.textContent = msg;
}

