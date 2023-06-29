import Cart from "../../models/Cart/Cart";
export const getCart = async (req, res) => {
  try {
    const cartItems = [];
    res.status(200).json({
      data: cartItems,
    });
  } catch (error) {
    res.status(400).json({
      message: "Lấy Cart thất bại !",
    });
  }
};

export const addCart = (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const existingItem = cartItems.find((item) => item.productId === productId);
    if (existingItem) {
      existingItem.quantity += parseInt(quantity);
    } else {
      cartItems.push({
        productId: productId,
        quantity: parseInt(quantity),
      });
    }
    res.status(200).json({
        message:"Thêm sản phẩm vào giỏ hàng thành công !"
    })
  } catch (error) {
    res.status(400).json({
        message:"Thêm sản phẩm vào giỏ hàng thất bại !"
    })
  }
};
