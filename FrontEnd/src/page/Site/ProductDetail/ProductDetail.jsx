import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductDetailStore } from "../../../Store/Product";
import styles from "./ProductDetail.module.css";
const ProductDetail = () => {
  const products = useProductDetailStore((state) => state.products);
  const setProducts = useProductDetailStore((state) => state.setProducts);
  const { id } = useParams();
  useEffect(() => {
    console.log(setProducts(id, (res) => res.data.data.id));
  }, [id]);
  return (
    <div>
      <div class="bg-white">
        <div class="pt-2 ">
          <div class="mx-auto mt-6 mb-8 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8 ">
            <div class="aspect-w-2 aspect-h-1  overflow-hidden rounded-lg lg:block m-1">
              <img
                src={`http://localhost:8000/image/${products.image}`}
                alt="Two each of gray, white, and black shirts laying flat."
                class="h-full w-full object-cover object-center"
              />
            </div>
            <div class=" lg:grid lg:grid-cols-1 lg:gap-y-8 ">
              <div class="aspect-w-2 aspect-h-1 overflow-hidden rounded-lg m-1">
                <img
                  src={`http://localhost:8000/image/${products.image}`}
                  alt="Model wearing plain black basic tee."
                  class="h-full w-full object-cover object-center"
                />
              </div>
              <div class="aspect-w-2 aspect-h-1 overflow-hidden rounded-lg m-1">
                <img
                  src={`http://localhost:8000/image/${products.image}`}
                  alt="Model wearing plain gray basic tee."
                  class="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div class="aspect-w-4 aspect-h-2 mb-5  sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4 m-1">
              <div class=" lg:row-span-3 lg:mt-0">
                <h2 class="text-3xl text-uppercase mb-3 font-bold ">
                  {products.productName}
                </h2>
                <p class="text-1xl tracking-tight text-red-400">
                  {products.price} VND
                </p>
                <div class="mt-2">
                  <h3 class="sr-only">Reviews</h3>
                  <div class="flex items-center">
                    <div class="flex items-center">
                      <svg
                        class="text-gray-900 h-5 w-5 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <svg
                        class="text-gray-900 h-5 w-5 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <svg
                        class="text-gray-900 h-5 w-5 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <svg
                        class="text-gray-900 h-5 w-5 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <svg
                        class="text-gray-200 h-5 w-5 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    {/* <p class="sr-only">4 out of 5 stars</p> */}
                    <a
                      href="#"
                      class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      117 reviews
                    </a>
                  </div>
                </div>

                <form class="mt-3">
                  <div>
                    <h3 class="text-sm font-medium text-gray-900">Color</h3>

                    <fieldset class="mt-2">
                      <legend class="sr-only">Choose a color</legend>
                      <div class="flex items-center space-x-3">
                        <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                          <input
                            type="radio"
                            name="color-choice"
                            value="White"
                            class="sr-only"
                            aria-labelledby="color-choice-0-label"
                          />
                          <span id="color-choice-0-label" class="sr-only">
                            {" "}
                            White{" "}
                          </span>
                          <span
                            aria-hidden="true"
                            class="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full"
                          ></span>
                        </label>
                        <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                          <input
                            type="radio"
                            name="color-choice"
                            value="Gray"
                            class="sr-only"
                            aria-labelledby="color-choice-1-label"
                          />
                          <span id="color-choice-1-label" class="sr-only">
                            {" "}
                            Gray{" "}
                          </span>
                          <span
                            aria-hidden="true"
                            class="h-8 w-8 bg-gray-200 border border-black border-opacity-10 rounded-full"
                          ></span>
                        </label>
                        <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                          <input
                            type="radio"
                            name="color-choice"
                            value="Black"
                            class="sr-only"
                            aria-labelledby="color-choice-2-label"
                          />
                          <span id="color-choice-2-label" class="sr-only">
                            {" "}
                            Black{" "}
                          </span>
                          <span
                            aria-hidden="true"
                            class="h-8 w-8 bg-gray-900 border border-black border-opacity-10 rounded-full"
                          ></span>
                        </label>
                      </div>
                    </fieldset>
                  </div>

                  <div class="mt-3">
                    <div class="flex items-center justify-between">
                      <h3 class="text-sm font-medium text-gray-900">Size</h3>
                      <a
                        href="#"
                        class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Size guide
                      </a>
                    </div>

                    <fieldset class="mt-5">
                      <legend class="sr-only">Choose a size</legend>
                      <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                        <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                          <input
                            type="radio"
                            name="size-choice"
                            value="L"
                            class="sr-only"
                            aria-labelledby="size-choice-4-label"
                          />
                          <span id="size-choice-4-label">L</span>
                          <span
                            class="pointer-events-none absolute -inset-px rounded-md"
                            aria-hidden="true"
                          ></span>
                        </label>

                        <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                          <input
                            type="radio"
                            name="size-choice"
                            value="XL"
                            class="sr-only"
                            aria-labelledby="size-choice-5-label"
                          />
                          <span id="size-choice-5-label">XL</span>
                          <span
                            class="pointer-events-none absolute -inset-px rounded-md"
                            aria-hidden="true"
                          ></span>
                        </label>

                        <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                          <input
                            type="radio"
                            name="size-choice"
                            value="2XL"
                            class="sr-only"
                            aria-labelledby="size-choice-6-label"
                          />
                          <span id="size-choice-6-label">2XL</span>
                          <span
                            class="pointer-events-none absolute -inset-px rounded-md"
                            aria-hidden="true"
                          ></span>
                        </label>

                        <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                          <input
                            type="radio"
                            name="size-choice"
                            value="3XL"
                            class="sr-only"
                            aria-labelledby="size-choice-7-label"
                          />
                          <span id="size-choice-7-label">3XL</span>
                          <span
                            class="pointer-events-none absolute -inset-px rounded-md"
                            aria-hidden="true"
                          ></span>
                        </label>
                      </div>
                    </fieldset>
                  </div>

                  <button
                    type="submit"
                    class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Add to bag
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div class=" mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl border-t-2 lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            <div
              className={`${styles.contentProduct} lg:col-span-2  lg:pr-8 mt-5 `}
            >
              <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Basic Tee 6-Pack
              </h1>
            </div>

            <div class="py-10 lg:col-span-2 lg:col-start-1  lg:pt-6 lg:pb-16 lg:pr-8">
              <div>
                <h3 class="sr-only">Description</h3>

                <div class="space-y-6">
                  <p class="text-base text-gray-900">
                    The Basic Tee 6-Pack allows you to fully express your
                    vibrant personality with three grayscale options. Feeling
                    adventurous? Put on a heather gray tee. Want to be a
                    trendsetter? Try our exclusive colorway: &quot;Black&quot;.
                    Need to add an extra pop of color to your outfit? Our white
                    tee has you covered.
                  </p>
                </div>
              </div>

              <div class="mt-10">
                <h3 class="text-sm font-medium text-gray-900">Highlights</h3>

                <div class="mt-4">
                  <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                    <li class="text-gray-400">
                      <span class="text-gray-600">
                        Hand cut and sewn locally
                      </span>
                    </li>

                    <li class="text-gray-400">
                      <span class="text-gray-600">
                        Dyed with our proprietary colors
                      </span>
                    </li>

                    <li class="text-gray-400">
                      <span class="text-gray-600">Pre-washed pre-shrunk</span>
                    </li>

                    <li class="text-gray-400">
                      <span class="text-gray-600">Ultra-soft 100% cotton</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="mt-10">
                <h2 class="text-sm font-medium text-gray-900">Details</h2>

                <div class="mt-4 space-y-6">
                  <p class="text-sm text-gray-600">
                    The 6-Pack includes two black, two white, and two heather
                    gray Basic Tees. Sign up for our subscription service and be
                    the first to get new, exciting colors, like our upcoming
                    &quot;Charcoal Gray&quot; limited release.
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
