
function findLongestWord(str) {
    var arr = str.split(' ');
    var max = 0;
    for (x = 0; x < arr.length; x++) {
        if (arr[x].length > max) {
            max = arr[x].length;
        }
    }
    return max;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

// function findLongestWord(str: string): number {
//     let arr = str.split('');
//     let max = 0;
//     for (let x = 0; x < arr.length; x++) {
//         if (arr[x].length > max) {
//             max = arr[x].length;
//         }
//     }
//     return max;
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");