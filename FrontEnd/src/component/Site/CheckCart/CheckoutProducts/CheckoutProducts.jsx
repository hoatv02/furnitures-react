import React from "react";
import styles from "./CheckoutProducts.module.css";
import WestIcon from "@mui/icons-material/West";
// import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import EastIcon from "@mui/icons-material/East";
// import imgProducts from "../../../../assets/img/seafood-1.jpg";
import DeleteIcon from "@mui/icons-material/Delete";

// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
import ProductCart from "./ProductCart";
import { Link } from "react-router-dom";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";
const productsCart = [
  {
    img: "",
    name: "One Plus 7T Pro",
    content: "256 Go,Nebula Blue",
    price: "$800.00",
  },
  {
    img: "",
    name: "One Plus 7T Pro",
    content: "256 Go,Nebula Blue",
    price: "$800.00",
  },
  {
    img: "",
    name: "One Plus 7T Pro",
    content: "256 Go,Nebula Blue",
    price: "$800.00",
  },
];

function CheckOutProducts() {
  const cart = useSelector((state) => state.cart.cart);
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className="col-span-2 py-2 px-5">
        <h1 className="text-xl font-medium ">Giỏ hàng của bạn !</h1>
        <div
          className={`${styles.header} inline-flex w-full flex justify-between py-3`}
        >
          <div className={`${styles.previous} `}>
            <h4>
              <Link to="/">
                <WestIcon /> Quay lại
              </Link>
            </h4>
          </div>
          <div className={`${styles.next}`}>
            <h4>
              <Link to="/CheckCart">
                Tiếp tục mua hàng <EastIcon />
              </Link>
            </h4>
          </div>
        </div>
        {cart.map((item, index) => {
          return (
            <div
              className="flex justify-between items-center mt-6 pt-6"
              key={index}
            >
              <div className="flex  items-center">
                <img src={item.image} width="60" className="rounded-full " />

                <div className="flex flex-col ml-3">
                  <span className="md:text-md font-medium">
                    {item.productName}
                  </span>
                  <span className="text-xs font-light text-gray-400">
                    #41551
                  </span>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <div className="pr-8 flex ">
                  <span className="font-semibold">-</span>
                  <input
                    type="text"
                    className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
                    value={quantity}
                  />
                  <span className="font-semibold">+</span>
                </div>

                <div className="pr-8 ">
                  <span className="text-xs font-medium">{item.price} VND</span>
                </div>
                <div>
                  <DeleteIcon />
                </div>
              </div>
            </div>
          );
        })}

        <div className="flex justify-between items-center mt-6 pt-6 border-t">
          <div className="flex items-center">
            <span className="text-md  font-medium text-blue-500"></span>
          </div>

          <div className="flex justify-center items-end">
            <span className="text-sm font-medium text-gray-400 mr-1">
              Subtotal:
            </span>
            <span className="text-lg font-bold text-gray-800 "> $24.90</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOutProducts;
