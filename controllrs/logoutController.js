const fs = require('fs');
const logout = (req, res) => {
    username =req.body.username;
    const tokenData = fs.readFileSync('./data/tokens.json');
    const tokenJson = JSON.parse(tokenData);
    const gettoken = tokenJson.find(token => token.username === username);
    if(!gettoken){
        return res.json({ message: "User not logged in" });
    }
    return res.render('login', { message: "Logged out successfully" });
}

module.exports = { logout };