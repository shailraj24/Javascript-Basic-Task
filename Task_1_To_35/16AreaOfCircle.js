// 16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

// Please note that below code only works on browser console, not nodeJS ; prompt is a Windows Method

let r = prompt('Enter radius of circle');

const pi = 3.14;

console.log(`Area of circle is ${pi*r**2}`);

console.log(`Circumference of circle is ${2*pi*r}`);

// console.log(`Area of circle is ${Math.PI*r**2}`);

// console.log(`Circumference of circle is ${2*Math.PI*r}`);

