// 23. Write a program which tells the number of days in a month, now consider leap year.

// Same code as Problem 22, both include leap years:

let month=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; 
let m = 1;
let year=2008;

console.log(`The number of days in ${month[m]} ${year} is ${(new Date(year, m+1, 0)).getDate()}`);

