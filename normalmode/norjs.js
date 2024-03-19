var canvas=document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var canvast=document.getElementById("canvast");
var ctxt = canvast.getContext("2d");
var empty=36;
var moves=-1;
var timeLeft=200;
var myInterval;
var score;
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
var ar=[1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,0];
var im=[1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,0];
var empty;
function initialize(){
 ar=shuffle([1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,0]);
 im=shuffle([1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,0]);
for(var i=0;i<=36;i++){
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
    
	while(ar[7]==0||ar[8]==0||ar[9]==0||ar[10]==0||ar[13]==0||ar[14]==0||ar[15]==0||ar[16]==0||ar[19]==0||ar[20]==0||ar[21]==0||ar[22]==0||ar[25]==0||ar[26]==0||ar[27]==0||ar[28]==0)
	{
	 ar=shuffle([1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,0]);
	}
	ctxt.fillStyle="white";
	ctxt.fillRect(0,0,300,300);
	for(var x=0;x<6;x++){
    	for(var y=0;y<6;y++){
        var a,b;
		a=x-1;b=y-1;
		            if((a<4)&&(b<4)&&(a>-1)&&(b>-1)){
						console.log('a:'+a);
						console.log('b:'+b);
			        var textt="puzz";
                    z=x+6*y;
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
    
                      ctxt.fillRect(75*a,75*b,74,74);
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
    score=Math.floor(65000/moves);
	var mt=document.getElementById("messaget");
	mt.innerHTML="Your Score:"+score.toString();
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
	
	  im=shuffle([1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,0]);
		for(var i=0;i<=35;i++){
			if(im[i]==0)
				empty=i+1;
			
			
			}
		
		console.log(empty);
		
	 ctx.clearRect(0,0,450,450);
	  restart=0;
  }
        if(im[7]!=ar[7]||im[9]!=ar[9]||im[8]!=ar[8]||im[10]!=ar[10]||im[14]!=ar[14]||im[13]!=ar[13]||im[16]!=ar[16]||im[15]!=ar[15]||im[19]!=ar[19]||im[20]!=ar[20]||im[21]!=ar[21]||im[22]!=ar[22]||im[25]!=ar[25]||im[26]!=ar[26]||im[27]!=ar[27]||im[28]!=ar[28])
      {
          t=1;
          }
	console.log(im);
	console.log(ar);
	ctx.fillStyle="#f0f4f3";
	ctx.fillRect(0,0,450,450);
	ctx.fillStyle="#58746e";
	ctx.fillRect(74,74,302,302); 
	for(var i=0;i<6;i++){
    	for(var j=0;j<6;j++){
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
    z=x+6*y;
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
    ctx.fillRect(75*x+1,75*y+1,73,73);
       
}

function moveup() {
	ctx.clearRect(0,0,450,450);
	if(restart==1)
		{
		draw();
		return;
		}
    if(empty==31||empty==32||empty==33||empty==34||empty==35||empty==36){
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
    	empty=empty+6;
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
	if(empty==1||empty==2||empty==3||empty==4||empty==5||empty==6) {
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
    	empty=empty-6;
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
	
	if(empty==6||empty==12||empty==18||empty==24||empty==30||empty==36) {
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
	  if(empty==1||empty==7||empty==13||empty==19||empty==25||empty==31) {
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
		timeLeft=200;
		timersec();
		start();
	
}
