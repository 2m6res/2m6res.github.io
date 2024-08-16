const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger) 

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.container',
        start: 'top',
        end: 'bottom',
        scrub: true,
        markers: false
    }
})

tl.to('.profile-container', {
    transform: 'translate(-50%, 0) scale(80%)',
    filter: 'blur(7px)'
})