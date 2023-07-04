import React from "react";
import Tables from "../../../component/Admin/Tables/Tables";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import { CircularProgress, Typography } from "@mui/material";
import CircularStatic from "../../../component/Admin/Circle/Circle";

const Dashboard = () => {
  const category = useSelector((state) => state.category.data);
  const product = useSelector((state) => state.product.data);
  const user = useSelector((state) => state.user.data);
  return (
    <div className="bg-white">
      <section className="text-gray-600 body-font ">
        <div className="flex flex-wrap  text-center">
          <div className="p-2 sm:w-1/2 md:w-1/3 lg:w-1/4 w-full ">
            <div className=" flex items-center  justify-between p-4  rounded-lg bg-white  shadow-md">
              <div>
                <h2 className="text-gray-900 text-left text-md font-medium">
                  Sản phẩm
                </h2>
                <h3 className="mt-2 text-xl font-bold text-green-500 text-left">
                  {product.length}
                </h3>
                <p className="text-xs font-semibold text-gray-400 text-left">
                  {product.length > 0
                    ? "Sản phẩm đang bán"
                    : "Trang của bạn không có sản phẩm nào !"}
                </p>
              </div>
              <div className=" to-indigo-600 w-30 h-30    justify-center items-center ">
                <div>
                  <CircularStatic />
                </div>
                <p className="text-sm">Tiến độ đạt được</p>
              </div>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 md:w-1/3 lg:w-1/4 w-full ">
            <div className=" flex items-center  justify-between p-4  rounded-lg bg-white  shadow-md">
              <div>
                <h2 className="text-gray-900 text-md font-medium">Product</h2>
                <h3 className="mt-2 text-xl font-bold text-green-500 text-left">
                  20.000
                </h3>
                <p className="text-xs font-semibold text-gray-400 text-left">
                  Status
                </p>
              </div>
              <div className=" to-indigo-600 w-30 h-30  justify-center items-center ">
                <div>
                  <CircularStatic />
                </div>
                <p className="text-sm">Tiến độ đạt được</p>
              </div>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 md:w-1/3 lg:w-1/4 w-full ">
            <div className=" flex items-center  justify-between p-4  rounded-lg bg-white  shadow-md">
              <div>
                <h2 className="text-gray-900 text-md font-medium">Product</h2>
                <h3 className="mt-2 text-xl font-bold text-green-500 text-left">
                  20.000
                </h3>
                <p className="text-xs font-semibold text-gray-400 text-left">
                  Status
                </p>
              </div>
              <div className=" to-indigo-600 w-30 h-30    justify-center items-center ">
                <div>
                  <CircularStatic />
                </div>
                <p className="text-sm">Tiến độ đạt được</p>
              </div>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 md:w-1/3 lg:w-1/4 w-full ">
            <div className=" flex items-center  justify-between p-4  rounded-lg bg-white  shadow-md">
              <div>
                <h2 className="text-gray-900 text-md font-medium">Product</h2>
                <h3 className="mt-2 text-xl font-bold text-green-500 text-left">
                  20.000
                </h3>
                <p className="text-xs font-semibold text-gray-400 text-left">
                  Status
                </p>
              </div>
              <div className=" to-indigo-600 w-30 h-30    justify-center items-center ">
                <div>
                  <CircularStatic />
                </div>
                <p className="text-sm">Tiến độ đạt được</p>
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
