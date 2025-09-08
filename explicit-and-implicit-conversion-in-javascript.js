/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

//Task 1:

let result = "5" - 2; // this code works because the 5 is implicity converted to number type for the operation
console.log("The result is: " + result);

let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}
 
let age = "25";
let totalAge = Number(age) + 5; // This did not work before because the value of the variable is concationated with the number following it (both as strings), but when the varaible's type is specifcally cats prior to the operation being conducted we see an object of number type resulting. It is almost as if it [follows the suit/type of the first item in the opration]
console.log("Total Age: " + totalAge);


// Task 2: 
// -------------------------- implicit converison example
let someNumber = '25' + 1; // implicit converison 
console.log(typeof(someNumber));

let someOtherNumber = Number('25') + 1; // explicit conversion

// // -------------------------- Edge case example: explicit conversion and inplicit converison 
let notGood = 'NaN';
let alsoNotGood = 'NaN';

if (notGood === alsoNotGood){
  console.log('notGood is of' + typeof(notGood) + 'type');
  console.log('notGood is of' + typeof(alsoNotGood) + 'type');
  let tesingThis = notGood === alsoNotGood;
  console.log('tesingThis is of' + typeof(tesingThis) + 'type');
  console.log('The two vars have the same value');
} else {
    console.log('The two vars do not have the same value!');
}

notGood = NaN
console.log(' But Now notGood is of "' + typeof(notGood) + '" type so let re-evaluate...');

if (notGood === alsoNotGood){
  console.log('notGood is of' + typeof(notGood) + 'type');
  console.log('notGood is of' + typeof(alsoNotGood) + 'type');
  console.log('The two vars have the same value');
} else {
    console.log('The two vars do not have the same value!');
}

let makeMeAtring = notGood;
console.log(makeMeAtring);
console.log(typeof(makeMeAtring));
makeMeAtring = String(makeMeAtring);
console.log(makeMeAtring);
console.log(typeof(makeMeAtring));

