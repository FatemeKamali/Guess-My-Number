let number = Math.trunc(Math.random() * 20 + 1);
console.log(number);
let score = 20;
let highscore = 0;
const btnCheck = document.querySelector('.check');
const displayMessage = function (message){
    document.querySelector('.message').textContent = message;
}

btnCheck.addEventListener("click", function () {

    const guess = Number(document.querySelector('.guess').value);
    
    if (!guess) {
    displayMessage('⛔ No number!');
    } else if (guess === number) {
    displayMessage('🎉 Correct Number!');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    } else if (guess !== number) {
        if (score > 1){
        displayMessage(guess > number ? '📈 Too high!' : '📉 Too low!');
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('body').style.backgroundColor = '#990000';
            document.querySelector('.guess').value = '';
        }else {
            displayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
});

const btnAgain = document.querySelector('.again');

btnAgain.addEventListener('click', function(){
    score = 20;
    document.querySelector('.score').textContent = score;
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    number = Math.trunc(Math.random() * 20 + 1);
})  