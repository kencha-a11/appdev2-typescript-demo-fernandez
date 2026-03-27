let hobbies = ["Travel", "Watching"]

// hobbies.push(10)

// let userList: (string | number)[];
let userList: Array<string | number>;

// userList = ["Aljon", "Ken12", 0987654] // Decimals with leading zeros are not allowed
userList = ["Aljon", "Ken12", 987654] 

console.log(userList)

let user: {
    name: string;
    age: number;
    hobbies: Array<string>,
    role: {
        description: string,
        id: number
    }
} = {
    name: "Aljon",
    age: 22,
    hobbies: ["Travel", "Watching"],
    role: {
        description: 'student',
        id: 1
    }
}

// Must not null or undefined
let val: {} = "Aljon Fernandez"
// val = null;                            
// val = undefined;   

// Flexible Object - Record Type
let data: Record<string, number | string> // keys are string, values can be numbers or string

data = {
    1: 1, // key "1" (string) with number value
    name: 'Aljon' // key "name" with string value
    // isPartTimeInstructor: true // boolean not allowed by record
}