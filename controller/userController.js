import User from "../model/User";
import {genSalt,hash} from 'bcrypt';
import { generate } from "randomstring";
import userMail from "./userMail";

// View all 
const listAll = async (req, res) => {
	res.render('index');
};

const create = async (req, res) => {
  try {
    if (req.body.password === req.body.confirm) {
      const {name,email,userName} = req.body
      const token = generate()
      const salt = await genSalt(12)
      const password = await hash(req.body.password, salt)
      const isUser = await User.findOne({ email: email })
      const userData = new User({ name, email, userName, password,token })
      if (!isUser) {
        // console.log(userData);
        await userData.save()
        await userMail(email,name,token)
        res.render('login',{message: 'Check Email, Verify your email',display:'true'})      
      } else {
        res.render('login')
      }
    } else {
      console.log(`Plsease give password correct`);
    }
    
  } catch (error) {
    res.send(error)
  }
}

const verify = async (req,res) => {
  const token = req.params.token
  User.findOneAndUpdate(
    { token: token },
    { $set: { active: true } },
    (err, data) => {
      if (err) {
        throw err;
      }
      res.render('login')
		},
	);
  
}


export default {create,listAll,verify}