// 12. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.


let myDate = new Date(); //Object using new keyword, Date() is constructor

console.log(`The year today is ${myDate.getFullYear()}`);

console.log(`The month today is ${myDate.getMonth()+1}`);

console.log(`The date today is ${myDate.getDate()}-${myDate.getMonth()+1}-${myDate.getFullYear()}`);

console.log(`The day today is ${myDate.getDate()}`);

console.log(`The hours now is ${myDate.getHours()}`);

console.log(`The minutes now is ${myDate.getMinutes()}`);

console.log(`The numbers of seconds elapsed from January 1, 1970 to now is ${myDate.getTime()/1000} milliseconds`);

console.log(`The numbers of seconds elapsed from January 1, 1970 to now is ${Math.round(myDate.getTime()/1000)} seconds`);



