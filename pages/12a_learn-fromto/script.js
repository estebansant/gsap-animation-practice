import gsap from "gsap";

const bars = document.querySelectorAll(".bar");

bars.forEach((bar, index) => {
    gsap.fromTo(bar, {
        sacelY: 0.4
    },{
        scaleY: 1.6,
        duration: 0.5,
        ease: "sine.inOut",
        repeat: -1,
        delay: index * 0.1,
        yoyo: true
    })
})