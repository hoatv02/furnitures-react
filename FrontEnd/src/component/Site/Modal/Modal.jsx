import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import styles from "./Modal.module.css";
import { Link } from "react-router-dom";
const Modal = ({ removeModal, modal }) => {
  return (
    <div
      class="relative z-10 "
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity transition delay-5000 duration-300 ease-in-out"></div>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <p class="justify-right text-right p-2">
              <CloseIcon onClick={() => removeModal()} />
            </p>
            <div class="bg-white px-4 pt-2 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <p class="pb-6">
                    {/* <CheckCircleIcon className= /> */}
                    {modal === "Đăng kí tài khoản Thành công" && (
                      <i
                        className={`${styles.iconSuccess} fa-regular fa-circle-check fa-frog fa-bounce`}
                      ></i>
                    )}
                    {modal === "Đăng kí tài khoản Thất bại" && (
                      <i
                        class={`${styles.iconSuccess} fa-solid fa-triangle-exclamation fa-frog fa-bounce`}
                      ></i>
                    )}
                    {/* <i class="fa-solid fa-frog fa-bounce" 
                  style={{" --fa-bounce-start-scale-x": 1, "--fa-bounce-start-scale-y": 1, "--fa-bounce-jump-scale-x": 1,"--fa-bounce-jump-scale-y": 1, "--fa-bounce-land-scale-x": 1, "--fa-bounce-land-scale-y": 1}}
                  ></i> */}
                  </p>
                  <h3
                    class="text-lg font-medium leading-6 text-gray-900"
                    id="modal-title"
                  >
                    {modal}
                  </h3>
                  <div class="mt-2">
                    {modal === "Đăng kí tài khoản Thất bại" && (
                      <p class="text-sm text-gray-500">
                        Hãy đăng kí ngay để trải nghiệm website một cách tốt
                        nhất !!!
                      </p>
                    )}
                    {modal === "Đăng kí tài khoản Thành công" && (
                      <p class="text-sm text-gray-500">
                        Hãy đăng nhập ngay để trải nghiệm website một cách tốt
                        nhất !!!
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-4 sm:flex sm:flex-row justify-center sm:px-6 text-align:center">
              <Link
                to="/signin"
                onClick={() => removeModal()}
                class=" inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                <ArrowRightAltIcon /> Trang Đăng Nhập
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
