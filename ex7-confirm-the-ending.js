function confirmEnding(str, target) {
  return str.substr(-target.length) == target;
}
confirmEnding("Bastian", "n");

// function confirmEnding(str: string, target: string): boolean {
//   return str.substr(-target.length) == target;
// }
// confirmEnding("Bastian", "n");

