const {loadStudents, saveStudents} = require("../functions");
const geteditStudent = (req, res) => {
    const studentId = req.params.id;
    if (!studentId) {
        return res.json({ message: 'Student ID is required' });
    }
    const students = [];
    loadStudents(students, './data/students.json');
    const getStudent = students.find((student) => student.id === studentId);
    if (!getStudent) {
        return res.json({ message: 'Student not found' });
    }

    return res.render('edit-student', { page: 'edit-student', student: getStudent, message: 'successful' });
}
module.exports = { geteditStudent };