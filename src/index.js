const square = document.querySelector(".cuadrado");
const text = document.querySelector("h2");

anime({
  targets: square,
  width: "400px",
  height: "400px",
  duration: 2000,
  easing: "easeInOutQuad",
  loop: true

});

anime({
  targets: text,
  fontSize: "32px",
  duration: 2000,
  easing: "easeInOutQuad",
  loop: true
});

anime({
  targets: circle,
  rotate: "360deg",
  duration: 3000,
  loop: true,
  easing: "linear",
  backgroundColor: "#FFC0CB"

});
