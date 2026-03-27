(() => {

    // Function Return Value Types
    function add(a: number, b: number): number { // you can omit the function type since typescript can infers it
        return a + b
    }

    add(5, 10)
    // add("5", 10)

    // Special Type `void` - return nothing
    // Function doesn't return a meaningful value, but it does finish
    function log(message: string): void {
        console.log(message)
    }

    log("Hello, World!")

    // Another Special Type `never`
    // Function never finishes normally (throws error, infinite loop)
    function logAndThrow(errorMessage: string) {
        console.log(errorMessage)
        throw new Error(errorMessage)
    }

    // Function as Types
    // Useful for callback functions
    // () => {} is not same as () => void
    // () => {} - arrow function
    // () => void - function type
    function performJob(cb: (m: string) => void) {  // you can also use cb: Function but () => void is the best practice
        // ...
        cb('Job Done!')
    }

    let logMsg = (msg: string): void => {
        console.log(msg)
    }

    performJob(logMsg)

    // Useful for objects and methods
    type User = {
        name: string;
        age: number;
        greet: () => string;
    }

    let user: User = {
        name: "Aljon",
        age: 22,
        // greet: function() {
        //     return this.name
        // }
        greet() {
            console.log(`Hello, ${this.name}`)
            return this.name
        }
    }

    user.greet()
})

const practice1 = () => {
    // ---- Return type annotations ----
    function multiply(x: number, y: number): number {
        return x * y;
    }
    console.log('Multiply 3 * 4 =', multiply(3, 4));

    // ---- void ----
    function showResult(result: number): void {
        console.log(`The result is: ${result}`);
    }
    showResult(multiply(5, 6));

    // ---- never ----
    function fail(message: string): never {
        throw new Error(message);
    }
    // Uncommenting the next line would stop the program
    // fail("Something went wrong");

    // ---- Function type (callback) ----
    type Callback = (data: string) => void;
    function fetchData(cb: Callback): void {
        setTimeout(() => {
            cb("Data received!");
        }, 1000);
    }

    const handleData = (msg: string): void => {
        console.log(`Callback says: ${msg}`);
    };
    fetchData(handleData);

    // ---- Object methods ----
    type Calculator = {
        add: (a: number, b: number) => number;
        subtract(a: number, b: number): number;  // alternative syntax
    };

    const calc: Calculator = {
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