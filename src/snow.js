// window.onload = function() {

//   // get the canvas and context
//   var canvas = document.getElementById("sky");
//   var context = canvas.getContext("2d");

//   // set window dimensions
//   var width = window.innerWidth;
//   var height = window.innerHeight;
//   canvas.width = width;
//   canvas.height = height;

//   // generate snowflakes
//   var maxFlakes = 50;
//   var flakes = [];
//   for (var i = 0; i < maxFlakes; i++) {
//     flakes.push({
//       x: Math.random() * width,
//       y: Math.random() * height,
//       r: Math.random() * 2 + 1,   // r = radius; min of 2px and max of 7px
//       d: Math.random() + 1        // d = density; how quickly flakes will fall
//     })
//   }

//   // draw flakes on screen
//   function drawFlakes() {
//     context.clearRect(0, 0, width, height);
//     context.fillStyle = "white"
//     context.beginPath();
//     for (var i = 0; i < maxFlakes; i++) {
//       var flake = flakes[i];
//       context.moveTo(flake.x, flake.y);
//       context.arc(flake.x, flake.y, flake.r, 0, Math.PI*2, true);
//     }
//     context.fill();
//     moveFlakes();
//   }

//   // animate flakes
//   var angle = 0;
//   function moveFlakes() {
//     angle += 0.01;
//     for (var i = 0; i < maxFlakes; i++) {
//       var flake = flakes[i];
//       // update x and y coordinates of each flake
//       flake.y += Math.pow(flake.d, 2) + .25;
//       flake.x += Math.sin(angle) * 2;

//       // if flake reaches bottom, spawn new at the top
//       if (flake.y > height) {
//         flakes[i] = {
//           x: Math.random() * width,
//           y: 0,
//           r: flake.r,
//           d: flake.d
//         }
//       }
//     }
//   }

//   // call draw every 25ms
//   setInterval(drawFlakes, 15);


// }