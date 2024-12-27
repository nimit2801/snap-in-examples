// write a function that returns the fibonacci series of a number

function fibonacci(n) {
  const firstNumber = 2; // Starting number
  const difference = 5; // Common difference
  const series = [];

  if (n <= 0) return [];

  for (let i = 0; i < n; i++) {
    series[i] = firstNumber + i * difference;
  }

  return series;
}

console.log(fibonacci(10)); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
