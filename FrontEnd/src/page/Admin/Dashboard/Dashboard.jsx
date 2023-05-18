import React from "react";
import Tables from "../../../component/Admin/Tables/Tables";

const Dashboard = () => {
  return (
    <div>
      <section class="text-gray-600 body-font ">
        <div class="flex flex-wrap  text-center">
          <div class="p-4 sm:w-1/2 md:w-1/3 lg:w-1/4 w-full ">
            <div class=" flex items-center  justify-between p-4  rounded-lg bg-white  shadow-md">
              <div>
                <h2 class="text-gray-900 text-lg font-bold">Product</h2>
                <h3 class="mt-2 text-xl font-bold text-green-500 text-left">
                  20.000
                </h3>
                <p class="text-sm font-semibold text-gray-400">
                  Status
                </p>
              </div>
              <div class="bg-[#ccc] to-indigo-600 w-20 h-20  rounded-full shadow-2xl shadow-[#333] border-white  border-dashed border-2  flex justify-center items-center ">
                <div>
                  <h4 class="text-white text-xl"></h4>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 sm:w-1/2 md:w-1/3 lg:w-1/4 w-full ">
            <div class=" flex items-center  justify-between p-4  rounded-lg bg-white  shadow-md">
              <div>
                <h2 class="text-gray-900 text-lg font-bold">Category</h2>
                <h3 class="mt-2 text-xl font-bold text-green-500 text-left">
                  20.000
                </h3>
                <p class="text-sm font-semibold text-gray-400">
                  Status
                </p>

              </div>
              <div class="bg-[#ccc] from-blue-600 to-indigo-600 w-20 h-20  rounded-full shadow-2xl shadow-[#333] border-white  border-dashed border-2  flex justify-center items-center ">
                <div>
                  <h4 class="text-white text-xl"></h4>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 sm:w-1/2 md:w-1/3 lg:w-1/4 w-full ">
            <div class=" flex items-center  justify-between p-4  rounded-lg bg-white  shadow-md">
              <div>
                <h2 class="text-gray-900 text-lg font-bold">User</h2>
                <h3 class="mt-2 text-xl font-bold text-green-500 text-left">
                  20.000
                </h3>
                <p class="text-sm font-semibold text-gray-400">
                  Status
                </p>
              </div>
              <div class="bg-[#ccc] from-blue-600 to-indigo-600 w-20 h-20  rounded-full shadow-2xl shadow-[#333] border-white  border-dashed border-2  flex justify-center items-center ">
                <div>
                  <h4 class="text-white text-xl"></h4>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 sm:w-1/2 md:w-1/3 lg:w-1/4 w-full ">
            <div class=" flex items-center  justify-between p-4  rounded-lg bg-white  shadow-md">
              <div>
                <h2 class="text-gray-900 text-lg font-bold">Revenue</h2>
                <h3 class="mt-2 text-xl font-bold text-green-500 text-left">
                  20.000
                </h3>
                <p class="text-sm font-semibold text-gray-400">
                  Status
                </p>
              </div>
              <div class="bg-[#ccc] from-blue-600 to-indigo-600 w-20 h-20  rounded-full shadow-2xl shadow-[#333] border-white  border-dashed border-2  flex justify-center items-center ">
                <div>
                  <h4 class="text-white text-xl"></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Tables />
    </div>
  );
};

export default Dashboard;
