
canvas.addEventListener('click', function(e){
    var canvasBounds = canvas.getBoundingClientRect();
    console.log(canvasBounds.left, canvasBounds.top)
    var localX = e.pageX - canvasBounds.left;
    var localY = e.pageY - canvasBounds.top;
    var circle = null
    var isHit  = false
    for(var i=0 ; i < circles.length ; i++){
      circle = circles[i]
      if(circle.isHitBy(localX, localY)) {
        hits++
        circles.splice(i, 1)
        isHit = true
        points = circle.getHitPoints()
        score += points
      } 
    }
    if(!isHit){
      score -= missPoints
      points = -missPoints
      misses++

    }
    document.getElementById('points').innerHTML= points
    document.getElementById('hits').innerHTML= hits
    document.getElementById('misses').innerHTML= misses
    document.getElementById('score').innerHTML= score  
  })