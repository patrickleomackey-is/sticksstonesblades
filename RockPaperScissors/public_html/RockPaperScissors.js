
function cpThrow(){ 
    
    
    Random = Number(Math.floor(Math.random()*3));
    
    if (Random === 0){
         CPU = "Rock";
        //document.write("It threw a " + CPU);
    } else if (Random === 1){
         CPU = "Paper";}
     //   document.write("It threw a  "+ CPU);}
    else if(Random === 2){
         CPU = "Scissors";}
      //  document.write("It threw a "+ CPU);}
    return CPU;
    }
    
    //document.addEventListener('onload',cpThrow());
    






function PlayTheGame() {
//declare variables to hold the player choice and the computer choice
 losses =[];ties =[]; wins=[];
var userThrow = document.getElementsByName("choice");

for (i =0;i < userThrow.length; i++){
    if (userThrow[i].checked === true){
     urChoice = userThrow[i].value;   }}
     

if (urChoice === CPU){alert ("tie "+CPU+" was thrown by your opponent!");ties++;}

else if (urChoice ==="Rock" && CPU ==="Paper"){alert(CPU+ " covers "+urChoice+ " you lost\n\
this time");++losses;}
    
else if (urChoice ==="Rock" && CPU ==="Scissors"){alert("Your "+urChoice+" smashes \n\
the opponent's "+CPU);++wins;} 
    
else if (urChoice ==="Paper"&& CPU ==="Scissors"){alert("The opponent's "+CPU+" shreds\n\
your "+urChoice);++losses;}
    
else if (urChoice ==="Paper"&& CPU ==="Rock"){alert("Your "+urChoice+ " envelopes \n\
the opponent's "+CPU);++wins;}

else if (urChoice ==="Scissors"&& CPU ==="Rock"){alert("Your "+urChoice+" was \n\
crushed by the opponent's "+CPU);++losses;}
    
else if (urChoice ==="Scissors"&& CPU ==="Paper"){alert("Your "+urChoice+" chops up \n\
the opponent's "+CPU);++wins;}    



document.addEventListener('submit').write('<br>'+wins+"<br>"+losses+"<br>"+ties);
//    document.write("<br>W's "+wins+"<br>Ties "+ties+"<br>L's "+losses);
//use getElementsByName to get the form radio button values
//loop through the array to find which one is checked
//store the checked radio button's value in the variable for player choice



//Call the generateComputerChoice function and store the returned value
//in the variable for computer choice



//compare the player's choice and the computer's choice to determine the winner
//rock beats scissors, scissors beat paper, paper beats rock



//use an alert box to tell the player who won, or if it was a tie
//when displaying the winner, display both the computer choice and the
//player choice in your message


}

