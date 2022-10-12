// 7. Use lastIndexOf to determine the position of the last occurrence of a script.

let sampleString = 'There is immense are best scope of scripts are best used in scripting languages'; //Gibberish

let sampleScript = 'are best';

console.log(`The last index of the script: '${sampleScript}' is at index ${sampleString.lastIndexOf(sampleScript)}`);

console.log(`The last index of the script: '${sampleScript}' is at index ${sampleString.lastIndexOf(sampleScript, 40)}`); //Last occurence less than or equal to index 40

