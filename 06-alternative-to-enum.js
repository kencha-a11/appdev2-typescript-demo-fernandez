"use strict";
(() => {
    // Literal Types (Alternative to Enum)
    let userRole = 'admin';
    userRole = 'guess';
    // anotherUserRole = 'superadmin'
    function access(role) {
        // ...
    }
    console.log('user role: ', userRole);
});
const getUserRole = () => {
    let userRole = 'admin';
    userRole = 'guess';
    return userRole;
};
console.log(`User permission control: ${getUserRole()}`); // ✅ prints the returned value
