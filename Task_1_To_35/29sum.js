// 29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let sumOfEvens = 0;
let sumOfOdds = 0;

for(let i=0; i<=100; i++){

    if(i%2==0){
        sumOfEvens = sumOfEvens + i;
    }
    else{
        sumOfOdds = sumOfOdds + i;
    }

}

console.log(`Sum of evens is ${sumOfEvens}`);
console.log(`Sum of odds is ${sumOfOdds}`);


