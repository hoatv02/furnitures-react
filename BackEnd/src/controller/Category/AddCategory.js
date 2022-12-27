import Category from "../../models/Category/Category"

export const AddCategory = async (req,res)=>{
    try {
        const body = req.body
        const category = await new Category(body).save()
        res.status(200).json({
            data:category,
        })
    } catch (error) {
        res.status(400).json({
            message:'Thêm danh mục thất bại !'
        })
    }
}