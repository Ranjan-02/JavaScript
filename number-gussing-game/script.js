const rendomNumber = (Math.floor(Math.random() * 100 + 1));
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const submit = document.querySelector("#subt");
const lowOrHi = document.querySelector(".lowOrHi");
const remening = document.querySelector(".lastResult");
const startOver = document.querySelector(".resultParas");

let p = document.createElement("p")

let prvGuesses = [];
let numGuesses = 1;

let playGame = true;
if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault();
        let guess = parseInt(userInput.value)
        console.log(guess);
        validGusses(guess)

    })
}
function validGusses(guess) {
    // 
    if (isNaN(guess)) {
        alert("please enter a valid no")
    } else if (guess < 0) {
        alert("please enter a valid no")

    } else if (guess > 101) {
        alert("please enter a valid no")

    } else {
        prvGuesses.push(guess)
        if (prvGuesses === 11) {
            displayGesses(guess)
            displayMassage(`Game over Rendom Number was ${rendomNumber}`)
            endGame()
        } else {
            displayGesses(guess);
            chackGesses(guess);
        }

    }
}

function chackGesses(guess) {
    if (guess === rendomNumber) {
        displayMassage(`You win !!!`)
        endGame()
    } else if (guess > rendomNumber) {
        displayMassage(`no is TOO high`)
    } else if (guess < rendomNumber) {
        displayMassage(`no is TOO low`)
    }
}

function displayGesses(guess) {
    userInput.value = "";
    guessSlot.innerHTML += `${guess} ,`
    numGuesses++
}
function displayMassage(massage) {
    lowOrHi.innerHTML = `<h2>${massage}</h2>`
    remening.innerHTML = `${10 - numGuesses}`

}
function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        rendomNumber = parseInt(Math.random() * 100 + 1);
        prvGuesses = [];
        numGuesses = 1;
        guessSlot.innerHTML = '';
        remening.innerHTML = `${11 - numGuesses} `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;

    })
}

function endGame() {
    userInput = "";
    userInput.setAttribute("daisabled", "");
    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame">Start new game</h2>`
    startOver.appendChild("p")
    playGame = false;
    newGame()

}