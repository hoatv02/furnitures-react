import React from "react";
import styles from "./About.module.css";
const About = () => {
  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="   mx-auto">
          <div class="lg:flex lg:-mx-2">
            <div class="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
              <div class="mb-20">
                <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                  <div class="mb-12 space-y-2 text-center">
                    <span class="block w-max mx-auto px-3 py-1.5 border border-green-200 rounded-full bg-green-100 text-green-600">
                      GIỚI THIỆU
                    </span>
                    <h2 class="text-2xl text-cyan-900 font-bold md:text-4xl p-3">
                      BÀN GHẾ HIỆN ĐẠI
                    </h2>
                    <p class="lg:w-6/12 lg:mx-auto">
                      Bàn ghế được làm từ chất liệu gỗ tự nhiên luôn là sản phẩm
                      hút người dùng, và không bao giờ lỗi thời. Việc có mặt của
                      một bộ bàn ghế phong khách hiện đại gỗ tự nhiên khẳng định
                      đẳng cấp của gia chủ nói riêng và phong cách thiết kế nội
                      thất phòng khách của người Việt nói chung.
                    </p>
                  </div>

                  <div class="grid gap-12 lg:grid-cols-2">
                    <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                      <img
                        src="https://noithatvaxuco.vn/uploads/shops/goc-oc-1.png"
                        alt="art cover"
                        loading="lazy"
                        class="h-100 sm:h-full  sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
                      />
                      <div class="sm:w-7/12 pl-0 p-2">
                        <div class="space-y-2">
                          <div class="space-y-4">
                            <h4 class="text-2xl  text-cyan-900">
                              BỘ GÓC ÓC CHÓ.
                            </h4>
                            <p class="text-gray-600">
                              <p>Giá bán: Liên hệ</p>
                              <p>Chất liệu : Gỗ Óc chó đã qua tẩm.</p>
                            </p>
                          </div>
                          <a
                            href="www.tailus.io"
                            class="block w-max text-cyan-600"
                          >
                            Read more
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                      <img
                        src="https://khobanghe.vn/wp-content/uploads/2017/09/bo-ban-an-ashley.png"
                        alt="art cover"
                        loading="lazy"
                        width="1000"
                        height="667"
                        class="h-100 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
                      />
                      <div class="sm:w-7/12 pl-0 p-2">
                        <div class="space-y-2">
                          <div class="space-y-4">
                            <h4 class="text-2xl font-semibold text-cyan-900">
                              BỘ BÀN ĂN KUDO
                            </h4>
                            <p class="text-gray-600 md:hidden">
                              <p>Chất liệu : Gỗ cao su.</p>
                              <p>Màu sắc : Gỗ màu nâu / vàng tự nhiên.…</p>
                            </p>
                          </div>
                          <a
                            href="www.tailus.io"
                            class="block w-max text-cyan-600"
                          >
                            Read more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pt-16 pb-0 bg-white">
                    <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                      <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div class="md:5/12 lg:w-5/12">
                          <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                            loading="lazy"
                            width=""
                            height=""
                          />
                        </div>
                        <div class="md:7/12 lg:w-6/12">
                          <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">
                            Nuxt development is carried out by passionate
                            developers
                          </h2>
                          <p class="mt-6 text-gray-600">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Eum omnis voluptatem accusantium nemo
                            perspiciatis delectus atque autem! Voluptatum
                            tenetur beatae unde aperiam, repellat expedita
                            consequatur! Officiis id consequatur atque
                            doloremque!
                          </p>
                          <p class="mt-4 text-gray-600">
                            {" "}
                            Nobis minus voluptatibus pariatur dignissimos libero
                            quaerat iure expedita at? Asperiores nemo possimus
                            nesciunt dicta veniam aspernatur quam mollitia.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              <section class="text-gray-600 body-font">
                <span class="block w-max mx-auto px-3 py-1.5 border border-green-200 rounded-full bg-green-100 text-green-600">
                  TIN TỨC
                </span>
                <p className="text-center p-2 text-2xl">
                  Những tin tức mới nhất được cập nhật{" "}
                </p>
                <div class="container px-5  mx-auto">
                  <div class="flex flex-wrap -m-4">
                    <div class="p-4 md:w-1/3">
                      <div class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                        <img
                          class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                          src="https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                          alt="blog"
                        />
                        <div class="p-6">
                          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                            CATEGORY-1
                          </h2>
                          <h1 class="title-font text-lg font-medium text-gray-600 mb-3">
                            The Catalyzer
                          </h1>
                          <p class="leading-relaxed mb-3">
                            Photo booth fam kinfolk cold-pressed sriracha
                            leggings jianbing microdosing tousled waistcoat.
                          </p>
                          <div class="flex items-center flex-wrap ">
                            <button class="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                              Learn more
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="p-4 md:w-1/3">
                      <div class="h-full rounded-xl shadow-cla-violate bg-gradient-to-r from-pink-50 to-red-50 overflow-hidden">
                        <img
                          class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                          src="https://images.unsplash.com/photo-1624628639856-100bf817fd35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                          alt="blog"
                        />
                        <div class="p-6">
                          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                            CATEGORY-1
                          </h2>
                          <h1 class="title-font text-lg font-medium text-gray-600 mb-3">
                            The Catalyzer
                          </h1>
                          <p class="leading-relaxed mb-3">
                            Photo booth fam kinfolk cold-pressed sriracha
                            leggings jianbing microdosing tousled waistcoat.
                          </p>
                          <div class="flex items-center flex-wrap ">
                            <button class="bg-gradient-to-r from-orange-300 to-amber-400 hover:scale-105 drop-shadow-md shadow-cla-violate px-4 py-1 rounded-lg">
                              Learn more
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="p-4 md:w-1/3">
                      <div class="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                        <img
                          class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                          src="https://images.unsplash.com/photo-1631700611307-37dbcb89ef7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
                          alt="blog"
                        />
                        <div class="p-6">
                          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                            CATEGORY-1
                          </h2>
                          <h1 class="title-font text-lg font-medium text-gray-600 mb-3">
                            The Catalyzer
                          </h1>
                          <p class="leading-relaxed mb-3">
                            Photo booth fam kinfolk cold-pressed sriracha
                            leggings jianbing microdosing tousled waistcoat.
                          </p>
                          <div class="flex items-center flex-wrap ">
                            <button class="bg-gradient-to-r from-fuchsia-300 to-pink-400 hover:scale-105  shadow-cla-blue px-4 py-1 rounded-lg">
                              Learn more
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <div class="container px-5  mx-auto">
                  <div class="flex flex-wrap -m-4">
                    <div class="p-4 md:w-1/3">
                      <div class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                        <img
                          class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                          src="https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                          alt="blog"
                        />
                        <div class="p-6">
                          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                            CATEGORY-1
                          </h2>
                          <h1 class="title-font text-lg font-medium text-gray-600 mb-3">
                            The Catalyzer
                          </h1>
                          <p class="leading-relaxed mb-3">
                            Photo booth fam kinfolk cold-pressed sriracha
                            leggings jianbing microdosing tousled waistcoat.
                          </p>
                          <div class="flex items-center flex-wrap ">
                            <button class="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                              Learn more
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="p-4 md:w-1/3">
                      <div class="h-full rounded-xl shadow-cla-violate bg-gradient-to-r from-pink-50 to-red-50 overflow-hidden">
                        <img
                          class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                          src="https://images.unsplash.com/photo-1624628639856-100bf817fd35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                          alt="blog"
                        />
                        <div class="p-6">
                          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                            CATEGORY-1
                          </h2>
                          <h1 class="title-font text-lg font-medium text-gray-600 mb-3">
                            The Catalyzer
                          </h1>
                          <p class="leading-relaxed mb-3">
                            Photo booth fam kinfolk cold-pressed sriracha
                            leggings jianbing microdosing tousled waistcoat.
                          </p>
                          <div class="flex items-center flex-wrap ">
                            <button class="bg-gradient-to-r from-orange-300 to-amber-400 hover:scale-105 drop-shadow-md shadow-cla-violate px-4 py-1 rounded-lg">
                              Learn more
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="p-4 md:w-1/3">
                      <div class="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                        <img
                          class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                          src="https://images.unsplash.com/photo-1631700611307-37dbcb89ef7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
                          alt="blog"
                        />
                        <div class="p-6">
                          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                            CATEGORY-1
                          </h2>
                          <h1 class="title-font text-lg font-medium text-gray-600 mb-3">
                            The Catalyzer
                          </h1>
                          <p class="leading-relaxed mb-3">
                            Photo booth fam kinfolk cold-pressed sriracha
                            leggings jianbing microdosing tousled waistcoat.
                          </p>
                          <div class="flex items-center flex-wrap ">
                            <button class="bg-gradient-to-r from-fuchsia-300 to-pink-400 hover:scale-105  shadow-cla-blue px-4 py-1 rounded-lg">
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
              class={`${styles.form_container} space-y-3 lg:w-1/5 lg:px-3 lg:space-y-4 shadow-md`}
            >
              <div className={`${styles.formComment}`}>
                <form action="" className="p-2">
                  <h3 className="p-3 bg-gray-100 mt-2 mb-2 m-0 text-center">
                    COMMENT
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
                  <h3 className="p-2 bg-gray-100 mt-2 mb-2 m-0 text-center">
                    SEN MESSAGE
                  </h3>
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
