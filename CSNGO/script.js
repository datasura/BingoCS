var usedNums = new Array(24);
var inint = 0;

words = [
  "WALL BANG",
  "TEAM KILL",
  "40 BOMB",
  "OFFICE",
  "GUESS CORRECTLY",
  "OTHER TEAM CHEATING",
  "AUTO",
  "BUNNY HOP",
  "WALLS",
  "ALREADY MUTED",
  "ACE",
  "SPINBOT",
  "STILL LOSE ROUND",
  "200 ADR",
  "SCOUT DEAG ROUND",
  "CHEATING FRIEND",
  "AIM",
  "LMG BUY",
  "90%+ HS",
  "TEAM MAD @CHEATER",
  "WINGMAN",
  "LEAVER",
  "KNIFE SKIN",
  "WRONG LOCK",
];


function newCard() {
  
  for(var i=0; i < 24; i++) {
    setSquare(i);
  }
}

function setSquare(thisSquare) {
  var currSquare = "square"+thisSquare;
  var newNum;
  var colPlace =new Array(0,1,2,3,4,0,1,2,3,4,0,1,3,4,0,1,2,3,4,0,1,2,3,4);
	
	do {
        //newNum =(colPlace[thisSquare] * 15) + getNewNum() + 1;
        newNum = words[getNewNum()];
	}
	while (usedNums[newNum]);
	
    usedNums[newNum] = true;
    
    var tableCell = document.getElementById(currSquare);
    tableCell.innerHTML = newNum;
    tableCell.addEventListener('mouseenter', function(e){
        tableCell.style.color = "lightblue";
    });

    tableCell.addEventListener('mouseleave', function(e){
        tableCell.style.color = "black";
    });

    tableCell.addEventListener('click', function(e){
        if(init == 0) {
            console.log(init)
            init = 1;
            tableCell.style.backgroundColor = "indianred";
        }
        else{
            console.log(init)
            init = 0;
            tableCell.style.backgroundColor = "white";
        }
    });
    
}

function getNewNum() {
	return Math.floor(Math.random() * 24);
} 