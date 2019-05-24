const $cuadrado = document.getElementById('cuadrado');
$cuadrado.addEventListener('animationend', event => {
  if (event.animationName === 'rebote') {
    $cuadrado.style.animationName = 'cuadrado, stairs, zoome';
    $cuadrado.style.animationDuration = '4s, 1s, 1s , 1s';
    $cuadrado.style.animationIterationCount = 'infinite';
  }

});
