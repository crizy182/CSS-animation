const $pelota = document.getElementById('pelota');

$pelota.animate(
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
