var slider = document.getElementById("rangeOfDescent");
var output = document.getElementById("range");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  spawnRateOfDescent = this.value
  output.innerHTML = this.value;
  console.log(spawnRateOfDescent)
}