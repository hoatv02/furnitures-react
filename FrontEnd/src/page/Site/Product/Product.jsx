import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ListCategory from "../../../component/Site/ListCategory/ListCategory";
import Loading from "../../../component/Site/Loading/Loading";
import BasicPagination from '../../../component/Site/Pagination/Pagination'
import { useCategoryStore } from "../../../Store/Category";
import { useProductStore } from "../../../Store/Product";
import styles from './Product.module.css'

export default function Product() {
  // const products = useProductStore((state)=>state.products)
  // const setProducts = useProductStore((state)=>state.setProducts)
  // useEffect(()=>{
  //   setProducts(products)
  // },[])
  return (
    <div className={`${styles.container_product} bg-white`}>
      <div className="mx-auto max-w-2xl py-2 px-2 sm:py-24 sm:px-4 lg:max-w-full lg:px-2">
        <div className="py-2">
          <ListCategory />
        </div>
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-x-8">
          {/* {products.map((product) => (
            <Link key={product.id} to={`/product/${product._id}`} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={`http://localhost:8000/image/${product.image}`}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-2 text-sm text-gray-700">{product.productName}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </Link>
          ))} */}
        </div>
        <div className={`${styles.pagination} `}>
          <BasicPagination/>
        </div>
      </div>
    </div>
  );
}
