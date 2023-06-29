import express from 'express';
import { addCart, getCart } from '../../controller/Cart/Cart';
const router = express.Router();

router.get('/cart',getCart)
router.post('/cart',addCart)


export default router;