// CHALLENGE 1
// Who's name is longer?
/* BRONZE
Write two variables. One will store your name and another will store a friend's name. Find out what property you can use to check how long the names are. Console log how many letters are in each name.
 */
/* SILVER
Expand on what you have already done and write a conditional to see who has the longer name. Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.
*/
/* GOLD
In the console log include how many letters difference there are between the names.
Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional!
*/

//Bronze

let myName = "Christopher Miner"
let friendsName = "David Wallace"

console.log(myName.length);
console.log(friendsName.length);

//Silver

if (myName.length > friendsName.length) {
    console.log(`My name is longer than ${friendsName}'s name.`);
} else if (myName.length < friendsName.length) {
    console.log(`${friendsName}'s name is longer than my name.`);
}

//Gold

let difference1 = (myName.length - friendsName.length)
let difference2 = (friendsName.length - myName.length)

if (myName.length > friendsName.length) {
    console.log(`My name is longer than ${friendsName}'s name by ${difference1} characters.`);
    
} else if (myName.length < friendsName.length) {
    console.log(`${friendsName}'s name is longer than my name by ${difference2} characters.`);
} else {
    console.log("Our names are the same length.")
}

// CHALLENGE 2
// Types Challenge
/* BRONZE
Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
 */
/* SILVER
Write a conditional that checks the type of one of the values stored in the object 
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
*/

//bronze

let car = {
    color: "white",
    year: 2014,
    isManualTransmission: false,
    features: {
        fourWheelDrive: false,
        AC: true,
        bluetooth: true
    }
}
console.log(typeof car.color);

//silver


let value = car.year;

if (typeof value === 'string'){
    console.log('this value is a string');
} else if (typeof value === 'number'){
    console.log('this value is a number');
} else if (typeof value === 'boolean'){
    console.log('this value is a boolean');
} else if (typeof value === 'object'){
    console.log('this value is an object');
} else {
    console.log("What are you?");
}
