const { loadUsers, loadStudents } = require("../functions");
const fs = require("fs");
const users = [];
const students = [];

loadUsers(users, './data/users.json');
loadStudents(students, './data/students.json');
const index =  (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    if (!username || !password) {
        return res.render('index', { message: 'Username and Password required' });
    }

    const getUser = users.find((user) => user.username === username);
    if (!getUser) {
        return res.render('login', { message: ' "username not found"' });
    }
    
    if (getUser.password === password) {
        const tokenData = JSON.stringify({ id: getUser.id, username: getUser.username, email: getUser.email, role: getUser.role });
        fs.writeFileSync("./data/token.json", tokenData, 'utf8');

        return res.render('index', {
            user: username,
            page: 'dashboard',
           stats: {
                total: 0,
                active: 0,
                graduated: 0,
            },
            recentStudents: 0
        });

    }
    else {
        return res.render('login', { message: 'password is incorrect' });
    }



}

module.exports = { index };
