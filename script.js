
let randomNum, min, max;

function newGame() {
    min = Number(document.getElementById("min").value);
    max = Number(document.getElementById("max").value);
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);

    
    document.getElementById("message").textContent = "Taxminingizni kiriting!";
}


let guess = null;

function checkGuess() {
    let message = document.getElementById("message");
    guess = Number(document.getElementById("guessInput").value);

    while (guess !== randomNum) {
        if (guess < randomNum) {
            message.textContent = `Mening raqamim ${guess} dan katta`;
        } else if (guess > randomNum) {
            message.textContent = `Mening raqamim ${guess} dan kam`;
        }
        return;
    }

    message.textContent = "Tabriklayman! To'g'ri topdingiz 🎉";
}


function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
