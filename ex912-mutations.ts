function mutation(arr: Array<string>): Boolean {
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();
  for (let i = 0; i < arr[1].length; i++) {
    if (arr[0].indexOf(arr[1][i]) === -1) {
      return false;
    }
  }
  return true;
}
mutation(["hello", "Heyo"]);