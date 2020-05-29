import user from "../model/User";
import {genSalt,hash} from 'bcrypt';

// View all 
const listAll = async (req, res) => {
	res.render('index');
};

const create = async (req, res) => {
  try {
    const { name, email, userName,password,confirm } = req.body
    if (password === confirm) {
      const salt = await genSalt(12)
      const newPassword = await hash(req.body.password, salt)
      // console.log(password);
      const userData = new user(name,email,userName,newPassword)
      console.log(userData);
      res.send(userData)
    } else {
      console.log(`Plsease give password correct`);
    }
    
  } catch (error) {
    res.send(error)
  }
}


export default {create,listAll}