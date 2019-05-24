const $pelota = document.getElementById('pelota');


const animation = $pelota.animate(
  [
    //from
    {
      transform: 'translateX(0)'
    },
    //to
    {
      transform: 'translate(500px)'
    }
  ],
  {
    duration: 1000,
    delay: 1000,
    direction: 'normal',
    easing: 'linear',
    iterations: Infinity,
    fill: 'forwards',
    iterationStart: 0.5
  }
);

const $playButton = document.getElementById('play');
const $pauseButton = document.getElementById('pause');
const $stopButton = document.getElementById('stop');
const $reverseButton = document.getElementById('reverse');

$playButton.addEventListener('click', event => {
  animation.play();
});
$pauseButton.addEventListener('click', event => {
  animation.pause();
});
$stopButton.addEventListener('click', event => {
  animation.cancel();
});
$reverseButton.addEventListener('click', event => {
  animation.reverse();
});
