import express from 'express';
import { AddProduct } from '../../controller/Product/AddProduct';
import { removeProduct } from '../../controller/Product/deleteProduct';
import { FindProduct, getAllProduct, productDetail } from '../../controller/Product/GetProduct';
import { updateProduct } from '../../controller/Product/UpdateProduct';
import { uploadFile } from '../../controller/Product/UploadFile';
import multer from 'multer';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
           cb(null, "./src/UploadImage");
    },
    filename: (req, file, cb) => {
           cb(null, req.body.name);
    },
});
const upload = multer({storage: storage});
const router = express.Router();

router.post('/product',AddProduct)
router.get('/product',getAllProduct)
router.get('/product/:key',FindProduct)
router.get('/product/:id',productDetail)
router.put('/product/:id',updateProduct)
router.delete('/product/:id',removeProduct)
router.post("/uploadFile",upload.single("image"),uploadFile)

export default router;