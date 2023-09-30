let title = document.querySelector("title_typewriter");
let subtitle = document.querySelector("subtitle_typewriter");
let paragraph = document.querySelector("paragraph_typewriter");

let my_name ="I am Rahmah Alhajjaji";
let my_nickname = "I am also known as 'Rose'";
let my_job = "I am a Software Developer";
let speed = 100;
let index;

function typewritter_effect() {
    if (index < my_name.length) {
      title.innerHTML += my_name.slice(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
typewritter_effect();