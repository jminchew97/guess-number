

// Your function(s) should go here that will interact with the webpage or DOM
function getRandomNumber(max){
    return Math.floor(Math.random() * max + 1)
}
var randomNumber = getRandomNumber(10)
var guessButton = document.getElementById("submit-guess")

guessButton.addEventListener("click",(event) => {
    event.preventDefault()
    var hintText = document.getElementById("hint")
    var userInput = document.getElementById("user-input")
    const num = userInput.value
    
    var mainGuessDiv = document.getElementById("show-guesses")
    
    var guessNumAsP = document.createElement("p")
    
    if (num < randomNumber){
        guessNumAsP.innerHTML += `${num} | Too low`
    }
    else if (num > randomNumber){
        guessNumAsP.innerHTML += `${num} | Too high`
    }

    //  Update history
    mainGuessDiv.append(guessNumAsP)

    if (num == randomNumber){
        guessNumAsP.innerHTML = `${num} | CORRECT!`
        mainGuessDiv.append(guessNumAsP)
        var restartButton = document.createElement("button")
        restartButton.innerText = "restart"
        restartButton.onclick = reloadPage()

        mainGuessDiv.append(restartButton)
    }
})
