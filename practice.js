function makeIdGenerator() {
    var id = 0;
  
    // The following is the closure function
    return function() {
      // This inner function accesses and assigns the value of
      // the variable id, which was defined in the parent function
      id += 2;
      return id;
    }
  }
  
  // makeIdGenerator returns a function which is assigned to
  // the variable nextId
  var nextId = makeIdGenerator();
  
  console.log(nextId()); 
  console.log(nextId()); 
  console.log(nextId());
