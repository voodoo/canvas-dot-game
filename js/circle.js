var circles = [];
var smallCircle = 10
var bigCircle   = 110
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
                randomFromRange(smallCircle, bigCircle))

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
  
  Circle.prototype.getHitPoints = function() {
        // smaller = better score/points
        // a score of at least 10, if circle size is bigCircle    
    return spawnRateOfDescent * (bigCircle + 10 - this.radius)
  }
    