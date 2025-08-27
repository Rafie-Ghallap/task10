const fs = require('fs');



function loadUsers(users, dbFile) {
    try {
        const usersData = fs.readFileSync(dbFile,'utf8')
        const usersJson = JSON.parse(usersData);
        users.push(...usersJson);
    }
    catch (error){
        console.log("Error loading users:");
    }
    
}
function loadStudents(students, dbFile) {
    try {
        const studentsData = fs.readFileSync(dbFile,'utf8')
        const studentsJson = JSON.parse(studentsData);
        students.push(...studentsJson);
    }
    catch (error){
        console.log("Error loading students:");
    }
    
}

function saveUsers(users, dbFile) {
    try {
        const userData = JSON.stringify(users)
        fs.writeFileSync(dbFile, userData,'utf8')
        console.log('Save Users')
    }
    catch (error) {
        console.log('Error : ')
    }
    
}

function saveStudents(students, dbFile) {
    try {
        const studentData = JSON.stringify(students)
        fs.writeFileSync(dbFile, studentData,'utf8')
        console.log('Save Students')
    }
    catch (error) {
        console.log('Error save student ')
    }
}

module.exports = { loadUsers, loadStudents, saveUsers ,saveStudents };
