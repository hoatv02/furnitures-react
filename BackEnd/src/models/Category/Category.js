import mongoose from "mongoose";
const CategorySchema = mongoose.Schema({
    id:{
        type:Number,
    },
    categoryName:{
        type:String,
    }
})

export default mongoose.model('Category', CategorySchema)