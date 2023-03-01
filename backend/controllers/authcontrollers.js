const User = require('../subject/login');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//const cookieParser = require('cookie-parser');

const returnRegisterPage = (req,res) => {
    res.render('register');
}

const returnLoginPage = (req,res) =>{
    res.render('login');
}

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = 'bcsciewdehowwfbwfb2qi2jfcniuw';



const createUser = async (req,res) => {
    const {name,email,password} = req.body;
    console.log(password)
    try{
        const user = await User.create ({
            name,
            email, 
            password: bcrypt.hashSync(password,bcryptSalt)
        });
        res.json({user});
    }catch(e){
        res.status(422).json(e);
    }
}


const loginUser = async (req,res)=> {
    const {email,password} = req.body;
    const user = await User.findOne({email})
    console.log(password)
    console.log(user)
    if(user){
        const passwordMatch = bcrypt.compareSync(password,user.password);
        
        if(passwordMatch){
            console.log('password is  matched');
            jwt.sign({email:user.email, id:user._id, name:user.name},jwtSecret,{}, (err,token) => {
                if(err) throw err;
                res.cookie('token','').json(user)
                res.json({success: true, user,token});//{success: true, User: UserDoc,msg: 'success is here '})
            });  
        }else{
            res.json({success: true,message: "password did not matched"});
        }
    }else{
        res.json('not found');
    }
}




module.exports = {
    returnRegisterPage,
    returnLoginPage,
    createUser,
    loginUser
}