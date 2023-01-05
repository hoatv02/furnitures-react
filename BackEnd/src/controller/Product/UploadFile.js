import Product from "../../models/Product/Product"

export const uploadFile = async (req, res) => {
    try {
        res.status(200).json({
            message: "Upload thành công"
        })
    } catch (error) {
        res.status(400).json({
            message: "Upload thất bại"
        })
    }
}
Product.find({ name: "ok" }, (error, data) => {
    if (error) {
        console.log(error)
    } else {
        console.log(data)
    }
})
