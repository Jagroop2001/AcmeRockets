
var tl = gsap.timeline();

tl.from("header" , {
    opacity:0,
    y:-20,
    delay:1,
    duration:0.8
})
tl.from("header h1" , {
    opacity:0,
    x:-20,
    duration:0.5
})
tl.from("nav" , {
    opacity:0,
    x:-20,
    duration:0.5,
})

tl.from("#hero h2" , {
    opacity:0,
    x:-20,
    duration:0.5,
})

tl.from("#hero p" , {
    opacity:0,
    x:20,
    duration:0.5,
})
tl.from("#hero img" , {
    scale:0,
    y:20,
    duration:0.5
})

tl.from("#hero img" , {
    y:10,
    yoyo:true,
    repeat:-1,
});

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);