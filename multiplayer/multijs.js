var canvas=document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var canvaspl=document.getElementById("canvaspl2");
var ctxpl = canvaspl.getContext("2d");
var canvast=document.getElementById("canvast");
var ctxt = canvast.getContext("2d");
var empty=25;
var moves=-1;
var movespl=-1;
var emptypl=25;
var timeLeft=300;
var myInterval;

//****************************************************************** */
var scoreCT;
var scoreCTpl;
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
var impl=[1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,0];
var empty;
var emptypl;

function initialize(){
 ar=shuffle([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,0]);
 im=shuffle([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,0]);
 for(var p=0;p<=25;p++){
		impl[p]=im[p];
}
for(var i=0;i<=25;i++){
	if(im[i]==0)
		empty=i+1;
}
for(var l=0;l<=25;l++){
	if(impl[l]==0)
		emptypl=l+1;
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
var restartpl=0;

function won(){
	ctx.clearRect(0,0,450,450);
	var img=document.getElementById("puzz7");
	var pat=ctx.createPattern(img,"repeat");
	ctx.fillStyle=pat;
	ctx.fillRect(0,0,450,450);
	var m=document.getElementById("message");
	m.innerHTML="PlayerA won the game in "+moves.toString() +" moves";
    scoreCT=Math.floor(10000/moves);
	var mt=document.getElementById("messaget");
	mt.innerHTML="Your Score:"+scoreCT.toString();
	myStopFunction();
	au=document.getElementById("cheers");
	au.play();
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
	  
//*********************************************************************** */
//************ Second Player Commands************************************ */

function wonpl(){
	ctxpl.clearRect(0,0,450,450);
	var img=document.getElementById("puzz7");
	var pat=ctxpl.createPattern(img,"repeat");
	ctxpl.fillStyle=pat;
	ctxpl.fillRect(0,0,450,450);
	var m=document.getElementById("messagepl");
	m.innerHTML="Player B won the game in "+movespl.toString() +" moves";
    scoreCTpl=Math.floor(10000/movespl);
	var mt=document.getElementById("messagetpl");
	mt.innerHTML="Your Score:"+scoreCTpl.toString();
	myStopFunction();
	au=document.getElementById("cheers");
	au.play();
	restartpl=1;
	movespl=-1;
}

function drawpl(){
	movespl++;
  var mov=document.getElementById("movespl");
	  mov.innerHTML="MOVES: "+ movespl;
  var m=document.getElementById("messagepl");
	m.innerHTML="";
  var tpl;
  tpl=0;
  if(restartpl==1){
	
	  impl=shuffle([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,0]);
		for(var i=0;i<=24;i++){
			if(im[i]==0)
				emptypl=i+1;
			
			
			}
		
		console.log(emptypl);
		
	 ctxpl.clearRect(0,0,450,450);
	  restart=0;
  }
        if(impl[6]!=ar[6]||impl[7]!=ar[7]||impl[8]!=ar[8]||impl[11]!=ar[11]||impl[12]!=ar[12]||impl[13]!=ar[13]||impl[16]!=ar[16]||impl[17]!=ar[17]||impl[18]!=ar[18])
      {
          tpl=1;
          }
	console.log(impl);
	console.log(ar);
	ctxpl.fillStyle="#f0f4f3";
	ctxpl.fillRect(0,0,450,450);
	ctxpl.fillStyle="#58746e";
	ctxpl.fillRect(88,88,273,273); 
	for(var i=0;i<5;i++){
    	for(var j=0;j<5;j++){
    		   componentpl(i,j);    		
    	}
    }
	
	console.log(tpl);
	
	if(tpl==0){
		console.log("one more");
		wonpl();
	}
	
}

function componentpl(x, y) {
    
    var text="puzz";
    z=x+5*y;
    z=impl[z];
    text=text+z.toString();
    if(z!=0)
    {
    	var img=document.getElementById(text);
    	     var pat=ctxpl.createPattern(img,"repeat");
    	     ctxpl.fillStyle=pat; 
    }
    
    else
    {
    	ctxpl.fillStyle="white";
    }
    ctxpl.fillRect(90*x+2,90*y+2,86,86);
       
}

function moveuppl() {
	ctxpl.clearRect(0,0,450,450);
	if(restartpl==1)
		{
		drawpl();
		return;
		}
    if(emptypl==21||emptypl==22||emptypl==23||emptypl==24||emptypl==25){
    	au=document.getElementById("no");
    	au.play();
    	movespl--;
    	drawpl();
    } 
    else{
    	au=document.getElementById("cut");
    	au.play();
    	text="puzz";
    	var curr=emptypl;
    	emptypl=emptypl+5;
    	var next=emptypl;
        impl[curr-1]=impl[next-1];
        impl[next-1]=0;
        drawpl();
    	
    }
    console.log(emptypl);
}

function movedownpl() {
	ctxpl.clearRect(0,0,450,450);
	if(restartpl==1)
	{
	
	drawpl();
	return;
	}
	if(emptypl==1||emptypl==2||emptypl==3||emptypl==4||emptypl==5) {
		au=document.getElementById("no");
    	au.play();
		movespl--;
		drawpl();
    }
    else{
    	au=document.getElementById("cut");
    	au.play();
    		text="puzz";
    	var curr=emptypl;
    	emptypl=emptypl-5;
    	var next=emptypl;
        impl[curr-1]=impl[next-1];
        impl[next-1]=0;
        drawpl();
        
    }
    
    console.log(emptypl);
    
}

function moveleftpl() {
	ctxpl.clearRect(0,0,450,450);
	
	if(restartpl==1)
	{
	
	drawpl();
	return;
	}
	
	if(emptypl==5||emptypl==10||emptypl==15||emptypl==20||emptypl==25) {
		au=document.getElementById("no");
    	au.play();
		movespl--;  
		drawpl();
	    }
	    else{
	    	au=document.getElementById("cut");
	    	au.play();
	    	text="puzz";
	    	var curr=emptypl;
	    	emptypl=emptypl+1;
	    	var next=emptypl;
	        impl[curr-1]=impl[next-1];
	        impl[next-1]=0;
	        drawpl();
	    	
	  
	    }
	  console.log(emptypl);
}

function moverightpl() {
	ctxpl.clearRect(0,0,450,450);
	if(restartpl==1)
	{
	movespl--;
	drawpl();
	return;
	}
	  if(emptypl==1||emptypl==6||emptypl==11||emptypl==16||emptypl==21) {
		  au=document.getElementById("no");
	    	au.play();
		  movespl--;
		  drawpl();
	    }
	    else{
	    	au=document.getElementById("cut");
	    	au.play();
	    	text="puzz";
	    	var curr=emptypl;
	    	emptypl=emptypl-1;
	    	var next=emptypl;
	        impl[curr-1]=impl[next-1];
	        impl[next-1]=0;
	        drawpl();
	    }console.log(emptypl);
	
	  }

//********************************************************************* */
//**********************Second Player command ends********************* */

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
	if(key==87){
    	e.preventDefault();
    	moveuppl();
    }
    if(key==65){
    	e.preventDefault();
    	moveleftpl();
    }
	if(key==68){
    	e.preventDefault();
    	moverightpl();
    }
	if(key==83){
    	e.preventDefault();
    	movedownpl();
    }
	if(key==13){
		e.preventDefault();
		moves=-1;
		movespl=-1
		initialize();
		originalimage();
		timersec();
		start();
	}
    
});
function start(){
draw();
drawpl();
}
ctx.font = "30px Arial";
ctx.fillText("Hit Enter to start the game",55,230);
ctxpl.font = "30px Arial";
ctxpl.fillText("Hit Enter to start the game",55,230);
var resetbutton=document.getElementById("resetbutton");
resetbutton.addEventListener('click',resetFunction);
function resetFunction(){
	moves=-1;
	movespl=-1;
	myStopFunction();
	initialize();
		originalimage();
		timeLeft=300;
		timersec();
		start();
	
}
