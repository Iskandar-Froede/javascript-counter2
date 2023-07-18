let count = 0;

function changeCount(num) {
  count += num;
  document.getElementById("count").innerHTML = count;
}

function resetCount() {
  document.getElementById("count").innerHTML = 0;
}