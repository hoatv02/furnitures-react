import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import ProductRouter from "./routes/Product/Product";
import CategoryRouter from "./routes/Category/Category";
import AuthRouter from "./routes/Auth/Auth";
import CartRouter from './routes/Cart/Cart'
import path from "path";

const app = express();

// middleware
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use("/image", express.static(path.join(__dirname + `\\UploadImage`)));
app.use(ProductRouter);
app.use(CategoryRouter);
app.use(AuthRouter);
app.use(CartRouter)
// connnect database
mongoose
  .connect("mongodb://127.0.0.1/furnitureShop")
  .then(() => console.log("Kết nối db thành công"))
  .catch((error) => console.log(error));

// connection
const PORT = 8000;
app.listen(PORT, () => {
  console.log("Server is running port", PORT);
});
