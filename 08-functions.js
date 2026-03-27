"use strict";
(() => {
    // Function Return Value Types
    function add(a, b) {
        return a + b;
    }
    add(5, 10);
    // add("5", 10)
    // Special Type `void` - return nothing
    // Function doesn't return a meaningful value, but it does finish
    function log(message) {
        console.log(message);
    }
    log("Hello, World!");
    // Another Special Type `never`
    // Function never finishes normally (throws error, infinite loop)
    function logAndThrow(errorMessage) {
        console.log(errorMessage);
        throw new Error(errorMessage);
    }
    // Function as Types
    // Useful for callback functions
    // () => {} is not same as () => void
    // () => {} - arrow function
    // () => void - function type
    function performJob(cb) {
        // ...
        cb('Job Done!');
    }
    let logMsg = (msg) => {
        console.log(msg);
    };
    performJob(logMsg);
    let user = {
        name: "Elmer",
        age: 39,
        // greet: function() {
        //     return this.name
        // }
        greet() {
            console.log(`Hello, ${this.name}`);
            return this.name;
        }
    };
    user.greet();
});
const practice1 = () => {
    // ---- Return type annotations ----
    function multiply(x, y) {
        return x * y;
    }
    console.log('Multiply 3 * 4 =', multiply(3, 4));
    // ---- void ----
    function showResult(result) {
        console.log(`The result is: ${result}`);
    }
    showResult(multiply(5, 6));
    // ---- never ----
    function fail(message) {
        throw new Error(message);
    }
    function fetchData(cb) {
        setTimeout(() => {
            cb("Data received!");
        }, 1000);
    }
    const handleData = (msg) => {
        console.log(`Callback says: ${msg}`);
    };
    fetchData(handleData);
    const calc = {
        add: (a, b) => a + b,
        subtract(a, b) {
            return a - b;
        }
    };
    console.log(`10 + 5 = ${calc.add(10, 5)}`);
    console.log(`10 - 5 = ${calc.subtract(10, 5)}`);
};
// Call the function to see the output
practice1();
