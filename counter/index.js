// Increase count
function increment() {
  let currentCount = document.getElementById("count-el").innerText;
  document.getElementById("count-el").innerText = parseInt(currentCount) + 1;
}

// Decrease count
function decrement() {
  let currentCount = document.getElementById("count-el").innerText;
  let newCount = parseFloat(currentCount) - 1;
  document.getElementById("count-el").innerText = newCount;
}


