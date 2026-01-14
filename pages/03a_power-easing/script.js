import gsap from 'gsap';

gsap.to(".btn", {
    ease: "power4.out",
    duration: 0.4,
    x:200
})

gsap.to(".toast", {
    ease: "power2.in",
    duration: 0.7,
    x:100
})

gsap.to(".card", {
    ease: "power3.inOut",
    duration: 0.7,
    x:100
})