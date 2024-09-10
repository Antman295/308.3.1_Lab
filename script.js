// Part 1: Fizz Buzz

// Loop through all numbers from 1 to 100.

for (i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0){ // If a number is divisible by both 3 and 5, log “Fizz Buzz.”
        console.log(`Fizz Buzz`);
    } else if (i % 3 == 0) { // If a number is divisible by 3, log “Fizz.”
        console.log(`Fizz`);
    } else if (i % 5 == 0) {  // If a number is divisible by 5, log “Buzz.”
        console.log(`Buzz`);
    } else { // If a number is not divisible by either 3 or 5, log the number.
        console.log(i);
    }

}

console.log("\n\n")

// Part 2: Prime Time

// Declare an arbitrary number, n.
let n = 6;
//Create a loop that searches for the next prime number, starting at n and incrementing from there.
while (i < n) {
    if (i % 2 !== 0 && i % 3 !== 0) {
        console.log(i); // As soon as you find the prime number, log that number and exit the loop.
        break;
    }
}

// console.log(i);

// Part 3: Feeling Loopy

let string = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`
let cell = '';
let row = '';



for(let char = 0; char < string.length; char++){
    if (string[char] === ',') {  // move to the next cell
        row = row + cell + ' ';
        cell = '';
    } else if(string[char] === '\n') { // move to the next row
        row = row + cell;
        console.log(row);
        row = '';
        cell = '';
    } else {
        cell += string[char];
    }

    if (char + 1 == string.length) {
        row = row + cell;
        console.log(row);
    }


}
// for(let char = 0; char < string.length; char++){
//     if (string[char] === ',') {  // move to the next cell
//         continue;
//     }
//     if(string[char] === '\n') { // move to the next row
//         break;
//     }

// }
// for(let char = 0; char < string.length; char++){
//     if (string[char] === ',') {  // move to the next cell
//         continue;
//     }
//     if(string[char] === '\n') { // move to the next row
//         break;
//     }

// }
// for(let char = 0; char < string.length; char++){
//     if (string[char] === ',') {  // move to the next cell
//         continue;
//     }
//     if(string[char] === '\n') { // move to the next row
//         break;
//     }

// }

// console.log(cell1, cell2, cell3, cell4); // print out the table

