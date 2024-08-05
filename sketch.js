
// Declare variable to store audio player
let audioPlayer;

function setup() {
  // Remove canvas
  noCanvas();

  audioPlayer = createAudio('audio.mp3');

  audioPlayer.attribute(
    'aria-description',
    'The playback speed of this audio player is controlled by the position of the mouse. The further to the right the mouse is, the faster the audio will play.'
  );
  audioPlayer.showControls();
}

function draw() {
  // Set playback speed to 1-2x normal based on mouse position
  audioPlayer.speed(1 + mouseX / windowWidth);
}