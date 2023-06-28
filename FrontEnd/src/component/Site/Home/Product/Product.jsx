import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import BasicPagination from '../../../../component/Site/Pagination/Pagination'
import styles from './Product.module.css'
import axios from 'axios'
import { useSelector } from 'react-redux';
export default function Product() {
  const product = useSelector((state)=>state.product.data)
  return (
    <div className="bg-white">
      <div className="p-0 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
          {product.map((product) => (
              <Link key={product.id} to={`/product/${product._id}`} className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={`http://localhost:8000/image/${product.image}`}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.productName}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price} VND</p>
              </Link>
            ))}
        </div>
        <div className={styles.paginationProduct}>
          <BasicPagination />
        </div>
      </div>
    </div>
  )
}



