var Xclick = document.querySelector("nav i");
var menue = document.getElementById("menu");
var flag = 0;
Xclick.addEventListener("click",function( ) {
  if (flag == 0){
  menue.style.top = "0%"
  document.querySelector("nav h1").style.color = "#222";
  document.querySelector("nav #nav1 h3").style.color = "#222";
  document.querySelector("nav #nav1 i").style.color = "#222";
  flag = 1;
  }

else
{
    menue.style.top= "-100%"
    document.querySelector("nav h1").style.color = "#dadada";
    document.querySelector("nav #nav1 h3").style.color = "#dadada";
    document.querySelector("nav #nav1 i").style.color = "#dadada";
    flag = 0;
    }
})

// Main Page Animation
var tl = gsap.timeline();
tl.from("#page1 h1",{
  y:120,
  duration:0.7,
  opacity:0
})
.from("#pageD h2",{
  y:60,
  duration:0.6,
  opacity:0,
  delay:-0.2
})
.from("#pageD h3",{
  y:60,
  duration:0.6,
  opacity:0,
  delay:-0.4
})

gsap.to("#page2 img",{
 scale:0.99,
  scrollTrigger:{
    trigger:"#page2 img",
    scroller:"body",
    start:"top 70%",
    end:"top 50%",
    scrub:3
  }
})

gsap.from("#page2 h1",{
  y:60,
  duration:0.5,
  opacity:0,
  rotateX:"20 deg",
   scrollTrigger:{
     trigger:"#page2 h1",
     scroller:"body",
     start:"top 90%",
     end:"top 85%",
     scrub:5
   }
 })

 gsap.from("#page4 h1",{
  y:100,
  opacity:0,
   scrollTrigger:{
     trigger:"#page4 h1",
     scroller:"body",
     start:"top 70%",
     end:"top 65%",
     scrub:5
   }
 })

 gsap.from("#p4box #box-first",{
  y:100,
  opacity:0,
   scrollTrigger:{
     trigger:"#p4box #box-first",
     scroller:"body",
     start:"top 90%",
     end:"top 85%",
     scrub:5
   }
 })
 gsap.from("#p4box #box-secnd",{
  y:100,
  opacity:0,
   scrollTrigger:{
     trigger:"#p4box #box-secnd",
     scroller:"body",
     start:"top 90%",
     end:"top 85%",
     scrub:5
   }
 })
 gsap.from("#page5-content h1",{
  y:100,
  opacity:0,
   scrollTrigger:{
     trigger:"#page5-content",
     scroller:"body",
     start:"top 90%",
     end:"top 85%",
     scrub:5
   }
 })
 gsap.from("#page5-content p",{
  y:100,
  opacity:0,
   scrollTrigger:{
     trigger:"#page5-content p",
     scroller:"body",
     start:"top 90%",
     end:"top 85%",
     scrub:5
   }
 })

 gsap.from("#page5-content img",{
  rotate:360,
  repeat:-1,
  duration:3,
  ease:"power0.in"
 })

 gsap.from("#page6 h1",{
  y:100,
  opacity:0,
   scrollTrigger:{
     trigger:"#page6 h1",
     scroller:"body",
     start:"top 90%",
     end:"top 85%",
     scrub:5
   }
 })

 var slider1 = document.querySelectorAll("#page7 .slide1 h1");
 slider1.forEach(function(ele){
  gsap.from(ele,{
    transform:"translateX(0%)",
    duration:1,
    scrollTrigger:{
      trigger:"#page7",
      scroller:"body",
      scrub:3
    }
  })
 })

 var slider2 = document.querySelectorAll("#page7 .slide2 h1");
 slider2.forEach(function(ele){
  gsap.from(ele,{
    transform:"translateX(-75%)",
    duration:1,
    scrollTrigger:{
      trigger:"#page7",
      scroller:"body",
      scrub:3
    }
  })
 })


 gsap.from("#page8 h1",{
  y:100,
  opacity:0,
   scrollTrigger:{
     trigger:"#page8 h1",
     scroller:"body",
     scrub:3
   }
 })

 gsap.from("#page8 h2",{
  y:100,
  opacity:0,
   scrollTrigger:{
     trigger:"#page8 h2",
     scroller:"body",
     start:"top 90%",
     end:"top 85%",
     scrub:3
   }
 })

 gsap.from("#page8 #page9",{
  y:200,
  opacity:0,
  scrollTrigger:{
    trigger:"#page8 #page9",
    scroller:"body",
    start:"top 90%",
    end:"top 85%",
    scrub:3
  }
 })

 var left = document.getElementById("banana");
 var right =  document.getElementById("choco");

 var yes = document.getElementById("yes");
 yes.addEventListener("mousemove",function(dets){
  console.log(dets.x);
  left.style.left = (dets.x - 100) + "px";
  left.style.top = (dets.y - 500) + "px";
  left.style.opacity = "1";
 })

 var no = document.getElementById("no");
 no.addEventListener("mousemove",function(dets){
 right.style.left = (dets.x - 100) + "px";
 right.style.top = (dets.y - 500) + "px";
  right.style.opacity = "1";

   })

   yes.addEventListener("mouseleave",function(dets){
    left.style.opacity = "0";
   })
   no.addEventListener("mouseleave",function(dets){
    right.style.opacity = "0";
   })

   gsap.from("#page10 #album #l1",{
    y:200,
    opacity:0,
    scrollTrigger:{
      trigger:"#page10 #album #l1",
      scroller:"body",
      start:"top 90%",
      end:"top 87%",
      scrub:3
    }
   })

   gsap.from("#page10 #album #l2",{
    y:200,
    opacity:0,
    scrollTrigger:{
      trigger:"#page10 #album #l2",
      scroller:"body",
      start:"top 90%",
      end:"top 87%",
      scrub:3
    }
   })

   gsap.from("#page10 #album #l3",{
    y:200,
    opacity:0,
    scrollTrigger:{
      trigger:"#page10 #album #l3",
      scroller:"body",
      start:"top 95%",
      end:"top 93%",
      scrub:3
    }
   })