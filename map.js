var newArray = ["John", "James" , "Adam", "Sam", "Bob"];

function map(array, cbfunc){
 var newerArray = [];
 array.forEach(function(word){
  newerArray.push(cbfunc(word))
 })
return newerArray
}

console.log(map(newArray, function(word){
return word.toLowerCase();
}));