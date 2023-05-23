canvas=document.getElementById("my_canvas"); 
ctx=canvas.getContext("2d");
car_height=100;
car_width= 75;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

car_x=5;
car_y=225;

function add() {
	background_imgT=new Image();
	background_imgT.onload=uploadBackground;
	background_imgT.src=background_image;

	car_imgT=new Image();
	car_imgT.onload=uploadgreencar;
	car_imgT.src=greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgT,0,0,canvas.width,canvas.height);


}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
ctx.drawImage(car_imgT,car_x,car_y,car_width,car_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
if(car_y>=0){
	car_y=car_y-10;
	uploadBackground();
	uploadgreencar();
}}

function down()
{if(car_y<=300){
car_y=car_y+10;
uploadBackground();
uploadgreencar();
}
	//Define function to move the car downward
}

function left()
{if(car_x>=0){
	car_x=car_x-10;
	uploadBackground();
	uploadgreencar();	
}
	}

function right()
{if(car_x<=700){
	car_x=car_x+10;
	uploadBackground();
	uploadgreencar();}
}
