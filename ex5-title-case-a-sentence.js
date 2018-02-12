function titleCase(str) {
    str = str.toLowerCase();
    var arr = str.split(' ');
    for (i = 0; i < arr.length; i++) {
        first = arr[i][0].toUpperCase();
        arr[i] = arr[i].replace(arr[i][0], first);
    }
    return arr.join(' ');
}
titleCase("I'm a little tea pot");