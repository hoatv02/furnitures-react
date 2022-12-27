import express from 'express';
import { AddProduct } from '../../controller/Product/AddProduct';
import { removeProduct } from '../../controller/Product/deleteProduct';
import { getAllProduct, productDetail } from '../../controller/Product/GetProduct';
import { updateProduct } from '../../controller/Product/UpdateProduct';

const router = express.Router();

router.post('/product',AddProduct)
router.get('/product',getAllProduct)
router.get('/product/:id',productDetail)
router.put('/product/:id',updateProduct)
router.delete('/product/:id',removeProduct)

export default router;