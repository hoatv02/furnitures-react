import Category from "../../models/Category/Category";
export const getAllCategory = async (req, res) => {
    try {
        const category = await Category.find();
        res.status(200).json({
            data:category
        })
    } catch (error) {
        res.status(400).json({
            message:"Lấy danh sách danh mục thất bại !"
        })
    }
}
export const categoryDetail = async (req, res) => {
    try {
        const id = req.params.id
        console.log(id)
        const category = await Category.findOne({_id:id});
        console.log(category)
        res.status(200).json({
            data:category
        })
    } catch (error) {
        res.status(400).json({
            message:"Lấy Chi tiết danh mục thất bại !"
        })
    }
}