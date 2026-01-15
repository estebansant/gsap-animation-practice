import gsap from "gsap";

gsap.set(".gsap-box", {
    opacity: 0,
    scale: 1.5,
    y: -100,
    x: -100
})

gsap.to('.gsap-box', {
    delay: 0.5,
    opacity: 1,
    y:0,
    x:0,
    duration: 0.6,
    scale: 1,
    ease: "expot.out"
})