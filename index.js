
// get a refrence to the canvas and its context
var canvas = document.getElementById("canvas");
    // canvas.width  = window.innerWidth;
    // canvas.height = window.innerHeight;
    // console.log(canvas.width, canvas.height)

var ctx = canvas.getContext("2d");

var lastSpawn = -1;

// newly spawned circles start at Y=1
var spawnLineY = 1;

// spawn a new circle every 1 second = 1000ms
var spawnRate = 1000;

// set how fast the circles will fall
var spawnRateOfDescent = 1.0;

var hits = 0;
// this array holds all spawned circle
var circles = [];

function spawnRandomCircle() {
  var rnd     = Math.random()
  var colors  = ["#992FB7", "#54D0CE", "#665A83", "#F9A05E", "#47D7C4", "#F01F7A", "#E6005E", "#204664", "black", "white"]
  var delta   = .1;
  var color   = null;
  // cycle thru colors
  // if delta * index <= value, select that color and return
  // eg "#47D7C4" = 4 * .1 = .4 && > .3
  for(var index = 0 ; index < colors.length ; index++){
    var change =  (index * delta) + delta
    if(rnd <= change){
      color = colors[index]; 
      break
    }
  }

  var circle = new Circle(Math.random() * (canvas.width - 30) + 15, 
                spawnLineY, 
                color, 
                Math.floor(Math.random() * 100 + 10))

  circles.push(circle);
}

var Circle = function(x, y, color, radius) {
  this.x      = x
  this.y      = y
  this.color  = color
  this.radius = radius
}

Circle.prototype.isHitBy = function(x, y) {

  // Get distance of passed x,y from circle midpoint
  var distance = Math.sqrt(Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2));

  // If distance is less than radius, point is in circle
  return (distance <= this.radius);
}



canvas.addEventListener('click', function(e){
  var canvasBounds = canvas.getBoundingClientRect();
  var localX = e.pageX - canvasBounds.left;
  var localY = e.pageY - canvasBounds.top;
  var circle = null
  for(var i=0 ; i < circles.length ; i++){
    circle = circles[i]
    if(circle.isHitBy(localX, localY)) {
      hits++
      document.getElementById('hits').innerHTML= hits
      circles.splice(i, 1)
      break
    }
  }
})


function animate() {
  console.log('ani')
  // get the elapsed time
  var time = Date.now();


  // see if its time to spawn a new circle
  if (time > lastSpawn + spawnRate) {
    lastSpawn = time;
    spawnRandomCircle();
  }

  // request another animation frame
  requestAnimationFrame(animate);

  // clear the canvas so all circles can be
  // redrawn in new positions
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // draw the line where new circles are spawned
  ctx.beginPath();
  ctx.moveTo(0, spawnLineY);
  ctx.lineTo(canvas.width, spawnLineY);
  ctx.stroke();
  for (var i = 0; i < circles.length; i++) {
    var circle = circles[i];
    circle.y += spawnRateOfDescent;
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = circle.color;
    ctx.fill();

  }

}

animate();