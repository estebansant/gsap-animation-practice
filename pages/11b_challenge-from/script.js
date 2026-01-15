import gsap from "gsap";

const card = document.getElementById("card");

// Es necesario el flipped (controlar este estado) para que la carta no haga flickering durante el efecto de la transicion si uno se para en una de las esquinas con el mouse.
let flipped = false;

card.addEventListener("mouseenter", () => {
  if (!flipped) {
    gsap.from(card, {
      rotationY: 0,
      duration: 0.4,
      ease: "sine.inOut",
    });
    gsap.to(card, {
      rotationY: 180,
      duration: 0.4,
      ease: "sine.inOut",
    });
    flipped = true;
  }
});

card.addEventListener("mouseleave", () => {
  if (flipped) {
    gsap.from(card, {
      rotationY: 180,
      duration: 0.4,
      ease: "sine.inOut",
    });
    gsap.to(card, {
      rotationY: 0,
      duration: 0.4,
      ease: "sine.inOut",
    });
    flipped = false;
  }
});