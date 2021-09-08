'use strict';

console.log(document.querySelector('.message').textContent);

let  secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
document.querySelector('.score').textContent = score;

let highscore = 0;

document.querySelector('.check').addEventListener
('click',function(){
    const guess = document.querySelector('.guess').value;

    //When no input
    if(!guess){
        document.querySelector('.message').textContent ="🚫 No Number"
    }
    //When correct answer
    else if (guess == secretNumber){
        document.querySelector('.message').textContent ="🐱‍🏍 Correct Number";
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width = "30rem";
        document.querySelector('.number').textContent = secretNumber;

        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        else{

        }
 
    }
    
    //When number is high
    else if (guess > secretNumber){
                if(score>1){
                    document.querySelector('.message').textContent ="📈 Number is High";
                    score--;
                    document.querySelector('.score').textContent = score;
                }
                else { 
                    
                }
     
    }
    //When number is low
    else if (guess < secretNumber){
        if(score >1 ){
        document.querySelector('.message').textContent ="📉 Number is Low";
        score--;
        document.querySelector('.score').textContent = score; }
        else { 
            document.querySelector('.message').textContent ="You Lost 👏 ";
        }
    }


})


//Reset Game
document.querySelector('.again').addEventListener('click',
function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = "15rem";
    document.querySelector('.message').textContent ="Start guessing...";
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = "";
    
})