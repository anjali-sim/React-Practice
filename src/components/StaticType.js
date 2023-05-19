// @flow
function calculateSum(a, b) {
    return a + b;
  }
  
  calculateSum(3, 4); // Works!
  
  // $ExpectError
  calculateSum(true, false); // Error!

  