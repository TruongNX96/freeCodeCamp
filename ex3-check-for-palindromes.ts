
function palindrome(str: string): boolean {
    let reg = /[\W_]/g;
    str = str.toLowerCase().replace(reg, '');
    let newStr = str.split('').reverse().join('');
    return str === newStr;
}
palindrome("nerver odd or even");
