const $cuadrado = document.getElementById('cuadrado');
$cuadrado.addEventListener('animationend', event => {
  if (event.animationName === 'rebote') {
    $cuadrado.style.animationName = 'cuadrado stairs';
    $cuadrado.style.animationDuration = '1s';
    $cuadrado.style.animationIterationCount = '10';
  }
  if (event.animationIterationCount === '9') {
    $cuadrado.style.animationName = 'cuadrado ,rebote';
    $cuadrado.style.animationDuration = '2s';
    $cuadrado.style.animationIterationCount = '20';
  }
});
