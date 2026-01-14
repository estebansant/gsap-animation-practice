import gsap from 'gsap';

gsap.to('.box', {
    opacity: 1,
    rotation: 360,
    background: '#ff6f61',
    borderRadius: '50%',
    scale: 1.10,
    duration: 1.2,
    x:-200,
    y:200,
    delay: 0,
    ease: 'bounce',
    yoyo: true,
    repeat:-1,
    repeatDelay: 2,
})