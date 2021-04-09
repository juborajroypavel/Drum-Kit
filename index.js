targetSelectorLength = document.querySelectorAll("button.drum").length;

for (var i=0; i<targetSelectorLength; i++){
  document.querySelectorAll("button")[i].addEventListener("click", function(){
    var buttonInnerText = this.textContent;
    makeSound(buttonInnerText);
    buttonAnimation("." + buttonInnerText);

  });
}




function makeSound(key){

  switch(key){

    case "w":
    var audio1 = new Audio("sounds/tom-1.mp3");
    audio1.play();
    break;

    case "a":
    var audio2 = new Audio("sounds/tom-2.mp3");
    audio2.play();
    break;

    case "s":
    var audio3 = new Audio("sounds/tom-3.mp3");
    audio3.play();
    break;

    case "d":
    var audio4 = new Audio("sounds/tom-4.mp3");
    audio4.play();
    break;

    case "j":
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
    break;

    case "k":
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
    break;

    case "l":
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
    break;
}
}

document.addEventListener("keypress", function(event){
  makeSound(event.key);
  buttonAnimation("."+ event.key);
});




function buttonAnimation(currentKey){
  document.querySelector(currentKey).classList.toggle("pressed");
  setTimeout(function(){document.querySelector(currentKey).classList.toggle("pressed");}, 200);
}
