
function animate() {
    if(stopped) return
    var time = Date.now();
  

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
    ctx.shadowBlur = 10;
    ctx.shadowColor = "#999";
    ctx.stroke();
    for (var i = 0; i < circles.length; i++) {
      var circle = circles[i];
      circle.y += Math.round(spawnRateOfDescent);
      ctx.beginPath();
      ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fillStyle = circle.color;
      ctx.fill();
  
    }
  
  }