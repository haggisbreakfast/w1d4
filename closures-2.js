var countdownGenerator = function (x) {
 return function() {
  return x--;
 }
};

var countdown = countdownGenerator(3);
console.log(countdown())
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
// countdown(); // Rockets already gone, bub!