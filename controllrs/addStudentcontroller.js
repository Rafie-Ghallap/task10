const {loadStudents, saveStudents} = require("../functions");
const addStudent = (req, res) => {
    const students = [];
    loadStudents(students, './data/students.json');
    const { firstName, lastName, email, status, age, course } = req.body;
    if (!firstName || !lastName || !email || !status || !age || !course) {
        return res.render('add-student', { message: 'Please fill out all fields' });
    }
    const newStudent = {
        id: students.length + 1,
        firstName,
        lastName,
        course,
        status,
        age,
        email
    };
    students.push(newStudent);
    saveStudents(students, './data/students.json');
    return res.render('add-student', { page: 'add-student', message: 'successfully' });
}
module.exports = { addStudent }
 