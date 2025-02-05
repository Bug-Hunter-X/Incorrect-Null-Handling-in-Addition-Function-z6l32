function foo(a, b) {
  if (a === null || b === null) {
    return null; //Incorrect handling of null values
  }
  return a + b;
}
console.log(foo(null, 5)); // Output: null
console.log(foo(5, null)); // Output: null
console.log(foo(5, 5)); // Output: 10