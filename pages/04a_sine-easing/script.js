import gsap from 'gsap';

const button = document.querySelector(".scroll-to-top");

let isFloating = false;

window.addEventListener('scroll', () => {
    if(window.scrollY > 400) {
        button.classList.add('show');

        if (!isFloating) {
            gsap.to(button, {
                y: -8,
                repeat:-1,
                yoyo:true,
                easing: "sine.out",
                duration: 1.5
            })

            isFloating = true
        }
    } else {
        button.classList.remove('show')
    }
})

button.addEventListener("mouseenter", () => {
    gsap.to(button, {scale: 1.1, duration: 0.2})
})

button.addEventListener("mouseleave", () => {
    gsap.to(button, {scale: 1, duration: 0.2})
})

button.addEventListener("click", () =>{
    window.scrollTo(0,0)
})