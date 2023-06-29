import express from 'express';
import { signin, signup } from '../../controller/Auth/Auth';
import { getAllUser } from '../../controller/Auth/GetUser';
const router = express.Router();
router.post('/signup',signup)
router.post('/signin',signin)
router.get('/user',getAllUser)

export default router;