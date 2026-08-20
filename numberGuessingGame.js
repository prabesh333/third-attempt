const highscore = document.getElementById("highscore");
const score = document.getElementById("score");
const chance = document.getElementById("chance");
const useranswer = document.getElementById("useranswer");
const btn = document.getElementById("btn");

function randomNumber(min, max){
    const number = Math.floor(Math.random() * max + min);
    return number;
}

let magicNumber = randomNumber(1, 100);
let remainingChance = 5;
let currentScore = 0;
let currenthighscore = Number(localStorage.getItem("highscore")) || 0;

highscore.textContent = currenthighscore;

console.log(magicNumber);

function checkGuess(){
    const answer = Number(useranswer.value);

    if (remainingChance ===0){
        alert("Out of Chances");
        return;
    }

    if (answer === magicNumber){
        currentScore++;
        score.textContent = currentScore;
        
        if (currentScore > currenthighscore){
            localStorage.setItem("highscore", currentScore);
            highscore.textContent = currentScore;
        }

        magicNumber = randomNumber(1, 100);
    }else {
        remainingChance--;
        chance.textContent = remainingChance;
        
    }
    
}

btn.addEventListener("click", checkGuess);
