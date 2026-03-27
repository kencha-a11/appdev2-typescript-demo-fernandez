// String type
let userName1 = "Aljon";
console.log(typeof userName1);  // "string"

// Number type
let age = 25;
console.log(typeof age);        // "number"

// Boolean type
let isActive = true;
console.log(typeof isActive);   // "boolean"

// Undefined type
let address;
console.log(typeof address);    // "undefined"

// Null type (JavaScript quirk)
let data = null;
console.log(typeof data);       // "object" 

// Array type (also returns "object")
let hobbies = ["reading", "coding"];
console.log(typeof hobbies);    // "object"
console.log(Array.isArray(hobbies)); // true (proper way to check array)

// Object type
let person = { name: "Aljon", age: 25 };
console.log(typeof person);     // "object"

// Function type
let greet = function() { return "Hello"; };
console.log(typeof greet);      // "function"