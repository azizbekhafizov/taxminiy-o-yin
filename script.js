
let randomNum, min, max;

function newGame() {
    min = Number(document.getElementById("min").value);
    max = Number(document.getElementById("max").value);
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);

    
    document.getElementById("message").textContent = "Taxminingizni kiriting!";
}


function checkGuess() {
    let guess = Number(document.getElementById("guessInput").value);
    let message = document.getElementById("message");

    while (guess !== randomNum) {
        if (guess < randomNum) {
            message.textContent = `Mening raqamim ${guess} dan katta  `;
        } else if (guess > randomNum) {
            message.textContent = `  Mening raqamim ${guess} dan kam`;
        } else {
            message.textContent = "Tabriklayman! To'g'ri topdingiz 🎉";
            return;
        }
        return; 
    }
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
