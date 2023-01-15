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

export const FindProduct = async (req, res) => {
    try {
        const key = req.params.key;
        if(key === ''){
            const product = await Product.find();
            return res.status(200).json({
                data:product
            })

        }
        const data = await Product.find({
            '$or':[{
                productName:{$regex:key , $options : 'i'}
            }]
        })
        res.status(200).json({
            data:data ,
            message:"Tìm sản phẩm thành công"
        })
    } catch (error) {
        res.status(400).json({
            message:"Tìm sản phẩm thất bại"
        })
    }
}