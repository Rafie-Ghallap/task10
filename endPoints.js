const {app}= require("./index");
const {getlogin} = require("./controllrs/getlogincontroller");
const {index} = require("./controllrs/logincontroller");
const {getregister} = require("./controllrs/getregistercontroller")
const {register} = require("./controllrs/registercontroller");
const {getaddStudent} = require("./controllrs/getaddStudentcontroller");
const {addStudent} = require("./controllrs/addStudentcontroller");
const { Students} = require("./controllrs/studentController");
const { Users} = require("./controllrs/usersController");
const { logout } = require("./controllrs/logoutController");
const { deleteUser } = require("./controllrs/deleteuserController");
const { geteditStudent } = require("./controllrs/geteditStudentController");
const { deleteStudent } = require("./controllrs/deleteStudentController")

app.get("/login",getlogin);

app.post("/login",index);

app.get("/register",getregister);

 app.post("/register",register);

app.post("/logout",logout);

app.get("/add-student",getaddStudent);

app.post("/add-student",addStudent);

app.get("/students",Students);

app.get("/users",Users);

app.get("/delete-user/:id",deleteUser);

 app.get("/edit-student/:id",geteditStudent);

// app.post("/edit-student/:id",editStudent);

 app.post("/delete-student/:id",deleteStudent);