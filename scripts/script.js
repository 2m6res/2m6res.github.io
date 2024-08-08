const img = document.querySelector("img");
img.ondragstart = () => {
  return false;
};

gsap.registerPlugin(ScrollTrigger) 

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.container',
        start: '10%',
        end: 'bottom',
        scrub: true,
        markers: false
    }
})

tl.to('.container', {
    transform: 'translate(-50%, 0) scale(80%)',
    filter: 'blur(7px)'
})


const lenis = new Lenis({
    wheelMultiplier: 9999,
    touchMultiplier: 9999
})

lenis.on('scroll', (e) => {
  console.log(e)
})



function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)