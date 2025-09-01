function trailingZeros(n) {
  n = parseInt(n, 10); // Ensure input is an integer
  let count = 0;

  // Count factors of 5, 25, 125, etc.
  while (n >= 5) {
    n = Math.floor(n / 5);
    count += n;
  }

  return count;
}

const input = prompt("Enter a number");
alert(trailingZeros(input));
