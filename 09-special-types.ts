// Special Type - null
let a: null;

a = null
// a = "Hi"

let b: null | string

b = null
b = "Hi"
// b = 10

// Special Type - undefined
let c: undefined;

c = undefined
// c = null
// c = "Hi"

let d: undefined | string

d = undefined
d = "Hi"
// d = null
// d = 10

const practice2 = () => {
    // 1. Explicit null only
    let onlyNull: null;
    onlyNull = null;
    console.log('onlyNull =', onlyNull);
    // onlyNull = "hello"; // ❌ error if uncommented

    // 2. null or string
    let maybeString: null | string;
    maybeString = null;
    console.log('maybeString (null):', maybeString);
    maybeString = "Hello, TypeScript!";
    console.log('maybeString (string):', maybeString);

    // 3. undefined only
    let onlyUndefined: undefined;
    onlyUndefined = undefined;
    console.log('onlyUndefined =', onlyUndefined);

    // 4. undefined or number
    let maybeNumber: undefined | number;
    maybeNumber = undefined;
    console.log('maybeNumber (undefined):', maybeNumber);
    maybeNumber = 42;
    console.log('maybeNumber (number):', maybeNumber);

    // 5. Using null/undefined with objects (optional chaining example)
    type Config = {
        theme?: string;          // optional property → implicitly includes undefined
        debug?: boolean | null;  // explicitly allows null
    };

    const config: Config = {
        theme: undefined,
        debug: null
    };

    // Optional chaining prevents runtime errors
    console.log('Theme:', config.theme?.toUpperCase() ?? 'default');
    console.log('Debug mode:', config.debug ?? false);
};

// Call the function
practice2();