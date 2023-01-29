function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }
// Arrow Function
  const double = arr => arr.ma(val => val * 2);
  

  function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }
// Arrow function
  const squareAndFindEvens = numbers => numbers.map(val => val ** 2).filter(square => square % 2 === 0);