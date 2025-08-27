const {loadUsers}= require("../functions");

const Users = (req, res) => {
    const users = [];
    loadUsers(users, './data/users.json');
    const filterUsers = [];
    users.filter((user) => {
        filterUsers.push({
            username: user.username,
            fullName: user.fullName,
            email: user.email
        });
    });
    return res.render('manage-users',  { users: filterUsers , search: '' });
}
module.exports = { Users }