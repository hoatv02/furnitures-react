import React, { useState } from "react";
import styles from "./About.module.css";
const About = () => {
  const [isLogin] = useState(localStorage.getItem("AccessToken") != null);

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto">
          <div className="lg:flex lg:-mx-2">
            <div className="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
              <div className="mb-20">
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                  <div className="mb-12 space-y-2 text-center">
                    <span className="block w-max mx-auto px-3 py-1.5 border border-green-200 rounded-full bg-green-100 text-green-600">
                      GIỚI THIỆU
                    </span>
                    <h2 className="text-2xl text-cyan-900 font-bold md:text-4xl p-3">
                      BÀN GHẾ HIỆN ĐẠI
                    </h2>
                    <p className="lg:w-6/12 lg:mx-auto">
                      Bàn ghế được làm từ chất liệu gỗ tự nhiên luôn là sản phẩm
                      hút người dùng, và không bao giờ lỗi thời. Việc có mặt của
                      một bộ bàn ghế phong khách hiện đại gỗ tự nhiên khẳng định
                      đẳng cấp của gia chủ nói riêng và phong cách thiết kế nội
                      thất phòng khách của người Việt nói chung.
                    </p>
                  </div>

                  <div className="grid gap-12 lg:grid-cols-2">
                    <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                      <img
                        src="https://noithatvaxuco.vn/uploads/shops/goc-oc-1.png"
                        alt="art cover"
                        loading="lazy"
                        className="h-100 sm:h-full  sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
                      />
                      <div className="sm:w-7/12 pl-0 p-10">
                        <div className="space-y-2">
                          <div className="space-y-4">
                            <h4 className="text-2xl  text-cyan-900">
                              BỘ GÓC ÓC CHÓ.
                            </h4>
                            <p className="text-gray-600">
                              <p>Giá bán: Liên hệ</p>
                              <p>Chất liệu : Gỗ Óc chó đã qua tẩm.</p>
                            </p>
                          </div>
                          <a
                            href="www.tailus.io"
                            className="block w-max text-cyan-600"
                          >
                            Đọc thêm
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                      <img
                        src="https://khobanghe.vn/wp-content/uploads/2017/09/bo-ban-an-ashley.png"
                        alt="art cover"
                        loading="lazy"
                        width="1000"
                        height="667"
                        className="h-100 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
                      />
                      <div className="sm:w-7/12 pl-0 p-10 ">
                        <div className="space-y-2">
                          <div className="space-y-4">
                            <h4 className="text-2xl font-semibold text-cyan-900">
                              BỘ BÀN ĂN KUDO
                            </h4>
                            <p className="text-gray-600">
                              <p>Chất liệu : Gỗ cao su.</p>
                              <p>Màu sắc : Gỗ màu nâu / vàng tự nhiên.…</p>
                            </p>
                          </div>
                          <a
                            href="www.tailus.io"
                            className="block w-max text-cyan-600"
                          >
                            Đọc thêm
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-16 mt-20 pb-0 bg-white">
                  <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                      <div className="md:5/12 lg:w-5/12">
                        <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                          loading="lazy"
                          width=""
                          height=""
                        />
                      </div>
                      <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          Tổng hợp các mẫu bộ bàn ghế phòng khách đẹp, hiện đại,
                          thịnh hành 2023
                        </h2>
                        <p className="mt-6 text-gray-600">
                          Bước đầu tiên để tạo ra không gian sống mơ ước chính
                          là tìm được một mẫu nội thất hoàn hảo, phù hợp với
                          thiết kế của căn nhà và sở thích của bạn. Để việc chọn
                          lựa được dễ dàng hơn, Cleanipedia đã tổng hợp giúp bạn
                          các mẫu bộ bàn ghế phòng khách đang thịnh hành nhất
                          2023. Bạn có thể tùy chọn với rất nhiều kiểu dáng đa
                          dạng, phong cách cổ điển hay sang trọng đều có đủ
                          trong bài viết dưới đây.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <section className="text-gray-600 body-font">
                <span className="block w-max mx-auto px-3 py-1.5 border border-green-200 rounded-full bg-green-100 text-green-600">
                  TIN TỨC
                </span>
                <p className="text-center p-2 text-2xl">
                  Những tin tức mới nhất được cập nhật{" "}
                </p>
                <div className="container px-5  mx-auto">
                  <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/3">
                      <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                        <img
                          className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                          src="https://tse3.mm.bing.net/th?id=OIP.4NEmZS2nAtBuX3qc3kdQEgHaFD&pid=Api&P=0"
                          alt="blog"
                        />
                        <div className="p-6">
                          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                            CATEGORY-1
                          </h2>
                          <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                            The Catalyzer
                          </h1>
                          <p className="leading-relaxed mb-3">
                            Photo booth fam kinfolk cold-pressed sriracha
                            leggings jianbing microdosing tousled waistcoat.
                          </p>
                          <div className="flex items-center flex-wrap ">
                            <button className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                              Learn more
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                      <div className="h-full rounded-xl shadow-cla-violate bg-gradient-to-r from-pink-50 to-red-50 overflow-hidden">
                        <img
                          className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                          src="https://tse3.explicit.bing.net/th?id=OIP.7Euqdprlyi6zQPdfhQWRogHaE7&pid=Api&P=0"
                          alt="blog"
                        />
                        <div className="p-6">
                          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                            CATEGORY-1
                          </h2>
                          <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                            The Catalyzer
                          </h1>
                          <p className="leading-relaxed mb-3">
                            Photo booth fam kinfolk cold-pressed sriracha
                            leggings jianbing microdosing tousled waistcoat.
                          </p>
                          <div className="flex items-center flex-wrap ">
                            <button className="bg-gradient-to-r from-orange-300 to-amber-400 hover:scale-105 drop-shadow-md shadow-cla-violate px-4 py-1 rounded-lg">
                              Learn more
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                      <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                        <img
                          className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                          src="https://tse4.mm.bing.net/th?id=OIP.tiSabsrtBK_fmku4OCH7CgHaFj&pid=Api&P=0"
                          alt="blog"
                        />
                        <div className="p-6">
                          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                            CATEGORY-1
                          </h2>
                          <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                            The Catalyzer
                          </h1>
                          <p className="leading-relaxed mb-3">
                            Photo booth fam kinfolk cold-pressed sriracha
                            leggings jianbing microdosing tousled waistcoat.
                          </p>
                          <div className="flex items-center flex-wrap ">
                            <button className="bg-gradient-to-r from-fuchsia-300 to-pink-400 hover:scale-105  shadow-cla-blue px-4 py-1 rounded-lg">
                              Learn more
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container px-5  mx-auto">
                  <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/3">
                      <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                        <img
                          className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                          src="https://tse4.mm.bing.net/th?id=OIP.BdjixXzxQ1PCarxXbbPMrQHaE8&pid=Api&P=0"
                          alt="blog"
                        />
                        <div className="p-6">
                          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                            CATEGORY-1
                          </h2>
                          <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                            The Catalyzer
                          </h1>
                          <p className="leading-relaxed mb-3">
                            Photo booth fam kinfolk cold-pressed sriracha
                            leggings jianbing microdosing tousled waistcoat.
                          </p>
                          <div className="flex items-center flex-wrap ">
                            <button className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                              Learn more
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                      <div className="h-full rounded-xl shadow-cla-violate bg-gradient-to-r from-pink-50 to-red-50 overflow-hidden">
                        <img
                          className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                          src="https://tse4.mm.bing.net/th?id=OIP.mLCSC_IHOoJxjw10YSTv3gHaFj&pid=Api&P=0"
                          alt="blog"
                        />
                        <div className="p-6">
                          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                            CATEGORY-1
                          </h2>
                          <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                            The Catalyzer
                          </h1>
                          <p className="leading-relaxed mb-3">
                            Photo booth fam kinfolk cold-pressed sriracha
                            leggings jianbing microdosing tousled waistcoat.
                          </p>
                          <div className="flex items-center flex-wrap ">
                            <button className="bg-gradient-to-r from-orange-300 to-amber-400 hover:scale-105 drop-shadow-md shadow-cla-violate px-4 py-1 rounded-lg">
                              Learn more
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                      <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                        <img
                          className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                          src="https://tse4.mm.bing.net/th?id=OIP.tl8sbwtWZ81spGQc2D44vwHaFU&pid=Api&P=0"
                          alt="blog"
                        />
                        <div className="p-6">
                          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                            CATEGORY-1
                          </h2>
                          <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                            The Catalyzer
                          </h1>
                          <p className="leading-relaxed mb-3">
                            Photo booth fam kinfolk cold-pressed sriracha
                            leggings jianbing microdosing tousled waistcoat.
                          </p>
                          <div className="flex items-center flex-wrap ">
                            <button className="bg-gradient-to-r from-fuchsia-300 to-pink-400 hover:scale-105  shadow-cla-blue px-4 py-1 rounded-lg">
                              Learn more
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div
              className={`${styles.form_container} space-y-3 lg:w-1/5 lg:px-3 lg:space-y-4 shadow-md`}
            >
              <div className={`${styles.formComment}`}>
                <form action="" className="p-2">
                  <h3 className="p-3 bg-gray-100 mt-2 mb-2 m-0 text-center">
                    Bình Luận
                  </h3>
                  <input
                    type="text"
                    className="w-full mb-2  rounded-md border"
                    placeholder="Email..."
                  />
                  <input
                    type="text"
                    className="w-full mb-2 rounded-md border"
                    placeholder="UserName..."
                  />
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    className="w-full rounded-md border"
                    placeholder="Message..."
                  ></textarea>
                  {isLogin ? (
                    <button
                      className="p-2 w-full bg-gray-100 mt-2 mb-2 m-0 text-center shadow-md"
                      disabled
                    >
                      SEN MESSAGE
                    </button>
                  ) : (
                    <div>
                      <button className="p-2 w-full bg-gray-100 mt-2 mb-2 m-0 text-center shadow-md">
                        SEN MESSAGE
                      </button>
                      <p className="text-red-500 font-bold text-sm my-10">
                        Vui lòng đăng nhập để thực hiện chức năng này !
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
