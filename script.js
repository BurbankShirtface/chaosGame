/*

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const vertices = [
  { x: 400, y: 50 },
  { x: 100, y: 550 },
  { x: 700, y: 550 },
];

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let currentPoint = {
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
};

function drawPoint(point, color) {
  ctx.beginPath();
  ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function animate() {
  const randomVertex = vertices[Math.floor(Math.random() * 3)];
  currentPoint.x = (currentPoint.x + randomVertex.x) / 2;
  currentPoint.y = (currentPoint.y + randomVertex.y) / 2;

  const randomColor = getRandomColor();
  drawPoint(currentPoint, randomColor);
  requestAnimationFrame(animate);
}

animate();

*/
/*
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const vertices = [
  { x: 400, y: 50 },
  { x: 100, y: 550 },
  { x: 700, y: 550 },
];
let currentPoint = {
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
};
let animationId;

function getRandomColor() {
  // Function to generate random hex color
  // (same as in the previous response)
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function drawPoint(point, color) {
  // Function to draw a point with specified color
  // (same as in the previous response)
  ctx.beginPath();
  ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function animate() {
  const randomVertex = vertices[Math.floor(Math.random() * 3)];
  currentPoint.x = (currentPoint.x + randomVertex.x) / 2;
  currentPoint.y = (currentPoint.y + randomVertex.y) / 2;

  const randomColor = getRandomColor();
  drawPoint(currentPoint, randomColor);
  animationId = requestAnimationFrame(animate);
}

const startButton = document.getElementById("startButton");
startButton.addEventListener("click", () => {
  // Stop the current animation (if any)
  cancelAnimationFrame(animationId);

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Start the animation
  animate();
});

*/

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const vertices = [
  { x: 400, y: 50 },
  { x: 100, y: 550 },
  { x: 700, y: 550 },
];
let currentPoint = {
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
};
let animationId;
let isAnimating = false;

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function drawPoint(point, color) {
  ctx.beginPath();
  ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function animate() {
  const randomVertex = vertices[Math.floor(Math.random() * 3)];
  currentPoint.x = (currentPoint.x + randomVertex.x) / 2;
  currentPoint.y = (currentPoint.y + randomVertex.y) / 2;

  const randomColor = getRandomColor();
  drawPoint(currentPoint, randomColor);
  animationId = requestAnimationFrame(animate);
}

const toggleButton = document.getElementById("toggleButton");
const resetButton = document.getElementById("resetButton");

toggleButton.addEventListener("click", () => {
  if (isAnimating) {
    // Stop the animation
    cancelAnimationFrame(animationId);
    toggleButton.textContent = "Go!";
  } else {
    // Start the animation
    animate();
    toggleButton.textContent = "Stop";
  }
  isAnimating = !isAnimating;
});

resetButton.addEventListener("click", () => {
  // Stop the animation
  cancelAnimationFrame(animationId);

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Reset animation state and button text
  isAnimating = false;
  toggleButton.textContent = "Go!";
});
