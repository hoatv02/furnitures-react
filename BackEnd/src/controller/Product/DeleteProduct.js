import Product from "../../models/Product/Product";
export const removeProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findOneAndDelete({_id: id})
        res.status(200).json({
            data: product
        })
    } catch (error) {
        res.status(404).json({
            message:'Xóa sản phẩm thất bại !'
        })
    }
}