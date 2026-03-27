const userRole = (() => {
    enum Role {
        // SuperAdmin,
        // SuperAdmin = 1,
        SuperAdmin = 'SuperAdmin',
        // Teacher,
        Teacher = 'Teacher',
        // Student,
        Student = 'Student',
    }

    // let userRole: Role = 0;
    let userRole: Role = Role.SuperAdmin;
})

const userStatus = (() => {
    enum Status {
        Active = "ACTIVE",
        Inactive = "INACTIVE",
        Pending = "PENDING", 
    }

    let currentStatus: Status = Status.Pending
    return console.log(currentStatus)
})

// console.log(`User status: [${userStatus}]`)
userStatus()