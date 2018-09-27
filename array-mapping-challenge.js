
// Complete the following code for the assertion to pass. 
// The result should be an array of numbers corresponding 
// to the x-y pairs provided in the input array (ie: calculate z given x and y).

var input = [
    { x: 3, y: 4 },
    { x: 12, y: 5 },
    { x: 8, y: 15 }
  ];
  var result = input.map(function(input){
      return Math.sqrt(Math.pow(input.x, 2) + Math.pow(input.y, 2))
  });
  console.log(result);
  
  console.log(result[0] === 5);
  console.log(result[1] === 13);
  console.log(result[2] === 17);

//   const map1 = array1.map(x => x * 2);
// (x^2 + y^2 = z^2)
// var roots = numbers.map(Math.sqrt);