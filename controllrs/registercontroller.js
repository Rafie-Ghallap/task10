const { loadUsers ,saveUsers } = require("../functions");
const register = (req,res) =>{
    const users = [];
    loadUsers(users,'./data/users.json');
  const username = req.body.username;
   const password = req.body.password;
   const role = req.body.role;
   const fullName = req.body.fullName;
   const email = req.body.email;
   if(!username || !password || !role || !fullName || !email) {
       return res.render('register', { message: 'Please fill out all fields' });
   }
   const checkUser = users.find((user) => user.username === username && user.email === email);
   if (checkUser) {
       return res.render('register', { message: 'User already exists' });
   }
   const newUser = {
       id: users.length + 1,
       username: username,
       password: password,
       role: role,
       fullName: fullName,
       email: email
   };
   users.push(newUser);
   saveUsers(users, './data/users.json');
   return res.render('index', {
            user: username,
            page: 'dashboard',
           stats: {
                total: 0,
                active: 0,
                graduated: 0,
            },
            recentStudents: 0,
            message: 'Registration successful, please login'
         });
}
module.exports = {register}