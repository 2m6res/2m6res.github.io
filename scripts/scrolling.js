gsap.registerPlugin(ScrollTrigger)

let lenis = new Lenis({
    wheelMultiplier: 3,
    touchMultiplier: 3,
    syncTouch: true,
    wrapper: document.getElementById("scrollable-content"),
    content: document.getElementById("scroll-length"),
    eventsTarget: window
})

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.scroll-length',
        start: 'top top',
        end: 'bottom bottom',
        markers: false,
        scrub: true
    }
});

tl.to('.profile-container', {
    transform: 'translateY(15vh) scale(300%)',
    opacity: 0,
    filter: 'blur(50px)'
})
  
lenis.on('scroll', (e) => {
    ScrollTrigger.refresh()
    console.log(e)
})
  
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
  
requestAnimationFrame(raf)