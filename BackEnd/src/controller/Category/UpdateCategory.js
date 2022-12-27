import Category from "../../models/Category/Category";
export const updateCategory = async (req, res) => {
    try {
        const body = req.body;
        const id = req.params.id
        const category = await Category.findOneAndUpdate({_id: id},body,{new:true});
        res.status(200).json({
            data: category
        })
    } catch (error) {
        res.status(400).json({
            message:'Cập nhật danh mục thất bại !'
        })
    }
}