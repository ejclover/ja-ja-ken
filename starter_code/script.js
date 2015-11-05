var userPoint = 0;
var aiPoint = 0;
var aiChoice= 
// This function returns the selection of the computer
function getAISelection() {
    
    var weapon= Math.random()*3;
    if(weapon<1){
        
        aiValue="rock";
    }else if(weapon>1&&weapon<2){
        aiValue="paper";
        
    }else{
        aiValue="scissors";
        
    }
    
    //TODO: randomly choose between 'rock', 'paper', or 'scissors'
    
}

// This function picks the winner
function pickWinner(userValue, aiValue) {
    //TODO: pick the correct winner: user or ai
    //TODO: Add one point for the winner
    
}

// This function sets the scoreboard with the correct points
function setScore() {

}

// This function captures the click and picks the winner
function evaluate(evt) {
    
    $("#scissors").on("click")
    
    var userValue = evt.target.getAttribute('id');
    var aiValue = getAISelection();

    var winner = pickWinner(userValue, aiValue);

    if ( 'user' === winner ) {
        $('#message').delay(50).text('You have won!, Click a box to play again');
    } else if ( winner === 'draw' ) {
        $('#message').delay(50).text('Draw! Click a box to play again');
    } else {
        $('#message').delay(50).text('You have lost!, Click a box to play again');
    }
}

// This function runs on page load
$(document).ready(function(){

});
