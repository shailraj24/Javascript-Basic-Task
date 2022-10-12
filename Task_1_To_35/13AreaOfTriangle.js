// 13. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// The below code only runs on browser console, not nodejs, prompt is a Window method.

let base = prompt("Enter base of triangle");

let height = prompt("Enter height of triangle");

console.log(`The area of triangle is ${0.5*base*height}`);

