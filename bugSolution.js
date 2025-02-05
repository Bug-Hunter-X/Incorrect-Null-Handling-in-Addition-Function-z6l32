function foo(a, b) {
  // Handle null values by treating them as 0
  a = a === null ? 0 : a;
  b = b === null ? 0 : b;
  return a + b;
}
console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5)); // Output: 10
//Alternative solution using optional chaining and nullish coalescing
function foo2(a, b) {
  return (a ?? 0) + (b ?? 0);
}
console.log(foo2(null, 5)); // Output: 5
console.log(foo2(5, null)); // Output: 5
console.log(foo2(5, 5)); // Output: 10