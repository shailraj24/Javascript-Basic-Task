// 17. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

let myDate = new Date(); // Current Date

let myYear = myDate.getFullYear();
let myMonth = myDate.getMonth()+1;
let myDay = myDate.getDate();
let myHour = myDate.getHours();
let myMinute = myDate.getMinutes();

console.log(`Time in YYYY-MM-DD HH:mm is ${myYear}-${myMonth}-${myDay} ${myHour}:${myMinute}`);
console.log(`Time in DD-MM-YYYY HH:mm is ${myDay}-${myMonth}-${myYear} ${myHour}:${myMinute}`);
console.log(`Time in DD/MM/YYYY HH:mm is ${myDay}/${myMonth}/${myYear} ${myHour}:${myMinute}`);

