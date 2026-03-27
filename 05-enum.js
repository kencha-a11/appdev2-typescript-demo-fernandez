"use strict";
const userRole = (() => {
    let Role;
    (function (Role) {
        // SuperAdmin,
        // SuperAdmin = 1,
        Role["SuperAdmin"] = "SuperAdmin";
        // Teacher,
        Role["Teacher"] = "Teacher";
        // Student,
        Role["Student"] = "Student";
    })(Role || (Role = {}));
    // let userRole: Role = 0;
    let userRole = Role.SuperAdmin;
});
const userStatus = (() => {
    let Status;
    (function (Status) {
        Status["Active"] = "ACTIVE";
        Status["Inactive"] = "INACTIVE";
        Status["Pending"] = "PENDING";
    })(Status || (Status = {}));
    let currentStatus = Status.Pending;
    return console.log(currentStatus);
});
// console.log(`User status: [${userStatus}]`)
userStatus();
