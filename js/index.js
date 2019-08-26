
var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")
          canvas.width  = canvas.scrollWidth
          canvas.height = canvas.scrollHeight

var lastSpawn = -1
var spawnLineY = 1
var spawnRate = 1000
var spawnRateOfDescent = 3.0

var hits = 0
var score = 0 
var misses = 0
var missPoints = 50
var points = 0
var stopped = false
animate()

function settings(){
    var settings = document.getElementById('canvasSettings')
    var show = settings.style.display
    
    if(show == 'block'){
        stopped = false
        animate()
        settings.style.display = 'none'
    } else {
        stopped = true
        settings.style.display = 'block'
    }
}

