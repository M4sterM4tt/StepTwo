
// Step Two

// NEED TO REFRENCE THIS https://developer.mozilla.org/en-US/docs/Web/API/Detecting_device_orientation
// NEED TO REFRENCE THIS https://mobiforge.com/design-development/html5-mobile-web-canvas
// NEED TO REFRENCE THIS https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Managing_screen_orientation

// Canvas Variables 
var canvas; 
var body;

// Image Variables
var level; 
var otherAssets;

// Location Variables
var playerPositionX;
var playerPositionY;
var playerVelocityX;
var playerVelocityY;
var playerAccelerationX;
var playerAccelerationY;


//var enemyPositionX;
//var enemyPositionY;


window.onload = function() {
	
	// Canvas and Graphics context
	canvas = document.getElementById("canvas");
    canvas.width = (9/10)*window.innerWidth;
    canvas.height = (9/10)*window.innerHeight;
	body = canvas.getContext("2d");
	
	
	// Images and variables for Images
	level = document.getElementById("levelBase");
	otherAssets = [document.getElementById("playerGoal"), document.getElementById("playerBall"), document.getElementById("enemyHole"), document.getElementById("enemyBall")];
	
	// Location Variables
	playerPositionX = [canvas.width/4,canvas.width/2];
	playerPositionY = [canvas.width/4,canvas.width/2];
	playerVelocityX = 0;
	playerVelocityY = 0;
	playerAccelerationX = 0;
	playerAccelerationY = 0;
	
	//enemyPositionX = [0,0,0,0,0,0,0,0,0,0]
	//enemyPositionY = [0,0,0,0,0,0,0,0,0,0]
	
	body.beginPath();	
	body.drawImage(level,0,0,canvas.width,canvas.height);
	
	body.beginPath();
	body.drawImage(otherAssets[0],playerPositionX[0],playerPositionY[0],canvas.width/20,canvas.width/20);	
	
	body.beginPath();
	body.drawImage(otherAssets[1],playerPositionX[1],playerPositionY[1],canvas.width/20,canvas.width/20);	
}


function Orientation(event) {
	
	
	if (playerAccelerationX/playerAccelerationX == event.beta/event.beta) {
		playerAccelerationX = (1/40)*event.beta;
	}
	else {
		playerAccelerationX = (1/80)*event.beta;
	}
	
	
	if (playerAccelerationY/playerAccelerationY == event.gamma/event.gamma) {
	playerAccelerationY = (-1/40)*event.gamma;
	}
	else {
		playerAccelerationY = (-1/80)*event.gamma;
	}
	
	
	playerVelocityX = playerVelocityX + playerAccelerationX;
	playerVelocityY = playerVelocityY + playerAccelerationY;
	playerPositionX[1] = playerPositionX[1] + (1/4)*playerVelocityX;
	playerPositionY[1] = playerPositionY[1] + (1/4)*playerVelocityY;
	
	
	if (playerPositionX[1] >= playerPositionX[0] + canvas.width/20 && playerPositionX[1] <= playerPositionX[0] || playerPositionY[1] >= playerPositionY[0] + canvas.width/20 && playerPositionY[1] <= playerPositionY[0]) {
		alert ("GOALLLLLLL!!!!!!!")
		playerPositionX[0] = canvas.width - playerPositionX[0];
		playerPositionY[0] = canvas.height - playerPositionY[0];
	}
	
	
	if (playerPositionX[1] >  canvas.width - (1/20)*canvas.width) {
		playerPositionX[1] =  canvas.width - (1/20)*canvas.width;
		playerVelocityX =  (-1/4)*playerVelocityX;
		playerVelocityY =  (-1/4)*playerVelocityY;
	}
	else if (playerPositionX[1] < 0) {
		playerPositionX[1] =  0;
		playerVelocityX =  (-1/4)*playerVelocityX;
		playerVelocityY =  (-1/4)*playerVelocityY;
	}
	
	
	if (playerPositionY[1] >  canvas.height - (1/10)*canvas.height) {
		playerPositionY[1] =  canvas.height - (1/10)*canvas.height;
		playerVelocityX =  (-1/4)*playerVelocityX;
		playerVelocityY =  (-1/4)*playerVelocityY;
	}
	else if (playerPositionY[1] < 0) {
		playerPositionY[1] =  0;
		playerVelocityX =  (-1/4)*playerVelocityX;
		playerVelocityY =  (-1/4)*playerVelocityY;
	}
	
	
	body.beginPath();
	body.clearRect(0,0,canvas.width,canvas.height);
	body.drawImage(level,0,0,canvas.width,canvas.height);
	
	body.beginPath();
	body.drawImage(otherAssets[0],playerPositionX[0],playerPositionY[0],canvas.width/20,canvas.width/20);	
	
	body.beginPath();
	body.drawImage(otherAssets[1],playerPositionX[1],playerPositionY[1],canvas.width/20,canvas.width/20);
	
	
}


function Movement(event) {

	playerPositionX[1] = playerPositionX[1] + (1/4)*playerVelocityX;
	playerPositionY[1] = playerPositionY[1] + (1/4)*playerVelocityY;
	
	
	if (playerPositionX[1] >= playerPositionX[0] + canvas.width/20 && playerPositionX[1] <= playerPositionX[0] || playerPositionY[1] >= playerPositionY[0] + canvas.width/20 && playerPositionY[1] <= playerPositionY[0]) {
		alert ("GOALLLLLLL!!!!!!!")
		playerPositionX[0] = canvas.width - playerPositionX[0];
		playerPositionY[0] = canvas.height - playerPositionY[0];
	}
	
	
	if (playerPositionX[1] >  canvas.width - (1/20)*canvas.width) {
		playerPositionX[1] =  canvas.width - (1/20)*canvas.width;
		playerVelocityX =  (-1/4)*playerVelocityX;
		playerVelocityY =  (-1/4)*playerVelocityY;
	}
	else if (playerPositionX[1] < 0) {
		playerPositionX[1] =  0;
		playerVelocityX =  (-1/4)*playerVelocityX;
		playerVelocityY =  (-1/4)*playerVelocityY;
	}
	
	
	if (playerPositionY[1] >  canvas.height - (1/10)*canvas.height) {
		playerPositionY[1] =  canvas.height - (1/10)*canvas.height;
		playerVelocityX =  (-1/4)*playerVelocityX;
		playerVelocityY[1] =  (-1/4)*playerVelocityY;
	}
	else if (playerPositionY[1] < 0) {
		playerPositionY[1] =  0;
		playerVelocityX =  (-1/4)*playerVelocityX;
		playerVelocityY[1] =  (-1/4)*playerVelocityY;
	}
	
	
	body.beginPath();
	body.clearRect(0,0,canvas.width,canvas.height);
	body.drawImage(level,0,0,canvas.width,canvas.height);
	
	body.beginPath();
	body.drawImage(otherAssets[0],playerPositionX[0],playerPositionY[0],canvas.width/20,canvas.width/20);	
	
	body.beginPath();
	body.drawImage(otherAssets[1],playerPositionX[1],playerPositionY[1],canvas.width/20,canvas.width/20);
	

}


// Event Listeners
window.addEventListener('deviceorientation', Orientation);
window.addEventListener(event.beta <= 1 && event.beta >= -1 || event.gamma <= 1 && event.gamma >= -1, Movement);