"use strict";
(() => {
    let userRole = 'admin';
    // ...
    function access(role) {
        // ...
    }
});
const practice = () => {
    // Create a sample user
    const currentUser = {
        name: 'Aljon',
        age: 22,
        role: 'admin',
        permissions: ['read', 'write', 'delete']
    };
    // Function that uses the Role type
    function access(role) {
        console.log(`Access level: ${role}`);
    }
    // Print the user and call the access function
    console.log('User object:', currentUser);
    console.log(`User role: ${currentUser.role}`);
    access(currentUser.role);
};
// Now call the function
practice();
