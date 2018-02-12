function factorialize(num) {
    var a = 1;
    for(x = 0; x < num; x++){
      a = a * ( x + 1 );
    }
    return a;
  }
  
  factorialize(5);
  // function factorialize(num: number): number{
  //     let a = 1;
  //     for (let x = 0; x < num; x++) {
  //         a = a * (x + 1);
  //     }
  //     return a;
  // }
  // factorialize(5)