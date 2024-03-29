import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import styles from "./HeaderPage.module.css";
import {
  Bars3Icon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Profile from "../Profile/Profile";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import i18n from "../../../../i18n/i18n";
const navigation = {
  categories: [],
  pages: [
    { name: "Trang chủ", to: "/" },
    { name: "Sản phẩm", to: "/product" },
    { name: "Giới thiệu", to: "/about" },
    { name: "Liên hệ", to: "/contact" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HeaderPage() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [isLogin] = useState(localStorage.getItem("AccessToken") != null);
  const cart = useSelector((state) => state.cart.cart);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  };
  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <Link
                        to={page.to}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                       {page.name}
                      </Link>
                    </div>
                  ))}
                </div>
                {/* <div className="border-t border-gray-200 py-6 px-4">
                  <Link to="#" className="-m-2 flex items-center p-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">
                      CAD
                    </span>
                    <span className="sr-only">, change currency</span>
                  </Link>
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <nav aria-label="Top" className=" px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div>
              <button className="btn" onClick={()=>changeLanguage('en')}>English</button>
              <button  className="btn" onClick={()=>changeLanguage('vi')}>Tiếng Việt</button>
            </div>
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to="#">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="https://ht21992.pythonanywhere.com/static/pages/images/logo.png"
                    alt=""
                  />
                </Link>
              </div>
              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.pages.map((page) => (
                    <Link
                      key={page.name}
                      to={page.to}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className={`${styles.searchBox} flex lg:mr-6`}>
                  {/* <span className="sr-only">Search</span> */}
                  <input
                    className={styles.InputSearch}
                    placeholder="Tìm kiếm..."
                  />
                  <i
                    className={`${styles.iconSearch} fa-solid fa-magnifying-glass`}
                  ></i>
                </div>

                {/* Cart */}
                {isLogin ? (
                  <div className="ml-4 flow-root lg:mr-6">
                    <Link
                      to="/cart"
                      className="group -m-2 flex items-center p-2"
                    >
                      <ShoppingBagIcon
                        className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                        {cart.length}
                      </span>
                      <span className="sr-only">items in cart, view bag</span>
                    </Link>
                  </div>
                ) : null}
                {isLogin ? (
                  <Profile />
                ) : (
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 cursor-pointer">
                    <Link
                      to="/signin"
                      className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      Đăng nhập
                    </Link>
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                    <Link
                      to="/register"
                      className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      Đăng kí
                    </Link>
                  </div>
                )}

                {/* <div className="hidden lg:ml-8 lg:flex">
                  <Link
                    to="/register"
                    className="flex items-center text-gray-700 hover:text-gray-800"
                  >
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </Link>
                </div> */}

                {/* Search */}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
