gsap.to(".wrapper", 2, {
    top: "-110%",
    ease: Expo.easeInOut,
    delay: 2.6
});

var tl = gsap.timeline();

var tl = new gsap.from(".name > div", 2, {
    opacity: 0,     
    y: 0,
    ease: Expo.easeInOut,
    delay: 4.2
}, 0.1);

var tl = new gsap.from(".social-links > a", 2, {
    opacity: 0,     
    y: 30,
    stagger: 0.2,
    ease: Expo.easeInOut,
    delay: 4.6
}, 0.1);

var tl = new gsap.from(".arrow-link > img", 2, {
    opacity: 0,     
    y: 30,
    ease: Expo.easeInOut,
    delay: 5
}, 0.1);