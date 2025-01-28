import React from "react";
import logo from "../../assets/img/logo.png";

const Header: React.FC = () => {
  return (
    <header className="p-4 md:p-6 xl:p-8 bg-[#ECECEC]">
      <nav
        className="mx-auto flex max-w-sm md:max-w-3xl lg:max-w-5xl xl:max-w-7xl items-center justify-between p-2 md:p-3 xl:p-4 shadow-md rounded-lg md:rounded-xl lg:rounded-2xl bg-white"
        aria-label="Global"
      >
        <div className="flex items-center">
          <nav className="">
            <ul className="flex space-x-6">
              <li>
                <a href="/" className="text-gray-700 hover:text-gray-900">
                  Home
                </a>
              </li>
              <li>
                <a href="/store" className="text-gray-700 hover:text-gray-900">
                  Store
                </a>
              </li>
              <li>
                <a
                  href="/favorites"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Favorites
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex lg:flex-initial">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Luxury Couture</span>
            <img alt="" src={logo} className="h-8 w-auto" />
          </a>
        </div>
        <div className="flex items-center">
          <nav className="">
            <ul className="flex space-x-6">
              <li>
                <a href="/" className="text-gray-700 hover:text-gray-900">
                  Home
                </a>
              </li>
              <li>
                <a href="/store" className="text-gray-700 hover:text-gray-900">
                  Store
                </a>
              </li>
              <li>
                <a
                  href="/favorites"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Favorites
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
      {/* <div className="container mx-auto flex items-center justify-between py-4">
                <div className="flex items-center">
                    <nav className="">
                        <ul className="flex space-x-6">
                        <li><a href="/" className="text-gray-700 hover:text-gray-900">Home</a></li>
                        <li><a href="/store" className="text-gray-700 hover:text-gray-900">Store</a></li>
                        <li><a href="/favorites" className="text-gray-700 hover:text-gray-900">Favorites</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="text-gray-700 hover:text-gray-900">
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                <button className="text-gray-700 hover:text-gray-900">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                </button>
                <button className="text-gray-700 hover:text-gray-900">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L5 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                </button>
                </div>
            </div> */}
    </header>
  );
};

export default Header;
