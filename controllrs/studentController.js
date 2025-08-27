const { loadStudents } = require("../functions");
const Students = (req, res) => {
    const students = [];
    loadStudents(students, './data/students.json');
    const filterStudents = [];
    students.filter((student) => {
        filterStudents.push({
            firstName: student.firstName,
            lastName: student.lastName,
            email: student.email
        });
    });
    return res.render('view-students',  { students: filterStudents , search: '' });
}
module.exports = { Students }