
function largestOfFour(arr) {
    var newArr = [];
    for(i=0;i<arr.length;i++){
      newArr.push(Math.max.apply(null,arr[i]));
    }
    return newArr;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  
  // function largestOfFour(arr :Array<[number]>):Array<number> {
  //     let newArr = [];
  //     for (let i = 0; i < arr.length; i++) {
  //         newArr.push(Math.max.apply(null, arr[i]));
  //     }
  //     return newArr;
  // }
  // largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  