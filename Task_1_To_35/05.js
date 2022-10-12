// 5. Split the string into an array using split() method

let sampleString = 'It is a long established   $# fact that a reader 55 will be distracted 10 by the readable content of a page when looking at its layout. The point of using Lorem Ipsum 6842  is that it   has a more-or-less normal   t distribution of letters, as opposed to using.';

console.log(sampleString.split(' ')); //String splitted on the basis of a single space ; So the array will include single space values if there is a double or triple space.

console.log(sampleString.split('')); //String splitted on the basis of treating each character as a separate array element.
