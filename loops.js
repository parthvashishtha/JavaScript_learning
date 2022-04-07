for (let i = 0; i <=10; i++) 
{
    console.log(`Loop number : ${i}`);
}

// While loop

let i=0;
while(i<10)
{
    console.log(`NUmbers are : ${i}`);
    i++;

}

// == sign will not take datatype into consideration while comparing
// while on the other hand === will also check the data type

// Here it will print 10 

const ranum = '10';

if(ranum==10)
console.log(10);

//  Here it will not print coz 10 is a string
const ranum1 = '10';

if(ranum1===10)
console.log(10);
else
console.log('Not matched');



