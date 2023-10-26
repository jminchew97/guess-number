

// Your function(s) should go here that will interact with the webpage or DOM
function getRandomNumber(max){
    return Math.floor(Math.random() * max + 1)
}
var randomNumber = getRandomNumber(10)

console.log(randomNumber)
console.log("file being called from index.html")

var guessButton = document.getElementById("submit-guess")


guessButton.addEventListener("click",(event) => {
    event.preventDefault()
    var hintText = document.getElementById("hint")
    var userInput = document.getElementById("user-input")
    const num = userInput.value
    

    console.log(num)
    var mainGuessDiv = document.getElementById("show-guesses")
    
    var guessNumAsP = document.createElement("p")
    guessNumAsP.innerHTML = num
    mainGuessDiv.append(guessNumAsP)
    
    if (num < randomNumber){
        hintText.innerHTML = `Target number is greater than ${num}`
    }
    else if (num > randomNumber){
        hintText.innerHTML = `Target number is less than ${num}`
    }else {
        // alert("Correct the answer is " + randomNumber)
        // alert("you guessed correctly")
        var mainGuessDiv = document.getElementById("show-guesses")
        // location.reload()
    }


    
    
})