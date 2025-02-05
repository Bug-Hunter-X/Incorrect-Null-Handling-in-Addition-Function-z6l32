# Incorrect Null Handling in Addition Function

This repository demonstrates a common error in JavaScript: incorrect handling of null values in a function.  The `foo` function is designed to add two numbers. However, it incorrectly handles cases where one or both inputs are `null`. Instead of providing a more graceful solution (e.g., treating `null` as 0), it simply returns `null`, which might not always be the expected behavior.

The `bug.js` file contains the buggy code. The `bugSolution.js` file shows a possible fix. This example highlights the importance of robust null checks and appropriate handling of unexpected input values in JavaScript functions.