var students = [
    { id: 1, name: "bruce",    age: 40 },
    { id: 2, name: "zoidberg", age: 22 },
    { id: 3, name: "alex",     age: 22 },
    { id: 4, name: "alex",     age: 30 }
  ];
  
  function comparator(left, right){
      if(left.name < right.name){
          return -100;
      }
      if(left.name > right.name){
          return 5;
      }
      if(left.age > right.age){
          return - .7;
      }
      if(left.age < right.age){
          return 42;
      }
      return 0;
  
  }
  
  var result = students.sort(comparator);
  
  console.log(result);