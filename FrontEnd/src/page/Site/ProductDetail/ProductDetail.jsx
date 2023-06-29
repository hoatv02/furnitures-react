import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useProductDetailStore } from "../../../Store/Product";
import styles from "./ProductDetail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { ProductDetails } from "../../../Common/Api";
const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) => state.product.data);
  useEffect(() => {
    dispatch(ProductDetails({ id: id }));
  }, []);
  console.log(product.image);
  return (
    <div>
      <div className="bg-white">
        <div className="pt-2 ">
          <div className="mx-auto mt-6 mb-8 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8 ">
            <div className="aspect-w-2 aspect-h-1  overflow-hidden rounded-lg lg:block m-1">
              <img
                src={`http://localhost:8000/image/${product.image}`}
                alt="Two each of gray, white, and black shirts laying flat."
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className=" lg:grid lg:grid-cols-1 lg:gap-y-8 ">
              <div className="aspect-w-2 aspect-h-1 overflow-hidden rounded-lg m-1">
                <img
                  src={`http://localhost:8000/image/${product.image}`}
                  alt="Model wearing plain black basic tee."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-w-2 aspect-h-1 overflow-hidden rounded-lg m-1">
                <img
                  src={`http://localhost:8000/image/${product.image}`}
                  alt="Model wearing plain gray basic tee."
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="aspect-w-4 aspect-h-2 mb-5  sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4 m-1">
              <div className=" lg:row-span-3 lg:mt-0">
                <h2 className="text-2xl text-uppercase mb-3 font-bold ">
                  {product.productName}
                </h2>
                <p className="text-1xl tracking-tight text-red-400">
                 Giá : {product.price} VND
                </p>
                <div className="mt-2">
                  <h3 className="sr-only">Reviews</h3>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <svg
                        className="text-gray-900 h-5 w-5 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                      </svg>

                      <svg
                        className="text-gray-900 h-5 w-5 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                      </svg>

                      <svg
                        className="text-gray-900 h-5 w-5 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                      </svg>

                      <svg
                        className="text-gray-900 h-5 w-5 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                      </svg>

                      <svg
                        className="text-gray-200 h-5 w-5 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                      </svg>
                    </div>
                    {/* <p className="sr-only">4 out of 5 stars</p> */}
                    <a
                      href="#"
                      className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      117 ý kiến
                    </a>
                  </div>
                </div>

                <form className="mt-3">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Màu</h3>

                    <fieldset className="mt-2">
                      <legend className="sr-only">Choose a color</legend>
                      <div className="flex items-center space-x-3">
                        <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                          <input
                            type="radio"
                            name="color-choice"
                            value="White"
                            className="sr-only"
                            aria-labelledby="color-choice-0-label"
                          />
                          <span id="color-choice-0-label" className="sr-only">
                            {" "}
                            Trắng{" "}
                          </span>
                          <span
                            aria-hidden="true"
                            className="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full"
                          ></span>
                        </label>
                        <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                          <input
                            type="radio"
                            name="color-choice"
                            value="Gray"
                            className="sr-only"
                            aria-labelledby="color-choice-1-label"
                          />
                          <span id="color-choice-1-label" className="sr-only">
                            {" "}
                            Xám{" "}
                          </span>
                          <span
                            aria-hidden="true"
                            className="h-8 w-8 bg-gray-200 border border-black border-opacity-10 rounded-full"
                          ></span>
                        </label>
                        <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                          <input
                            type="radio"
                            name="color-choice"
                            value="Black"
                            className="sr-only"
                            aria-labelledby="color-choice-2-label"
                          />
                          <span id="color-choice-2-label" className="sr-only">
                            {" "}
                            Đen{" "}
                          </span>
                          <span
                            aria-hidden="true"
                            className="h-8 w-8 bg-gray-900 border border-black border-opacity-10 rounded-full"
                          ></span>
                        </label>
                      </div>
                    </fieldset>
                  </div>

                  <div className="mt-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-gray-900">
                        Kích thước
                      </h3>
                    </div>

                    <fieldset className="mt-5">
                      <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                        <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                          <input
                            type="radio"
                            name="size-choice"
                            value="L"
                            className="sr-only"
                            aria-labelledby="size-choice-4-label"
                          />
                          <span
                            id="size-choice-4-label "
                            className="flex text-center item-center justify-center text-[12px]"
                          >
                            2 Người
                          </span>
                          <span
                            className="pointer-events-none absolute -inset-px rounded-md"
                            aria-hidden="true"
                          ></span>
                        </label>

                        <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                          <input
                            type="radio"
                            name="size-choice"
                            value="XL"
                            className="sr-only"
                            aria-labelledby="size-choice-5-label"
                          />
                          <span
                            id="size-choice-4-label "
                            className="flex text-center item-center justify-center     text-[12px]"
                          >
                            5 Người
                          </span>

                          <span
                            className="pointer-events-none absolute -inset-px rounded-md"
                            aria-hidden="true"
                          ></span>
                        </label>

                        <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                          <input
                            type="radio"
                            name="size-choice"
                            value="2XL"
                            className="sr-only"
                            aria-labelledby="size-choice-6-label"
                          />
                          <span
                            id="size-choice-4-label "
                            className="flex text-center item-center justify-center     text-[12px]"
                          >
                            7 Người
                          </span>

                          <span
                            className="pointer-events-none absolute -inset-px rounded-md"
                            aria-hidden="true"
                          ></span>
                        </label>

                        <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                          <input
                            type="radio"
                            name="size-choice"
                            value="3XL"
                            className="sr-only"
                            aria-labelledby="size-choice-7-label"
                          />
                          <span
                            id="size-choice-4-label "
                            className="flex text-center item-center justify-center     text-[12px]"
                          >
                            10 Người
                          </span>

                          <span
                            className="pointer-events-none absolute -inset-px rounded-md"
                            aria-hidden="true"
                          ></span>
                        </label>
                      </div>
                    </fieldset>
                  </div>

                  <button
                    type="submit"
                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Add to bag
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className=" mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl border-t-2 lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            <div
              className={`${styles.contentProduct} lg:col-span-2  lg:pr-8 mt-5 `}
            >
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
               Mô tả
              </h1>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1  lg:pt-6 lg:pb-16 lg:pr-8">
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Nổi bật
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    <li className="text-gray-400">
                      <span className="text-gray-600">
                        Chất lượng gỗ Tốt
                      </span>
                    </li>

                    <li className="text-gray-400">
                      <span className="text-gray-600">
                        Được nhiều người tin dùng
                      </span>
                    </li>

                    <li className="text-gray-400">
                      <span className="text-gray-600">
                        Giá cả cân bằng thị trường
                      </span>
                    </li>

                    <li className="text-gray-400">
                      <span className="text-gray-600">
                        Nhận đặt theo kích thước của khách hàng
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Chi tiết</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">
                  Bàn ghế được làm từ chất liệu gỗ tự nhiên luôn là sản phẩm hút người dùng, và không bao giờ lỗi thời. Việc có mặt của một bộ bàn ghế phong khách hiện đại gỗ tự nhiên khẳng định đẳng cấp của gia chủ nói riêng và phong cách thiết kế nội thất phòng khách của người Việt nói chung.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
