import gsap from "gsap";

const animation = () => {
    gsap.to(".demo .flex-center div", {
    delay: 0.8,
    stagger: 1.6,
    y: -300,
    scale: 1,
    duration: 0.6,
    ease: "power2.out",
    onComplete: () => {
        gsap.to(".demo .flex-center div", {
            y:0,
            delay:1.6,
            stagger: -1.6,
            duration:0.6,
            scale: 0.95,
            onComplete: () => {
                setTimeout(animation, 2500)
            }
        })
    },
})}

animation();