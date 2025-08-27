const getaddStudent = (req, res) => {
   return res.render('add-student',{page :'add-student', message:''});
}
module.exports = { getaddStudent }
