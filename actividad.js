
function calcularFibonacci(n) {
  let fibSeries = [0, 1];
  for (let i = 2; i < n; i++) {
    fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
  }
  return fibSeries.slice(0, n);
}

function main() {
  let num;
  do {
    num = prompt("Por favor, ingresa un número:");
    num = parseInt(num);
  } while (isNaN(num));

  const fibonacciSeries = calcularFibonacci(num);

  console.log("Serie de Fibonacci:", fibonacciSeries.join(", "));
}
main();