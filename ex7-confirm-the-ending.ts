function confirmEnding(str: string, target: string): boolean {
  return str.substr(-target.length) == target;
}
confirmEnding("Bastian", "n");

