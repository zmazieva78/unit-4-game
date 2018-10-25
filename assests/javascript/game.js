$(document).ready(function(){
// I assigned function to variable, which generates random number to match.
    
    var Random=Math.floor(Math.random()*101+19)
    $('#randomNumber').text(Random);

// I assigned function to crystals variables. 
    var diamondNum= Math.floor(Math.random()*11+1)
    var rubyNum= Math.floor(Math.random()*11+1)
    var emeraldNum= Math.floor(Math.random()*11+1)
    var onyxNum= Math.floor(Math.random()*11+1)

    var userTotal= 0; 
    var wins= 0;
    var losses = 0;

  $('#Wins').text(wins);
  $('#Losses').text(losses);

  //This function resets game after winning or losing game.
  function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#randomNumber').text(Random);
        diamondNum= Math.floor(Math.random()*11+1);
        rubyNum= Math.floor(Math.random()*11+1);
        emeraldNum= Math.floor(Math.random()*11+1);
        onyxNum= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#score').text(userTotal);
        } 
  //This function adds point to Wins.
  function winner(){
    wins++; 
    $('#wins').text(wins);
    reset();
    alert("You won!");
  }
  //This function adds point to Losses 
  function loser(){
    losses++;
    $('#losses').text(losses);
    reset();
    alert ("You lose!");
  }
  //In this section I enable click on each crystal button.
  
// Diamond crystal
    $('#diamond').on ('click', function(){
      userTotal = userTotal + diamondNum;
      console.log("New userTotal= " + userTotal);
      $('#score').text(userTotal); 

          if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          }   
    })
// Ruby crystal
    $('#ruby').on ('click', function(){
      userTotal = userTotal + rubyNum;
      console.log("New userTotal= " + userTotal);
      $('#score').text(userTotal); 
          if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })
// Onyx crystal
    $('#onyx').on ('click', function(){
      userTotal = userTotal + emeraldNum;
      console.log("New userTotal= " + userTotal);
      $('#score').text(userTotal);

            if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })
// Emerald crystal
    $('#emerald').on ('click', function(){
      userTotal = userTotal + onyxNum;
      console.log("New userTotal= " + userTotal);
      $('#score').text(userTotal); 
        
            if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          }
    });   
  }); 
