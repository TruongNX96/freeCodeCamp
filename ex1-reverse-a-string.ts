function reversString (str: string): string {
    let reverse = str.split('').reverse().join('');
    return reverse;
}
reversString('hello');