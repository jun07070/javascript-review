
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var a = 3
var b =21
var Name = "Jun"

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  

	console.log(b%a)
	console.log(Name+b)
	console.log(Name.length)
	console.log(Name.toUpperCase())
	console.log(Name.toLowerCase())
	if(a>b){
		console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')

	}else{
		console.log('eeeeeee')
	}
	if(2>4){
		console.log('oiuytfrgdfru')
	}
	else if(0===0){
		console.log("	QWASEDRTFGVLFD")
	}
	var r =Math.round(random(1,2))
	switch(r){
		case 1:
			console.log("HALLO")
			break;
		case 2:
			console.log("goodbye")
			break;
	}
	for(var i= 0;i<=10;i+=2){
		console.log(i)
	}
	var why=19 
			
	while(why<50){
		console.log(why)
		why+=4
	}
	var array= [1093,309,398,33,90]
	console.log(array.length)
	console.log(array[0])
	area()
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites(); 
 
}
function area(){
	var ab =210
	console.log(ab*220)
	
}


