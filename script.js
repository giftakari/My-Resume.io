// Work Experience Icon
function chargebattery() {
  let charging;
  charging = document.getElementById("charging");
  charging.innerHTML = "&#xf244;";
  setTimeout(function() {
    charging.innerHTML = "&#xf243;";
  }, 1000);
  setTimeout(function() {
    charging.innerHTML = "&#xf242;";
  }, 2000);
  setTimeout(function() {
    charging.innerHTML = "&#xf241;";
  }, 3000);
  setTimeout(function() {
    charging.innerHTML = "&#xf240;";
  }, 4000);
}
chargebattery();
setInterval(chargebattery, 5000);

// Education Icon

function openfolder() {
  let edu;
  edu = document.getElementById("education-icon");
  edu.innerHTML = "&#xf114;";
  setTimeout(function() {
    edu.innerHTML = "&#xf115;";
  }, 1000);
}
openfolder();
setInterval(openfolder, 2000);

// Init On DOM Load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}
