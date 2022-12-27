import { response } from "express";
import Product from "../../models/Product/Product";
export const getAllProduct = async (req, res) => {
    try {
        const product = await Product.find()
        res.status(200).json({
            data:product
        })
    } catch (error) {
        res.status(400).json({
            message:"Lấy danh sách sản phẩm thất bại !"
        })
    }
}
export const productDetail = async (req,res)=>{
    try {
        const id = req.params.id
        const product = await Product.findOne({_id:id})
        res.status(200).json({
            data:product
        })
    } catch (error) {
        res.status(400).json({
            message:'Lấy chi tiết sản phẩm thất bại'
        })
    }
}