import mongoose from "mongoose";
const CartSchema = mongoose.Schema({
    productName:{
        type: String,
    },
    price:{
        type: Number,
    },
    description:{
        type: String,
    },
    categoryName:{
        type:mongoose.ObjectId,
        type: String,
    },
    image:{
        type: String,
    },
    quantity:{
        type: Number,
    }
})

export default mongoose.model('Cart', CartSchema)