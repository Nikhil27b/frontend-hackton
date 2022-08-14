import * as vanillaTilt from "https://cdn.skypack.dev/vanilla-tilt@1.7.0";

VanillaTilt.init(document.querySelectorAll(".testi-card"), {
  max: 30,
  speed: 800,
  glare: true,
  "max-glare": 1.5,
});
