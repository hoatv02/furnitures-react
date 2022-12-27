import Category from "../../models/Category/Category";
export const removeCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await Category.findOneAndDelete({_id: id})
        res.status(200).json({
            data: category
        })
    } catch (error) {
        res.status(404).json({
            message:'Xóa danh mục thất bại !'
        })
    }
}