const pinedList = document.querySelector(".pined-list");
const pinedInner = document.querySelector(".pined-inner");

gsap.to(pinedList, {
  x: -pinedList.clientWidth + pinedInner.clientWidth,
  scrollTrigger: {
    trigger: ".pined",
    start: "top top",
  
    pin: true,
    scrub: 1
  }
});



