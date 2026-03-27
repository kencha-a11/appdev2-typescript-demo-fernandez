// console.log("Hello World!")

let userName: string = "Aljon";
let userAge = 22;

// ...

// userAge = "22" // not allowed by typescript

console.log(`Username - ${userName}`)
console.log(`Age - ${userAge}`)

function add(a: number, b = 5) {
    return a + b
}

add(10)
// add('10')
add(10, 6)
// add(10, '6')

console.log(`Added value: ${add(10, 6)}`)
// console.log(`Added value: ${add(userName, userAge)}`)