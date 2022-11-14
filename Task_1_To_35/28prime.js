// 28. Use for loop to iterate from 0 to 100 and print only prime numbers

let prime=0;

// 1st way (Less iterations):

console.log("\n1st way (Less iterations):");

for(let i=0; i<=100 ;i++){

    if(i==0 || i==1){
        prime=1;
        continue;
    }
    else if(i==2 || i==3){
        console.log(`${i} is prime`);
    }
    else{
        for(let j=2; j<=Math.floor(i/2); j++)       //No need to iterate till complete length, reduce complexity
        {
            if(i%j==0){
                prime=1;
                break;
            }
            else{
                prime=0;
            }
        }
    }

    if(prime==0){
        console.log(`${i} is prime`);
    }

}


// 2nd way (More iterations):

console.log("\n2nd way (More iterations):");

for(let i=0; i<=100 ;i++){

    if(i==0 || i==1){
        prime=1;
        continue;
    }
    else if(i==2 || i==3){
        console.log(`${i} is prime`);
    }
    else{
        for(let j=2; j<=i; j++)      
        {
            if(i%j==0 && i!=j){
                prime=1;
                break;
            }
            else{
                prime=0;
            }
        }
    }

    if(prime==0){
        console.log(`${i} is prime`);
    }

}