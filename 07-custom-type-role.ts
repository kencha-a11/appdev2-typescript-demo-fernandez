(() => {
    // Type Aliases or Custom Types
    // use `type` keyword to create custom type
    type Role = 'admin' | 'guess' | 'teacher' | 'student'

    // Complex Object Type Definition
    type User = {
        name: string;
        age: number;
        role: Role; // you can use as well the Role type in Object type
        permission: string[];
    }

    let userRole: Role = 'admin'

    // ...

    function access(role: Role) {
        // ...
    }
})

const practice = () => {
    // Type Aliases or Custom Types
    type Role = 'admin' | 'guest' | 'teacher' | 'student';

    type User = {
        name: string;
        age: number;
        role: Role;
        permissions: string[];
    };

    // Create a sample user
    const currentUser: User = {
        name: 'Aljon',
        age: 22,
        role: 'admin',
        permissions: ['read', 'write', 'delete']
    };

    // Function that uses the Role type
    function access(role: Role): void {
        console.log(`Access level: ${role}`);
    }

    // Print the user and call the access function
    console.log('User object:', currentUser);
    console.log(`User role: ${currentUser.role}`);
    access(currentUser.role);
};

// Now call the function
practice();