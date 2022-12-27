import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import ProductRouter from './routes/Product/Product'
import CategoryRouter from './routes/Category/Category'

const app = express();

// middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json())

app.use(ProductRouter)
app.use(CategoryRouter)
// connnect database
mongoose.connect('mongodb://localhost:27017/furnitureShop')
    .then(() => console.log("Kết nối db thành công"))
    .catch((error) => console.log(error));
    
// connection
const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is running port", PORT);
})