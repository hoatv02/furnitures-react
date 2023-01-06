import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import BasicPagination from '../../../../component/Site/Pagination/Pagination'
import { useProductStore } from '../../../../Store/Product'
import styles from './Product.module.css'
// const products = [
//   {
//     id: 1,
//     name: "Earthen Bottle",
//     href: "#",
//     price: "$48",
//     imageSrc:
//       "http://cdn-img-v2.webbnc.net/uploadv2/web/81/8174/media/2018/09/09/12/02/1536450453_ban-ghe-an-hien-dai-3.jpg",
//     imageAlt:
//       "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
//   },
//   {
//     id: 2,
//     name: "Nomad Tumbler",
//     href: "#",
//     price: "$35",
//     imageSrc:
//       "https://i.pinimg.com/originals/54/ac/31/54ac31d1fe2e306a69414c735e0d67b7.jpg",
//     imageAlt:
//       "Olive drab green insulated bottle with flared screw lid and flat top.",
//   },{
//     id: 1,
//     name: "Earthen Bottle",
//     href: "#",
//     price: "$48",
//     imageSrc:
//       "http://winchair.vn/wp-content/uploads/2019/06/B%E1%BB%99-b%C3%A0n-%C4%83n-4-gh%E1%BA%BF-Dexer-hi%E1%BB%87n-%C4%91%E1%BA%A1i-CB008.jpg",
//     imageAlt:
//       "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
//   },
//   {
//     id: 2,
//     name: "Nomad Tumbler",
//     href: "#",
//     price: "$35",
//     imageSrc:
//       "http://xuonggoth.vn/wp-content/uploads/2018/03/ghe-linda-xuonggoth.jpg",
//     imageAlt:
//       "Olive drab green insulated bottle with flared screw lid and flat top.",
//   },{
//     id: 1,
//     name: "Earthen Bottle",
//     href: "#",
//     price: "$48",
//     imageSrc:
//       "https://gotrangtri.vn/wp-content/uploads/2016/07/ban-ghe-an-dep-GHS-4331-6.jpg",
//     imageAlt:
//       "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
//   },
//   {
//     id: 2,
//     name: "Nomad Tumbler",
//     href: "#",
//     price: "$35",
//     imageSrc:
//       "https://noithatdangkhoa.com/wp-content/uploads/2020/10/ban-hop-hien-dai-bhdk17.jpg",
//     imageAlt:
//       "Olive drab green insulated bottle with flared screw lid and flat top.",
//   },
//   {
//     id: 3,
//     name: "Focus Paper Refill",
//     href: "#",
//     price: "$89",
//     imageSrc:
//       "https://noithatxinh.vn/Images/Upload/images/5-bo-ban-ghe-an-dep-bang-go-dang-mua-nhat-nam-nay-5.jpg",
//     imageAlt:
//       "Person using a pen to cross a task off a productivity paper card.",
//   },
//   {
//     id: 4,
//     name: "Machined Mechanical Pencil",
//     href: "#",
//     price: "$35",
//     imageSrc:
//       "https://gotrangtri.vn/wp-content/uploads/2020/09/bo-ban-an-10-ghe-hien-dai-12-768x611.jpg",
//     imageAlt:
//       "Hand holding black machined steel mechanical pencil with brass tip and top.",
//   },{
//     id: 4,
//     name: "Machined Mechanical Pencil",
//     href: "#",
//     price: "$35",
//     imageSrc:
//       "https://ghevanphong247.com/wp-content/uploads/2021/09/Bo-ban-an-mat-da-1m4-4-ghe-an-hien-dai-E14-4.jpg",
//     imageAlt:
//       "Hand holding black machined steel mechanical pencil with brass tip and top.",
//   },
//   {
//     id: 4,
//     name: "Machined Mechanical Pencil",
//     href: "#",
//     price: "$35",
//     imageSrc:
//       "https://xuongnoithatdungcham.com/data/product/ban-an-6-ghe-go-soi-vuong%20(1).jpg",
//     imageAlt:
//       "Hand holding black machined steel mechanical pencil with brass tip and top.",
//   },
//   {
//     id: 4,
//     name: "Machined Mechanical Pencil",
//     href: "#",
//     price: "$35",
//     imageSrc:
//       "https://caotoanphat.com/wp-content/uploads/2022/04/bo-ban-an-4-ghe-hien-dai.jpg",
//     imageAlt:
//       "Hand holding black machined steel mechanical pencil with brass tip and top.",
//   },
//   {
//     id: 4,
//     name: "Machined Mechanical Pencil",
//     href: "#",
//     price: "$35",
//     imageSrc:
//       "https://caotoanphat.com/wp-content/uploads/2022/06/ban-concorde-6-ghe-hien-dai.jpg",
//     imageAlt:
//       "Hand holding black machined steel mechanical pencil with brass tip and top.",
//   },
//   {
//     id: 4,
//     name: "Machined Mechanical Pencil",
//     href: "#",
//     price: "$35",
//     imageSrc:
//       "https://gotrangtri.vn/wp-content/uploads/2020/09/ban-an-8-ghe-hien-dai-16.jpg",
//     imageAlt:
//       "Hand holding black machined steel mechanical pencil with brass tip and top.",
//   },
// ];
  
  export default function Product() {
    const products = useProductStore((state)=>state.products)
    const setProducts = useProductStore((state)=>state.setProducts)
    useEffect(()=>{
      setProducts()
    },[])
    return (
      <div className="bg-white">
        <div className="p-0 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          {/* <h2 className="sr-only">Products</h2> */}
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
            {products.map((product) => (
              <Link key={product.id} to={`/product/${product._id}`} className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={`http://localhost:3000/image/${product.image}`}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.productName}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price} VND</p>
              </Link>
            ))}
          </div>
            <div className={styles.paginationProduct}>
            <BasicPagination/>
            </div>
        </div>
      </div>
    )
  }
  


  