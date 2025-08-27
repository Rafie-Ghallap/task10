const {loadStudents,saveStudents} = require("../functions");

const deleteStudent = (req, res) => {
    const studentId = req.params.id;
    if(!studentIdId){
        return res.json({ message: 'student ID is required' });
    }
    const students = [];
    loadStudents(students, './data/students.json');
    
    const getStudent= students.findIndex(student => student.id === studentId);
    if (getUser === -1) {
        return res.json({ message: 'User not found' });
    }
    students.splice(getStudent, 1);
    saveStudents(students, './data/students.json');
    return res.render('view-students', { students, search: '' });
}

module.exports = { deleteStudent };