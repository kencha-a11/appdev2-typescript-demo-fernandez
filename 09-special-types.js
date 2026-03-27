"use strict";
// Special Type - null
let a;
a = null;
// a = "Hi"
let b;
b = null;
b = "Hi";
// b = 10
// Special Type - undefined
let c;
c = undefined;
// c = null
// c = "Hi"
let d;
d = undefined;
d = "Hi";
// d = null
// d = 10
const practice2 = () => {
    // 1. Explicit null only
    let onlyNull;
    onlyNull = null;
    console.log('onlyNull =', onlyNull);
    // onlyNull = "hello"; // ❌ error if uncommented
    // 2. null or string
    let maybeString;
    maybeString = null;
    console.log('maybeString (null):', maybeString);
    maybeString = "Hello, TypeScript!";
    console.log('maybeString (string):', maybeString);
    // 3. undefined only
    let onlyUndefined;
    onlyUndefined = undefined;
    console.log('onlyUndefined =', onlyUndefined);
    // 4. undefined or number
    let maybeNumber;
    maybeNumber = undefined;
    console.log('maybeNumber (undefined):', maybeNumber);
    maybeNumber = 42;
    console.log('maybeNumber (number):', maybeNumber);
    const config = {
        theme: undefined,
        debug: null
    };
    // Optional chaining prevents runtime errors
    console.log('Theme:', config.theme?.toUpperCase() ?? 'default');
    console.log('Debug mode:', config.debug ?? false);
};
// Call the function
practice2();
