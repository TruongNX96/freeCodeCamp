function titleCase(str: string): string {
    str = str.toLowerCase();
    let arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
        let first = arr[i][0].toUpperCase();
        arr[i] = arr[i].replace(arr[i][0], first);
    }
    return arr.join(' ');
}
titleCase("I'm a little tea pot");