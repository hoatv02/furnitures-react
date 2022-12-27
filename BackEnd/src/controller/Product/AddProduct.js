import Product from "../../models/Product/Product";
export const AddProduct = async (req,res)=>{
    try {
        const body = req.body
        const product = await new Product(body).save()
        res.status(200).json({
            data:product,
        })
    } catch (error) {
        res.status(400).json({
            message:'Thêm sản phẩm thất bại !'
        })
    }
}