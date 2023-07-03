import { Link } from "react-router-dom";
import ListCategory from "../../../component/Site/ListCategory/ListCategory";
import BasicPagination from "../../../component/Site/Pagination/Pagination";
import styles from "./Product.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../../Store/Redux/Slice/CartSlice";
import { ToastContainer, toast } from "react-toastify";
import ToastMessage from "../../../component/Site/ToastMessage/ToastMessage";
export default function Product() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.data);
  const notify = () => toast("Bạn đã thêm vào giỏ hàng :)))");
  return (
    <div className={`${styles.container_product} bg-white`}>
      <div className="mx-auto max-w-2xl py-2 px-2 sm:py-24 sm:px-4 lg:max-w-full lg:px-2">
        <div className="py-2">
          <ListCategory />
        </div>
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-x-8">
          {product.map((products, index) => (
            <div key={index}>
              <Link to={`/product/${products._id}`} className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={`http://localhost:8000/image/${products.image}`}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-2 text-sm text-gray-700">
                  {products.productName}
                </h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {products.price}
                </p>
              </Link>
             <button className="" onClick={notify}>  <button
                className="btn"
                type="submit"
                onClick={() => {
                  dispatch(
                    addCart({
                      id: products._id,
                      image: `http://localhost:8000/image/${products.image}`,
                      productName: products.productName,
                      price: products.price,
                      quantity:products.quantity
                    })
                  );
                }}
              >
                Add
              </button>
              </button>
            </div>
          ))}
        </div>
        <div className={`${styles.pagination} `}>
          <BasicPagination />
        </div>
      </div>
    </div>
  );
}
