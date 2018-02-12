function factorialize(num) {
    var a = 1;
    for(x = 0; x < num; x++){
      a = a * ( x + 1 );
    }
    return a;
  }
  
  factorialize(5);