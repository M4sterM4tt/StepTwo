
// Step Two
// NEED TO REFRENCE THIS https://developer.mozilla.org/en-US/docs/Web/API/Detecting_device_orientation
// NEED TO REFRENCE THIS https://mobiforge.com/design-development/html5-mobile-web-canvas
// NEED TO REFRENCE THIS https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Managing_screen_orientation

// Canvas Variables 
var canvas; 
var body;

// Image Variables
var Level; 
var playerImages;


// Location Variables
var playerImagesX;
var playerImagesY;

// Rules
window.screen.lockOrientation('landscape');

// Event Listeners
window.addEventListener('deviceorientation', handleOrientation);


window.onload = function() {
	
	// Canvas and Graphics context
	canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
	body = canvas.getContext("2d");
	
	
	// Images and variables for Images
	Level = document.getElementById("levelBase");
	playerImages = [document.getElementById("playerGoal"), document.getElementById("playerBall")];
	
	
	// Location Variables
	playerImagesX = [canvas.width/4,canvas.width/2]
	playerImagesY = [canvas.width/4,canvas.width/2]
	
	
	body.beginPath();	
	body.drawImage(Level,0,0,canvas.width,canvas.height);
	
	body.beginPath();
	body.drawImage(playerImages[1],playerImagesX[1],playerImagesY[1],canvas.width/10,canvas.width/10);	
	
	body.beginPath();
	body.drawImage(playerImages[0],playerImagesX[0],playerImagesY[0],canvas.width/10,canvas.width/10);	
}




function handleOrientation(event) {
	playerImagesX[1] = event.gamma;  // In degree in the range [-180,180]
	playerImagesY[1] = event.beta; // In degree in the range [-90,90]

	// Because we don't want to have the device upside down
	// We constrain the x value to the range [-90,90]
	if (playerImagesX[1] >  90) {playerImagesX[0] =  90};
	if (playerImagesX[1] < -90) {playerImagesX[0] = -90};

	// To make computation easier we shift the range of x and y to [0,180]
	playerImagesX[1] += 90;
	playerImagesY[1] += 90;
	
	body.beginPath();
	body.clearRect(0,0,canvas.width,canvas.height);
	body.drawImage(Level,0,0,canvas.width,canvas.height);
	
	body.beginPath();
	body.drawImage(playerImages[1],playerImagesX[1],playerImagesY[1],canvas.width/20,canvas.width/20);
	
	body.beginPath();
	body.drawImage(playerImages[0],playerImagesX[0],playerImagesY[0],canvas.width/10,canvas.width/10);	
}






