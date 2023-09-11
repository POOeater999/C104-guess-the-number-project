// generation of random value
playername = localStorage.getItem("player_name")
var y = Math.floor(Math.random()*10+1);
// count of attempts
var guess = 1 
// until hit
function submit() {
    var x = document.getElementById("guessField").value;

    if(x == y)
    {
        alert("CONGRATULATIONS!!!🥳 "+playername+"YOU GUESSED IT RIGHT IN "+guess+" Guesses")
        guess=1
    } 
    else if(x>y)
    {
        guess++;
        alert("OOPS SoRRY!!! TRY A SMALLER NUMBER");


    }
    else
    {
        guess++;
        alert("oops sorry!!! TRY A BIGGER NUMBER")
    }


}
  
// function for the number sent by the user
function playAgain() {
    y = Math.floor(Math.random()*10+1);
}
