import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import _ from "lodash";
import { TOKEN, USER_LOGIN } from "../../util/settings/config";

const Header = () => {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  const renderLogin = () => {
    if (_.isEmpty(userLogin)) {
      return (
        <Fragment>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <Link
              to="/login"
              className="self-center px-2 py-3 rounded  text-white  hover:text-white"
            >
              Sign in
            </Link>
            <Link
              to="/register"
              className="self-center px-2 py-3 rounded  text-white hover:text-white"
            >
              Register
            </Link>
          </div>
        </Fragment>
      );
    }
    return (
      <div className="">
        <button to="/profile">
          <div className="h-[40px] w-[40px] rounded-full bg-yellow-500 text-2xl text-center mr-1">
            {userLogin.taiKhoan.substr(0, 1)}
          </div>
          Hello ! {userLogin.taiKhoan}
        </button>
        <button
          onClick={() => {
            localStorage.removeItem(USER_LOGIN);
            localStorage.removeItem(TOKEN);
          }}
        >
          Đăng xuất
        </button>
      </div>
    );
  };

  return (
    <div>
      <header className="p-4 text-white bg-black bg-opacity-40 fixed w-full z-10">
        <div className="flex justify-between h-16 mx-auto">
          <NavLink
            to="/"
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <img
              src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
              alt="Cyberlearn.edu.vn"
            />
          </NavLink>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <NavLink
                aria-current="page"
                rel="noopener noreferrer"
                to="/home"
                className="flex items-center px-4 -mb-1 dark:border-transparent text-white text-xl hover:text-orange-500"
              >
                Home
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                rel="noopener noreferrer"
                to="/contact"
                className="flex items-center px-4 -mb-1 dark:border-transparent text-white text-xl hover:text-orange-500"
              >
                Contact
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                rel="noopener noreferrer"
                to="/news"
                className="flex items-center px-4 -mb-1 dark:border-transparent text-white text-xl hover:text-orange-500"
              >
                News
              </NavLink>
            </li>
          </ul>
          {renderLogin()}
          <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
