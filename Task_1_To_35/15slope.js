// 15. Calculate the slope, x-intercept and y-intercept of y = 2x -2

// For y=mx+c :
// Slope = m
// x-intercept = -c/m
// y-intercept = c



let expression = 'y=2x-2'; 

let arr = expression.split('');

// console.log(arr);

let m=Number(arr[2]),c=Number(arr[4]+arr[5]);

console.log(`Slope is ${m} \nx-intercept is ${-c/m} \ny-intercept is ${c}`);





