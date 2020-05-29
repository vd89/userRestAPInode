import { Router } from "express";
import userController from "../controller/userController";


const router = Router()


//View index
router.get('/',userController.listAll)

//Creater A user
router.post('/', userController.create)

//Verification route
router.get('/verify/:token',userController.verify)
router.get('/login', (req, res) => {
	res.render('login');
});
export default router