

var unit = Math.round( screen.width / 16 );
var availHeight, availWidth;
var windowsList = [];

var goButton = document.querySelector("#go")
var startBapple = document.querySelector("#bapple")
var closeWindows = document.querySelector("#close")
goButton.onclick = function(){
	startBapple.disabled = false;
	var bx = Math.round( screen.width  / 2 - unit / 2 );
	var by = Math.round( screen.height / 2 - unit / 2 );
	var num = 0;
	
	var ball = window.open( "black.html", "1", "top="+ by +",left="+ bx +",width="+ unit +",height="+ unit +",location=no,menubar=no,scrollbars=no,status=no,toolbar=no" );
	windowsList.push(ball)
	availHeight = ball.screen.availHeight;
	availWidth = ball.screen.availWidth;
	ball.resizeTo( unit, unit );
	ball.focus()	
	ball.moveTo(0,0);

var columns = 15;
var rows = 8;
var width = ball.outerWidth;
var height = ball.outerHeight;
var totalNum = columns*rows
var point_list = [];

for (let i=0; i<rows; i++){

for (let j=0; j<columns; j++){

point_list.push([width*j, height*i])
}
}
	var i = 2
	function windowLoop(){
	  setTimeout(function() {   
			let clone_ball = window.open( "black.html", i.toString(), "top="+ by +",left="+ bx +",width="+ unit +",height="+ unit +",location=no,menubar=no,scrollbars=no,status=no,toolbar=no" );
			windowsList.push(clone_ball)
			clone_ball.resizeTo( unit, unit );
			clone_ball.focus()	
			clone_ball.moveTo(point_list[i-1][0], point_list[i-1][1]);	
		i++;
		if (i <= totalNum) {   
		//if (i <= 5) {      
		  windowLoop();        
		}       
		
	  }, 250)			
	}
	windowLoop();        
	}
	

startBapple.onclick = function(){
startBapple.disabled = true;
startBapple.textContent = "Bad Apple will start in 1 minute. Please wait...";	
for (let i=0; i<windowsList.length; i++) {
	windowsList[i].postMessage(new Date(new Date().getTime() + 60000).toString());
	windowsList[i].focus()	
}

}


closeWindows.onclick = function(){
for (let i=0; i<windowsList.length; i++) {
	windowsList[i].close();	
}	
}
	// setTimeout(animate, 1000);	

	
	// var posX = 0;
	// var posY = 0;
	
	// function animate() {
	// ball.moveTo(posX,posY);
	// var rightWin = ball.screenX + ball.outerWidth;
	// var bottomWin = ball.screenY + ball.outerHeight;
	// console.log(`x: ${rightWin} y: ${bottomWin}`);
	// if (rightWin == availWidth) {
		// console.log("hit bottom side");
	// }
	// if (bottomWin == availHeight) {
		// console.log("hit right side");
	// }	
	// posX += 100;
	// posY += 100;
	// setTimeout(animate, 250);	
	// }
