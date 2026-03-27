(() => {
    // Literal Types (Alternative to Enum)
    let userRole: 'admin' | 'guess' | 'teacher' | 'student' = 'admin'

    userRole = 'guess'
    // anotherUserRole = 'superadmin'

    function access(role: 'admin' | 'guess' | 'teacher' | 'student') {
        // ...
    }
    console.log('user role: ', userRole)
})

const getUserRole = (): 'admin' | 'guess' | 'teacher' | 'student' => {
    let userRole: 'admin' | 'guess' | 'teacher' | 'student' = 'admin'
    userRole = 'guess'
    return userRole
}

console.log(`User permission control: ${getUserRole()}`)   // ✅ prints the returned value