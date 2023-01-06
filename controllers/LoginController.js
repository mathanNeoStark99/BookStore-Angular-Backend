const database = require("../models")
const User = database.user;


//Login
exports.userLogin = async (req,res) => {
    let email = req.body.email;
    let password = req.body.password;

    let userIn = await User.findOne({where: { email: email, password: password }});
    
    if(userIn != null){
        res.status(200).json(true);
    }else{
        res.status(500).json(false);
    }
}