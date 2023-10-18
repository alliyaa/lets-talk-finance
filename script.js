 var textWrapper = document.querySelector('.title');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

 anime.timeline({loop:true})
   .add({
     targets: '.title .letter',
     translateX: [40,0],
     translateZ: 0,
     opacity: [0,1],
     easing: "easeOutExpo",
     duration: 1200,
     delay: (el, i) => 500 + 30 * i
   }).add({
     targets: '.title .letter',
     translateX: [0,-30],
     opacity: [1,0],
     easing: "easeInExpo",
     duration: 1100,
     delay: (el, i) => 100 + 30 * i
   });
  

// var submit= $('.submit');
// var empty= $('.empty');

// submit.on("click",message)

// function message (){
//   empty.append ("Thank you for submitting! We will get back to you soon!")
// }

