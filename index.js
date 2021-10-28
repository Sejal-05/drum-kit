document.addEventListener('keydown', function(event) {
    playInstrument(event.key);
    buttonAnimation(event.key);
});

var numberOfDrums = document.querySelectorAll(".btn").length;

for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    playInstrument(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}




function playInstrument( key ) {
    var soundToPlay = "";
    switch (key) {
        case 'A':
            soundToPlay = "sounds/boom.wav";
            break;
        case 'S':
            soundToPlay = "sounds/clap.wav";
            break;
        case 'D':
            soundToPlay = "sounds/hihat.wav";
            break;
        case 'F':
            soundToPlay = "sounds/kick.wav";
            break;
        case 'G':
            soundToPlay = "sounds/openhat.wav";
            break;
        case 'H':
            soundToPlay = "sounds/ride.wav";
            break;
        case 'J':
            soundToPlay = "sounds/snare.wav";
            break;
          case  'K':
            soundToPlay = "sounds/tink.wav";
            break;
          case 'L':
            soundToPlay = "sounds/tom.wav";
            break;
        default:
            console.log(key);
    }
    if (soundToPlay.length > 1) {
        var audio = new Audio(soundToPlay);
        audio.play();
    }
}

function buttonAnimation(currentKey){
  var active = document.querySelector('.' + currentKey);
  active.classList.add("playing");

  setTimeout(function() {
    active.classList.remove("playing");
  }, 100);
}
