/*
You can see this app here: https://diznicolasamor.github.io/TicTacToe/ 
- - - - - - - - - -
Nico Diz
https://github.com/DizNicolasAmor
*/

//level = medium;  //computer does not recognize vertical patterns. 

$(document).ready(function(){
  var lockers = ['#', '#', '#', '#', '#', '#', '#', '#', '#'],
      player = 'X', 
      computer = 'O', 
      gameOn = false, 
      allLockersFilled = false,
            
      easyMode = false, 
      mediumMode = false,
      hardMode = false,

      //var used in easyMode
      computerAlreadyPlayed = false;

  //reset: computer starts and set  its value in locker #4
  function reset(){
    lockers = ['#', '#', '#', '#', '#', '#', '#', '#', '#'];
    $('.locker').text('');
    gameOn=true; 
    if(computer == 'X'){
       $('#'+4).text(computer);
      lockers[4]=computer;
    }
  }

  //choose X or O
  $('#chooseX').click(function(){
    player = 'X';
    computer = 'O'; 
    $('#choose').hide();
    $('#chooseLevel').removeClass('hide');
  });
  
  $('#chooseO').click(function(){
    player = 'O';
    computer = 'X'; 
    $('#choose').hide();
    $('#chooseLevel').removeClass('hide');
  });
  
  //chooseLevel
  $('#easyMode').click(function(){
    $('#chooseLevel').addClass('hide');
    easyMode = true;
    reset();
  });
  
  $('#mediumMode').click(function(){
    $('#chooseLevel').addClass('hide');
    mediumMode = true;
    reset();
  });
  
  $('#hardMode').click(function(){
    $('#chooseLevel').addClass('hide');
    hardMode = true;
    reset();
  });
 
	//play again?  button
  $('#playAgain').click(function(){
    $('#result').addClass('hide');
    $('#choose').show();
  });
  
  
  //click on a locker and set X or O 
  $('.locker').click(function(){
    var slot = $(this).attr('id');
    playerTurn(player, slot);
    gameOn=false; 
  });
  
  //what happens when user plays
  function playerTurn(player, id){
    var spotTaken = $('#'+id).text();
    if(spotTaken ===''){
      lockers[id] = player;
      $('#'+id).text(player);
      allLockersF();
      checkWin(lockers, player);
      if(gameOn===false){
        computersTurn();
        allLockersF();
        checkWin(lockers, computer);
      }
    }
  };

  //what happens when computer plays
  function computersTurn(){

    function playPattern(){
	    // look for the empty spaces in the following order 
	    var importantLockers = [4, 0, 8, 2, 6, 1, 5, 7, 3];
   
	    for(var i=0; i<9; i++){
	      if(lockers[importantLockers[i]] ==='#'){
	        lockers[importantLockers[i]] = computer;
	        $('#'+importantLockers[i]).text(computer);
	        i=9;
	      }
	    }
	}
    
    if(easyMode == true){
      computerAlreadyPlayed = false;
      while(computerAlreadyPlayed === false){
        var randomLocker = Math.floor(Math.random()*9);
        if(lockers[randomLocker] ==='#'){
          lockers[randomLocker] = computer;
          $('#'+randomLocker).text(computer);
          computerAlreadyPlayed = true;
        }
      }
    } //easyMode

    if(mediumMode == true){
      playPattern();
    } //mediumMode

    if(hardMode == true){
      var winnerPositions = [ [0,1,2],
                             [3,4,5], 
                             [6,7,8],
                             [0,3,6],
                             [1,4,7],
                             [2,5,8],
                             [0,4,8],
                             [6,4,2]],
          computerWon = false, 
          preventPlayerWin = false; 
      
      // first check if the computer can win. if it is possible, win. 
      for(var i =0; i<winnerPositions.length; i++){
        if(computerWon == false && lockers[winnerPositions[i][0]] === computer && lockers[winnerPositions[i][1]] === computer && lockers[winnerPositions[i][2]] === "#"){
          lockers[winnerPositions[i][2]] = computer;
          $('#'+winnerPositions[i][2]).text(computer);
          computerWon = true;
          break;
        }
        
        if(computerWon == false && lockers[winnerPositions[i][0]] === computer && lockers[winnerPositions[i][2]] === computer && lockers[winnerPositions[i][1]]=== "#"){
          lockers[winnerPositions[i][1]] = computer;
          $('#'+winnerPositions[i][1]).text(computer);
          computerWon = true;
          break;
        }
        
        if(computerWon == false && lockers[winnerPositions[i][1]] === computer && lockers[winnerPositions[i][2]] === computer && lockers[winnerPositions[i][0]]=== "#"){
          lockers[winnerPositions[i][0]] = computer;
          $('#'+winnerPositions[i][0]).text(computer);
          computerWon = true;
          break;
        }
      }  //for
      
      
      // second, if the computer can not win, check if the player can win and avoid it. 
      if(computerWon == false){
        for(var i =0; i<winnerPositions.length; i++){
          if(preventPlayerWin == false && lockers[winnerPositions[i][0]] === player && lockers[winnerPositions[i][1]] === player && lockers[winnerPositions[i][2]] === "#"){
            lockers[winnerPositions[i][2]] = computer; 
            $('#'+winnerPositions[i][2]).text(computer); 
            preventPlayerWin = true;
            break;
          }
          
          if(preventPlayerWin == false && lockers[winnerPositions[i][0]] === player && lockers[winnerPositions[i][2]] === player && lockers[winnerPositions[i][1]] === "#"){
            lockers[winnerPositions[i][1]] = computer; 
            $('#'+winnerPositions[i][1]).text(computer); 
            preventPlayerWin = true;
            break;
          }
          
          if(preventPlayerWin == false && lockers[winnerPositions[i][1]] === player && lockers[winnerPositions[i][2]] === player && lockers[winnerPositions[i][0]] === "#"){
            lockers[winnerPositions[i][0]] = computer; 
            $('#'+winnerPositions[i][0]).text(computer); 
            preventPlayerWin = true;
            break;
          }
        } //for
        
      }  // 'if' that checks if player can win 
      
      
      // third, if no one can win, play the pattern
      if(computerWon == false && preventPlayerWin == false){
        playPattern(); 
      }  // 'if' -> playPattern;     
      
      // computer already played, so now renew var for next turn. 
      preventPlayerWin = false;
      
   } //hardMode

  }  //computersTurn()  
  
  //function checkWin //  Note: CP -> currentPlayer
  function checkWin(lockers, CP){
    if(lockers[0]===CP && lockers[1]===CP &&  lockers[2]===CP){
      gameOn=true; 
      $('#gameResult').html(CP+' wins!');
      $('#result').removeClass('hide');
    }else if(lockers[3]===CP && lockers[4]===CP &&  lockers[5]===CP){
      gameOn=true; 
      $('#gameResult').html(CP+' wins!');
      $('#result').removeClass('hide');
    }else if(lockers[6]===CP && lockers[7]===CP &&  lockers[8]===CP){
      gameOn=true; 
      $('#gameResult').html(CP+' wins!');
      $('#result').removeClass('hide');
    }else if(lockers[0]===CP && lockers[3]===CP &&  lockers[6]===CP){
      gameOn=true; 
      $('#gameResult').html(CP+' wins!');
      $('#result').removeClass('hide');
    }else if(lockers[1]===CP && lockers[4]===CP &&  lockers[7]===CP){
      gameOn=true; 
      $('#gameResult').html(CP+' wins!');
      $('#result').removeClass('hide');
    }else if(lockers[2]===CP && lockers[5]===CP &&  lockers[8]===CP){
      gameOn=true; 
      $('#gameResult').html(CP+' wins!');
      $('#result').removeClass('hide');
    }else if(lockers[0]===CP && lockers[4]===CP &&  lockers[8]===CP){
      gameOn=true; 
      $('#gameResult').html(CP+' wins!');
      $('#result').removeClass('hide');
    }else if(lockers[6]===CP && lockers[4]===CP &&  lockers[2]===CP){
      gameOn=true; 
      $('#gameResult').html(CP+' wins!');
      $('#result').removeClass('hide');
    }else if(allLockersFilled===true){
      gameOn=true; 
      $('#gameResult').html("It's a tie!");
      $('#result').removeClass('hide');
    }else{
      gameOn = false; 
    }
    
    if(gameOn === true){
      easyMode = false; 
      mediumMode = false;
      hardMode = false;
    }

  };
  
  //check if allLockersFilled
  function allLockersF(){
    allLockersFilled=true; 

    for(var j=0; j<9; j++){
      if(lockers[j]==='#'){
         allLockersFilled=false; 
         }
    }
  }
  
  
  
});  //document ready
