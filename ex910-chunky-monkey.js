function chunkArrayInGroups(arr, size) {
    var newArr = [];
    for (var i = 0; i < arr.length; i = i + size) {
        newArr.push(arr.slice(i, i + size));
    }
    return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "j", "l", "m", "n"], 4);
