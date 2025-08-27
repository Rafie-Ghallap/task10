const {loadUsers,saveUsers} = require("../functions")

const deleteUser = (req, res) => {
    const userId = req.params.id;
    if(!userId){
        return res.json({ message: 'User ID is required' });
    }
    const users = [];
    loadUsers(users, './data/users.json');
    
    const getUser = users.findIndex(user => user.id === parseInt(userId));
    if (getUser === -1) {
        return res.json({ message: 'User not found' });
    }
    users.splice(getUser, 1);
    saveUsers(users, './data/users.json');
    return res.render('manage-users', { users, search: '' });
}

module.exports = { deleteUser };