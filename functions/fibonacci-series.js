// write a function that returns the fibonacci series of a number

function fibonacci(n) {
  const series = [2, 1];

  if (n <= 0) return [];
  if (n === 1) return [2];

  for (let i = 2; i <= n; i++) {
    series[i] = series[i - 1] + series[i - 2];
  }

  return series;
}

console.log(fibonacci(10)); // [2, 1, 3, 4, 7, 11, 18, 29, 47, 76, 123]
