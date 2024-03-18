let n = 7;

for (let i = 2; i <= n; i++) {
  console.log(n % i !== 0 && i === n);
  if (n % i !== 0 && i === n) {
    return console.log("Not a prime number");
  }
}

console.log("Prime number");
