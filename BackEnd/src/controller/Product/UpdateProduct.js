import Product from "../../models/Product/Product";
export const updateProduct = async (req, res) => {
    try {
        const body = req.body;
        const id = req.params.id
        const product = await Product.findOneAndUpdate({_id: id},body,{new:true});
        res.status(200).json({
            data: product
        })
    } catch (error) {
        res.status(400).json({
            message:'Cập nhật sản phẩm thất bại !'
        })
    }
}