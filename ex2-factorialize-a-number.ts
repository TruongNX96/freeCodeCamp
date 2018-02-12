function factorializes (num: number): number {
  let a = 1;
  for (let x = 0; x < num; x++) {
    a = a * (x + 1);
  }
  return a;
}
factorializes (5);