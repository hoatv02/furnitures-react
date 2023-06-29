import Auth from  '../../models/Auth/Auth.js'

export const getAllUser = async (req,res)=>{
    try {
        const user = await Auth.find()
        res.status(200).json({
            data:user
        })
    } catch (error) {
        res.status(400).json({
            message:"Lấy danh sách user thất bại !"
        })
    }
}