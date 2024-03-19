var canvas=document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var canvast=document.getElementById("canvast");
var ctxt = canvast.getContext("2d");
var empty=25;
var moves=-1;
var timeLeft=300;
var myInterval;

//****************************************************************** */
var scoreCT;
const NO_OF_HIGH_SCORES = 10;
const HIGH_SCORES = 'highScores';


const highScoreString = localStorage.getItem(HIGH_SCORES);
const highScores = JSON.parse(highScoreString) ?? [];

const lowestScore = highScores[NO_OF_HIGH_SCORES-1]?.score ?? 0;

//***************************************************************** */

function shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;
	}
var ar=[1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,0];
var im=[1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,0];
var empty;
function initialize(){
 ar=shuffle([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,0]);
 im=shuffle([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,0]);
for(var i=0;i<=25;i++){
	if(im[i]==0)
		empty=i+1;
}
}
function timersec(){
	console.log(timeLeft);
	var timeLeftDisplay = document.getElementById('time-left');
	myInterval=setInterval(function(){
		if(timeLeft<=0){
			clearInterval(timeLeft=0);
			}
		timeLeftDisplay.innerHTML = timeLeft;
		timeLeft-=1;
		},1000);
}
function myStopFunction() {
	clearInterval(myInterval);
}
function originalimage(){
    
	while(ar[6]==0||ar[7]==0||ar[8]==0||ar[11]==0||ar[12]==0||ar[13]==0||ar[16]==0||ar[17]==0||ar[18]==0)
	{
	 ar=shuffle([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,0]);
	}
	ctxt.fillStyle="white";
	ctxt.fillRect(0,0,270,270);
	for(var x=0;x<5;x++){
    	for(var y=0;y<5;y++){
        var a,b;
		a=x-1;b=y-1;
		            if((a<3)&&(b<3)&&(a>-1)&&(b>-1)){
						console.log('a:'+a);
						console.log('b:'+b);
			        var textt="puzz";
                    z=x+5*y;
                    z=ar[z];
                    textt=textt+z.toString();
                    if(z!=0)
                     {   console.log('text:'+textt);              
    	               var img=document.getElementById(textt);
    	               var patt=ctxt.createPattern(img,"repeat");
    	               ctxt.fillStyle=patt;
                    } 
    
                    else
                    {
    	               ctxt.fillStyle="white";
                    }
    
                      ctxt.fillRect(90*a,90*b,89,89);
				}
    	 }
       }
     }
var restart=0;
function won(){
	ctx.clearRect(0,0,450,450);
	var img=document.getElementById("puzz7");
	var pat=ctx.createPattern(img,"repeat");
	ctx.fillStyle=pat;
	ctx.fillRect(0,0,450,450);
	var m=document.getElementById("message");
	m.innerHTML="You won the game in "+moves.toString() +" moves";
    scoreCT=Math.floor(10000/moves);
	var mt=document.getElementById("messaget");
	mt.innerHTML="Your Score:"+scoreCT.toString();
	myStopFunction();
	au=document.getElementById("cheers");
	au.play();
	setTimeout(() => { checkHighScore(scoreCT);console.log('came in');}, 1000);
	restart=1;
	moves=-1;
}

function draw(){
	moves++;
  var mov=document.getElementById("moves");
	  mov.innerHTML="MOVES: "+ moves;
  var m=document.getElementById("message");
	m.innerHTML="";
  var t;
  t=0;
  if(restart==1){
	
	  im=shuffle([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,0]);
		for(var i=0;i<=24;i++){
			if(im[i]==0)
				empty=i+1;
			
			
			}
		
		console.log(empty);
		
	 ctx.clearRect(0,0,450,450);
	  restart=0;
  }
        if(im[6]!=ar[6]||im[7]!=ar[7]||im[8]!=ar[8]||im[11]!=ar[11]||im[12]!=ar[12]||im[13]!=ar[13]||im[16]!=ar[16]||im[17]!=ar[17]||im[18]!=ar[18])
      {
          t=1;
          }
	console.log(im);
	console.log(ar);
	ctx.fillStyle="#f0f4f3";
	ctx.fillRect(0,0,450,450);
	ctx.fillStyle="#58746e";
	ctx.fillRect(88,88,273,273); 
	for(var i=0;i<5;i++){
    	for(var j=0;j<5;j++){
    		   component(i,j);    		
    	}
    }
	
	console.log(t);
	
	if(t==0){
		console.log("one more");
		won();
	}
	
}

function component(x, y) {
    
    var text="puzz";
    z=x+5*y;
    z=im[z];
    text=text+z.toString();
    if(z!=0)
    {
    	var img=document.getElementById(text);
    	     var pat=ctx.createPattern(img,"repeat");
    	     ctx.fillStyle=pat; 
    }
    
    else
    {
    	ctx.fillStyle="white";
    }
    ctx.fillRect(90*x+2,90*y+2,86,86);
       
}

function moveup() {
	ctx.clearRect(0,0,450,450);
	if(restart==1)
		{
		draw();
		return;
		}
    if(empty==21||empty==22||empty==23||empty==24||empty==25){
    	au=document.getElementById("no");
    	au.play();
    	moves--;
    	draw();
    } 
    else{
    	au=document.getElementById("cut");
    	au.play();
    	text="puzz";
    	var curr=empty;
    	empty=empty+5;
    	var next=empty;
        im[curr-1]=im[next-1];
        im[next-1]=0;
        draw();
    	
    }
    console.log(empty);
}

function movedown() {
	ctx.clearRect(0,0,450,450);
	if(restart==1)
	{
	
	draw();
	return;
	}
	if(empty==1||empty==2||empty==3||empty==4||empty==5) {
		au=document.getElementById("no");
    	au.play();
		moves--;
		draw();
    }
    else{
    	au=document.getElementById("cut");
    	au.play();
    		text="puzz";
    	var curr=empty;
    	empty=empty-5;
    	var next=empty;
        im[curr-1]=im[next-1];
        im[next-1]=0;
        draw();
        
    }
    
    console.log(empty);
    
}

function moveleft() {
	ctx.clearRect(0,0,450,450);
	
	if(restart==1)
	{
	
	draw();
	return;
	}
	
	if(empty==5||empty==10||empty==15||empty==20||empty==25) {
		au=document.getElementById("no");
    	au.play();
		moves--;  
		draw();
	    }
	    else{
	    	au=document.getElementById("cut");
	    	au.play();
	    	text="puzz";
	    	var curr=empty;
	    	empty=empty+1;
	    	var next=empty;
	        im[curr-1]=im[next-1];
	        im[next-1]=0;
	        draw();
	    	
	  
	    }
	  console.log(empty);
}

function moveright() {
	ctx.clearRect(0,0,450,450);
	if(restart==1)
	{
	moves--;
	draw();
	return;
	}
	  if(empty==1||empty==6||empty==11||empty==16||empty==21) {
		  au=document.getElementById("no");
	    	au.play();
		  moves--;
		  draw();
	    }
	    else{
	    	au=document.getElementById("cut");
	    	au.play();
	    	text="puzz";
	    	var curr=empty;
	    	empty=empty-1;
	    	var next=empty;
	        im[curr-1]=im[next-1];
	        im[next-1]=0;
	        draw();
	    }console.log(empty);
	
	  }
	  
window.addEventListener('keydown', function (e) {
    key = e.keyCode;
    if(key==37){
    	e.preventDefault();
    	moveleft();
    }
    if(key==38){
    	e.preventDefault();
    	moveup();
    }
    if(key==39){
    	e.preventDefault();
    	moveright();
    }
    if(key==40){
    	e.preventDefault();
    	movedown();
    }
	if(key==13){
		e.preventDefault();
		moves=-1;
		initialize();
		originalimage();
		timersec();
		start();
	}
    
});
function start(){
draw();
}
ctx.font = "30px Arial";
ctx.fillText("Hit Enter to start the game",55,230);

var resetbutton=document.getElementById("resetbutton");
resetbutton.addEventListener('click',resetFunction);
function resetFunction(){
	moves=-1;
	myStopFunction();
	initialize();
		originalimage();
		timeLeft=300;
		timersec();
		start();
	
}


function checkHighScore(score) {
    const highScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
    const lowestScore = highScores[NO_OF_HIGH_SCORES-1]?.score ?? 0;
    // cool command, ? - to check one if not the other(push)  and ?? -> check if the whole left part is null return the right side 
    if (score > lowestScore) {
      saveHighScore(scoreCT, highScores); // TODO
    //   showHighScores(); // TODO
    }
  }

  function saveHighScore(score, highScores) {
    const name = prompt('You got a highscore! Enter name:');
    const newScore = { score, name };
    
    // 1. Add to list
    highScores.push(newScore);
  
    // 2. Sort the list
    highScores.sort((a, b) => b.score-a.score);
    
    // 3. Select new list
    highScores.splice(NO_OF_HIGH_SCORES);
    
    // 4. Save to local storage
    localStorage.setItem(HIGH_SCORES, JSON.stringify(highScores));
  };

  
//*********************************************************************************** */
//*********************************************************************************** */
