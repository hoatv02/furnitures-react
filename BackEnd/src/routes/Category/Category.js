import express from 'express';
import { AddCategory } from '../../controller/Category/AddCategory';
import { removeCategory } from '../../controller/Category/DeleteCategory';
import { categoryDetail, getAllCategory } from '../../controller/Category/GetCategory';
import { updateCategory } from '../../controller/Category/UpdateCategory';

const router = express.Router();

router.post('/category',AddCategory)
router.get('/category',getAllCategory)
router.get('/category/:id',categoryDetail)
router.put('/category/:id',updateCategory)
router.delete('/category/:id',removeCategory)

export default router;