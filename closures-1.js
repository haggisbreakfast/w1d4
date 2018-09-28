function makeLoadedDie() {
 var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
    /* your code here */
 var counter = 0;
 return function() {
      /* your code here */
     return list[counter ++];
    }
  };
 var rollLoadedDie = makeLoadedDie();
  
  console.log(rollLoadedDie());  // 5
