
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
var playerAccelerationX;
var playerAccelerationY;


//var enemyPositionX;
//var enemyPositionY;

// Event Listeners
window.addEventListener('deviceorientation', Orientation);


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
	playerAccelerationX = 0;
	playerAccelerationY = 0;
	
	//enemyPositionX = [0,0,0,0,0,0,0,0,0,0]
	//enemyPositionY = [0,0,0,0,0,0,0,0,0,0]
	
	body.beginPath();	
	body.drawImage(level,0,0,canvas.width,canvas.height);
	
	body.beginPath();
	body.drawImage(otherAssets[0],playerPositionX[0],playerPositionY[0],canvas.width/10,canvas.width/10);	
	
	body.beginPath();
	body.drawImage(otherAssets[1],playerPositionX[1],playerPositionY[1],canvas.width/10,canvas.width/10);	
}




function Orientation(event) {
	
	playerAccelerationX = event.beta;
	playerAccelerationY = -event.gamma;
	playerPositionX[1] = playerPositionX[1] + playerAccelerationX;
	playerPositionY[1] = playerPositionY[1] + playerAccelerationY;
	
	
	
	
	
	
	
	// Because we don't want to have the device upside down
	// We constrain the x value to the range [-90,90]
	if (playerPositionX[1] >  90) {playerPositionX[0] =  90};
	if (playerPositionX[1] < -90) {playerPositionX[0] = -90};

	// To make computation easier we shift the range of x and y to [0,180]
	playerPositionX[1] += 90;
	playerPositionY[1] += 90;
	
	body.beginPath();
	body.clearRect(0,0,canvas.width,canvas.height);
	body.drawImage(level,0,0,canvas.width,canvas.height);
	
	body.beginPath();
	body.drawImage(otherAssets[0],playerPositionX[0],playerPositionY[0],canvas.width/10,canvas.width/10);	
	
	body.beginPath();
	body.drawImage(otherAssets[1],playerPositionX[1],playerPositionY[1],canvas.width/20,canvas.width/20);
}






