const {loadStudents, saveStudents} = require("../functions");
const editStudent = (req, res) => {
    const studentId = req.params.id;
    const student = req.body;
    if (!studentId) {
        return res.json({ message: 'Student ID is required' });
    }
    const students = [];
    loadStudents(students, './data/students.json');
    const getStudent = students.find((student) => student.id == studentId);
    if (!getStudent) {
        return res.render('edit-student', { page: 'edit-student', student: getStudent, message: 'the student not found' });
    }
    for (let i in student) {
        if (student[i]) {
            getStudent[i] = student[i];
        }

    }
    const index = students.findIndex((student) => student.id === studentId);
    students.splice(index, 1, getStudent);
    saveStudents(students, './data/students.json');
    return res.render('edit-student', { page: 'edit-student', student: getStudent, message: 'sucssfull' });
}
module.exports = { editStudent };