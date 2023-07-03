import Auth from "../../models/Auth/Auth";
import jwt from 'jsonwebtoken'
export const signup =async(req, res)=>{
    try {
        const body = req.body;
        const exitsUser = await Auth.findOne({email: body.email})
        if(exitsUser){
            return res.status(400).json({message:"Email đã tồn tại"})
        }
        const user = await new Auth(body).save()
        res.status(200).json({data:user})
    } catch (error) {
        res.status(400).json({
            message:"Đăng kí tài khoản thất bại"
        })
    }
}
export const signin = async (req, res) => {
    try {
        const body = req.body;
        const user = await Auth.findOne({email : body.email})
        if(!user){
            return res.status(404).json({
                message:"Email khong ton tai"})
        }
        if (!user.authenticate(body.password)) {
            return res.status(404).json({
                message:"Mat khau khong dung"})
        }
        const token = jwt.sign({_id:user._id,admin:user.admin},"123456")
        user.password = undefined;
        return res.status(200).json({
            data: user,
            accessToken: token,
        });

    } catch (error) {
        
    }
}