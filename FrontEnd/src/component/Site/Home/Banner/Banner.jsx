import axios from 'axios';
import styles from './Banner.module.css'
export default function Banner() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48 ">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h6 className="font text-1xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              BÀN GHẾ PHONG CÁCH HIỆN ĐẠI
            </h6>
            <p className="mt-4 text-sm text-gray-500">
            Ghế cà phê ngoài trời được làm từ gỗ thịt 100% nên tránh xa hiện tượng co rút, cong vênh phù hợp với thời tiết, khí hậu Việt Nam. Đặc biệt, sản phẩm có thiết kế đẹp mắt, rất hợp dùng cho showroom, quán cà phê, nhà hàng,… trong nhà và ngoài trời.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className={styles.bannerImg}>
                  <div className="flex items-center space-x-6 lg:space-x-8 " >
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 ">
                        <img
                          src="https://api.282design.com/storage/images/items/sm_2021_05_25_930f7f0d6312e7cfcaf907709fba6ef2.png"
                          alt=""
                          className="h-full w-full  object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg ">
                        <img
                          src="https://nghiafurniture.com/product_images/ghe-grace-co-tay-go-cao-su-14033.png"
                          alt=""
                          className="h-full w-full  object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg ">
                        <img
                          src=""
                          alt=""
                          className=" w-full object-center"
                        />
                      </div>
                      <div className="h-64 mt-20 w-44 overflow-hidden rounded-lg ">
                        <img
                          src="https://dongagroup.vn/upload/san-pham/2022/07/large-bo-ban-an-6-ghe-donna-han-quoc-637937525686797172.png"
                          alt=""
                          className=" w-full  object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg ">
                        <img
                          src=""
                          alt=""
                          className=" w-full object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 mt-20 w-44 overflow-hidden rounded-lg ">
                        <img
                          src="https://nt1099.com/wp-content/uploads/H18S2099_HD-1536x1024.png"
                          alt=""
                          className=" w-full  object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg ">
                        <img
                          src="https://product.hstatic.net/1000358355/product/4r3a9964-600x600_571438e78d814eb6b72427b504511a19_1024x1024.png"
                          alt=""
                          className=" w-full object-center"
                        />
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-indigo-600 py-2 px-8 text-center font-medium text-white hover:bg-indigo-700"
              >
                Mua ngay
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
