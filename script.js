const btn = document.querySelector("button");
const fliper = document.getElementById("fliper");

btn.addEventListener("click", function () {
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);

  // rgb(255, 105, 180);
  const rgb = "rgb(" + red + "," + green + "," + blue + ")";

  fliper.style.backgroundColor = rgb;
});
