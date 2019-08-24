(function() {
  
  var shape    = document.querySelector("#shape");
  var yourTime = document.querySelector(".your-time");
  var start    = new Date().getTime();

  function appear() {
    shape.style.display = "block";
    start = new Date().getTime();
  }

  function randomColor() {
    var letters = "0123456789ABCDEF";
    var color 	= "#";

    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  setTimeout(appear, 1500);

  function animate() {
    this.style.display = "none";

    var end = new Date().getTime();
    var timeTaken = ((end - start) / 1000) + "s";
    var size = Math.random() * 400;

    yourTime.innerHTML = timeTaken;

    this.style.backgroundColor = randomColor();
    this.style.top             = (Math.random() * 300) + "px";
    this.style.left            = (Math.random() * 300) + "px";

    this.style.width  = size + "px";
    this.style.height = size + "px";

    this.classList.toggle("circle");
    setTimeout(appear, 2000);
  }

  shape.onclick = animate;
  
})();