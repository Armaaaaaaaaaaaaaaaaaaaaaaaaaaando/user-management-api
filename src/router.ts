import { Router } from 'express';
import  {UserController} from './controller/UserController.js'
const userRoutes = Router();

const userController = new UserController();

// User Routes
userRoutes.get('/', userController.getAll)
userRoutes.post('/create',userController.create)
userRoutes.get('/user', userController.get)

userRoutes.put('/update',userController.put)

userRoutes.delete('/delete',userController.delete)


export { userRoutes };