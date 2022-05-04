
      let player;
      let computer;
      let playerScore=0;
      let computerScore=0;
      let attempt=3;
      let count=1;
      let played=0;

      const snake=() =>{
          played++;
          if(played<=2){
          document.getElementById('win').innerHTML=played+"  "+"chance completed";
          document.getElementById('win1').innerHTML=played+"  "+"chance completed";
          }
          
          player=1;
          computer=Math.floor(Math.random()*3+1)
        
          if (count<=attempt){
          if(computer==1)
          {
          document.getElementById('turn').innerHTML="Computer Pick Snake";
          }
          else if(computer==2)
          {
          document.getElementById('turn').innerHTML="Computer Pick Water";
          }
          else if(computer==3)
          {
          document.getElementById('turn').innerHTML="Computer Pick Gun";
          } 
          //computer chooses any one in the above function against snake

        if (computer==player)
        {
         document.getElementById('message').innerHTML="DRAW"
        }  
        else if(computer==3)
        {
        document.getElementById('message').innerHTML="COMPUTER WIN";
        computerScore=computerScore+1;
        document.getElementById('computer').innerHTML=computerScore;
        }
        else if(computer==2)
        {
        document.getElementById('message').innerHTML="PLAYER WIN";
        playerScore=playerScore+1;
        document.getElementById('player').innerHTML=playerScore;
        }
        //It shows the result whether draw or computer or player win
        count++;
        //count ing the 3 attempts
      }
    if(count==4){
       if(playerScore==computerScore){
        document.getElementById('win').innerHTML="There Is a Tie! Player Score : " +playerScore;
        document.getElementById('win1').innerHTML="There Is a Tie! Computer Score : " +computerScore;
        document.getElementById('chance').innerHTML="3 CHANCE COMPLETED PLAY AGAIN ! <button id='reloadButton' onclick='document.location.reload()'>Replay</button>";
      }
      else if(playerScore<computerScore){
        document.getElementById('win1').innerHTML="Computer Win's Score : " +computerScore;
        document.getElementById('chance').innerHTML="3 CHANCE COMPLETED PLAY AGAIN !<button id='reloadButton' onclick='document.location.reload()'>Replay</button>";
      }
      else{
        document.getElementById('win').innerHTML="Player Win's score : " +playerScore ;
        document.getElementById('chance').innerHTML="3 CHANCE COMPLETED PLAY AGAIN !<button id='reloadButton' onclick='document.location.reload()'>Replay</button>";
    }
    //3 attempt comleted displaying player/computer wins or tie and score
  }
  //count == 4 ends
 }
 //snake function ends

      const water=() =>{
         played++;
         if(played<=2){
         document.getElementById('win').innerHTML=played+"  "+"chance completed";
         document.getElementById('win1').innerHTML=played+"  "+"chance completed";
         }
          player=2;
          computer=Math.floor(Math.random()*3+1)
          
    
      if(count<=attempt){
          if(computer==1)
          {
          document.getElementById('turn').innerHTML="Computer Pick Snake";
          }
          else if(computer==2)
          {
          document.getElementById('turn').innerHTML="Computer Pick Water";
          }
          else
          {
          document.getElementById('turn').innerHTML="Computer Pick Gun";
          } 
        
          //computer chooses any one in the above function against water

        if (computer==player)
        {
         document.getElementById('message').innerHTML="DRAW"
        }  
        else if(computer==1)
        {
        document.getElementById('message').innerHTML="COMPUTER WIN";
        computerScore=computerScore+1;
        document.getElementById('computer').innerHTML=computerScore;
        }
        else if(computer==3)
        {
        document.getElementById('message').innerHTML="PLAYER WIN";
        playerScore=playerScore+1;
        document.getElementById('player').innerHTML=playerScore;
        }
        //It shows the result whether draw or computer or player win
        count++;
        //count ing the 3 attempts
      }
      if(count==4){
       if(playerScore==computerScore){
         document.getElementById('win').innerHTML="There Is a Tie! Player Score : " +playerScore;
         document.getElementById('win1').innerHTML="There Is a Tie! Computer Score : " +computerScore;
         document.getElementById('chance').innerHTML="3 CHANCE COMPLETED PLAY AGAIN !<button id='reloadButton' onclick='document.location.reload()'>Replay</button>";
       } 
       else if(playerScore<computerScore){
         document.getElementById('win1').innerHTML="Computer Win's Score : " +computerScore;
         document.getElementById('chance').innerHTML="3 CHANCE COMPLETED PLAY AGAIN ! <button id='reloadButton' onclick='document.location.reload()'>Replay</button>";
       } 
       else{
         document.getElementById('win').innerHTML="Player Win's score : " +playerScore ;
         document.getElementById('chance').innerHTML="3 CHANCE COMPLETED PLAY AGAIN !<button id='reloadButton' onclick='document.location.reload()'>Replay</button>";
       } 
       //3 attempt comleted displaying player/computer wins or tie and score
      }
      //count==4 ends
      }
      //water function ends

      const gun=() =>{
        played++;
        if(played<=2){
        document.getElementById('win').innerHTML=played+"  "+"chance completed";
        document.getElementById('win1').innerHTML=played+"  "+"chance completed";
        }

          player=3;
          computer=Math.floor(Math.random()*3+1)
          
         if(count<=attempt){   
          if(computer==1)
          {
          document.getElementById('turn').innerHTML="Computer Pick Snake";
          }
          else if(computer==2)
          {
          document.getElementById('turn').innerHTML="Computer Pick Water";
          }
          else
          {
          document.getElementById('turn').innerHTML="Computer Pick Gun";
          } 
        
          //computer chooses any one in the above function against gun

        if (computer==player)
        {
         document.getElementById('message').innerHTML="DRAW"
        }  
        else if(computer==2)
        {
        document.getElementById('message').innerHTML="COMPUTER WIN";
        computerScore=computerScore+1;
        document.getElementById('computer').innerHTML=computerScore;
        }
        else if(computer==1)
        {
        document.getElementById('message').innerHTML="PLAYER WIN";
        playerScore=playerScore+ 1;
        document.getElementById('player').innerHTML=playerScore;
        }
        //It shows the result whether draw or computer or player win 
        count++;
        //count ing the 3 attempts
      }
      
      if(count==4){
      if(playerScore==computerScore){
       document.getElementById('win').innerHTML="There Is a Tie! Player Score : " +playerScore;
       document.getElementById('win1').innerHTML="There Is a Tie! Computer Score : " +computerScore;
       document.getElementById('chance').innerHTML="3 CHANCE COMPLETED PLAY AGAIN ! <button id='reloadButton' onclick='document.location.reload()'>Replay</button>";
      }
      else if(playerScore<computerScore){
       document.getElementById('win1').innerHTML="Computer Win's Score : " +computerScore;
       document.getElementById('chance').innerHTML="3 CHANCE COMPLETED PLAY AGAIN ! <button id='reloadButton' onclick='document.location.reload()'>Replay</button>";
      }
      else{
       document.getElementById('win').innerHTML="Player Win's score : " +playerScore ;
       document.getElementById('chance').innerHTML="3 CHANCE COMPLETED PLAY AGAIN ! <button id='reloadButton' onclick='document.location.reload()'>Replay</button>";
      }
      //3 attempt comleted displaying player/computer wins or tie and score
      }
      //cout == 4 ends
      }
      //gun function ends
      
      
      
