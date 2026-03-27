let age: any = 31;           // initially a number
console.log(typeof age);     // "number"

age = '31';                  // reassigned to string - no error
console.log(typeof age);     // "string"

age = true;                  // reassigned to boolean - no error
console.log(typeof age);     // "boolean"

age = {};                    // reassigned to object - no error
console.log(typeof age);     // "object"

age = [];                    // reassigned to array - no error
console.log(typeof age);     // "object" (arrays return "object" in JS)