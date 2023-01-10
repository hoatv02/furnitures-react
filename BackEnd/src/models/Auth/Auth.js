import mongoose from 'mongoose';
import {createHmac} from 'crypto'
const AuthSchema  = mongoose.Schema({
        userName : {
            required: true,
            type: String,
        },
        email : {
            unique: true,
            required: true,
            type: String,
        },
        password : {
            required: true,
            type: String,
        },
        phoneNumber : {
            required: true,
            type: Number,
        },
        address : {
            // required: true,
            type: String,
        }

},{timetamps:true})

AuthSchema.methods={
    authenticate : function(password){
        return this.password === this.encryptPassword(password);
    },
    encryptPassword : function(password){
        if(!password) return ''
        return createHmac('sha256', '123456').update(password).digest('hex')
    }
}
AuthSchema.pre('save', function(next){
    this.password = this.encryptPassword(this.password);
    next()
})

export default mongoose.model("Auth",AuthSchema)