
let createAnswersInButtons = (var1, var2) => {
  let correctButtonNumber = Math.floor(Math.random() * 5 + 1)
  //Create correct Answer each time in a different place
  document.getElementById(`${correctButtonNumber}`).innerHTML = Number(var1) + Number(var2)
  //
  for (let i=1; i<6; i++) {
    let wrongAnswer = Math.floor(Math.random() * 20)
    let flag = false
    //Checking that the random number does not repeat itself in other buttons
    while ((wrongAnswer == (Number(var1) + Number(var2))) || flag){
      wrongAnswer = Math.floor(Math.random() * 20)
      for (let j=1; j<i; j++) {
        buttonJ = document.getElementById(`${j}`).innerHTML
        if (buttonJ === wrongAnswer){
          flag = true  
        }
      }
    }
    //Creating random incorrect answer
    if (i !== correctButtonNumber)
    {
      document.getElementById(`${i}`).innerHTML = wrongAnswer
    }
    
  }
}

//creating random variables
let var1 = document.getElementById("var1").innerHTML = Math.floor(Math.random() * 10)
let var2 = document.getElementById("var2").innerHTML = Math.floor(Math.random() * 10)
createAnswersInButtons(var1, var2)

let checkAnswer = (buttonNumber) => {
  let buttonInnerHTML = document.getElementById(`${buttonNumber}`).innerHTML
  if (buttonInnerHTML == (Number(var1) + Number(var2))){
    //showing the answer is correct by the 'check' sign
    document.getElementById("check").style.display = "block"
    //changing the button to able
    document.getElementById("changeExercise").disabled = false
    disabledBtn(true)
  } else {
    //showing the answer is incorrect by the 'x' sign
    document.getElementById("tryAgain").disabled = false
    document.getElementById("x").style.display = "block"
    disabledBtn(true)
  }
}

let changeExercise = () => {
  //If the user is correct, the exercise changes.
  //Changing the first variable
  document.getElementById("var1").innerHTML = Math.floor(Math.random() * 10)
  var1 = document.getElementById("var1").innerHTML
  //Changing the second variable
  document.getElementById("var2").innerHTML = Math.floor(Math.random() * 10)
  var2 = document.getElementById("var2").innerHTML
  //creating a new correct answer in a button
  createAnswersInButtons(var1, var2)
  document.getElementById("changeExercise").disabled = true
  document.getElementById("check").style.display = "none"
  disabledBtn(false)
}

let tryAgain = () => {
  document.getElementById("tryAgain").disabled = true
  document.getElementById("x").style.display = "none"
  disabledBtn(false)
}

//A function that changes the buttons disable to true or to false
let disabledBtn = (trueOrFalse) => {
  document.getElementById("1").disabled = trueOrFalse
  document.getElementById("2").disabled = trueOrFalse
  document.getElementById("3").disabled = trueOrFalse
  document.getElementById("4").disabled = trueOrFalse
  document.getElementById("5").disabled = trueOrFalse
}