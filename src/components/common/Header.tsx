import React, { useEffect, useState } from "react";
import logo from "../../assets/img/logo.png";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`p-4 md:p-6 xl:p-8 sticky top-0 w-full z-50 backdrop-blur-md ${
          scrolled ? "border-b border-gray-300" : ""
        }`}
      >
        <nav
          className="mx-auto flex max-w-sm md:max-w-3xl lg:max-w-5xl xl:max-w-7xl items-center justify-between p-2 md:py-3 md:px-4 xl:py-4 xl:px-6 shadow-md rounded-lg md:rounded-xl lg:rounded-2xl bg-white/70 instrument-sans font-bold text-base"
          aria-label="Global"
        >
          <div className="items-center flex-1 basis-1/3">
            <nav className="hidden lg:flex">
              <ul className="flex space-x-6">
                <li>
                  <a href="/" className="text-gray-700 hover:text-gray-900">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/store"
                    className="text-gray-700 hover:text-gray-900"
                  >
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
            <div className="lg:hidden flex items-center">
              <button className="text-gray-700 hover:text-gray-900">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke="black"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-1 basis-1/3 lg:flex-initial justify-center">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Luxury Couture</span>
              <img alt="" src={logo} className="h-8 w-auto" />
            </a>
          </div>
          <div className="flex flex-1 basis-1/3 items-center justify-end">
            <nav className="">
              <ul className="flex items-center space-x-6">
                <li>
                  <a href="/" className="text-gray-700 hover:text-gray-900">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C11.0111 2 10.0444 2.29324 9.22215 2.84265C8.3999 3.39206 7.75904 4.17295 7.3806 5.08658C7.00216 6.00021 6.90315 7.00555 7.09607 7.97545C7.289 8.94536 7.7652 9.83627 8.46447 10.5355C9.16373 11.2348 10.0546 11.711 11.0245 11.9039C11.9945 12.0969 12.9998 11.9978 13.9134 11.6194C14.827 11.241 15.6079 10.6001 16.1573 9.77785C16.7068 8.95561 17 7.98891 17 7C17 5.67392 16.4732 4.40215 15.5355 3.46447C14.5979 2.52678 13.3261 2 12 2ZM12 10C11.4067 10 10.8266 9.82405 10.3333 9.49441C9.83994 9.16476 9.45542 8.69623 9.22836 8.14805C9.0013 7.59987 8.94189 6.99667 9.05764 6.41473C9.1734 5.83279 9.45912 5.29824 9.87868 4.87868C10.2982 4.45912 10.8328 4.1734 11.4147 4.05764C11.9967 3.94189 12.5999 4.0013 13.1481 4.22836C13.6962 4.45542 14.1648 4.83994 14.4944 5.33329C14.8241 5.82664 15 6.40666 15 7C15 7.79565 14.6839 8.55871 14.1213 9.12132C13.5587 9.68393 12.7956 10 12 10ZM21 21V20C21 18.1435 20.2625 16.363 18.9497 15.0503C17.637 13.7375 15.8565 13 14 13H10C8.14348 13 6.36301 13.7375 5.05025 15.0503C3.7375 16.363 3 18.1435 3 20V21H5V20C5 18.6739 5.52678 17.4021 6.46447 16.4645C7.40215 15.5268 8.67392 15 10 15H14C15.3261 15 16.5979 15.5268 17.5355 16.4645C18.4732 17.4021 19 18.6739 19 20V21H21Z"
                        fill="black"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="/store"
                    className="text-gray-700 hover:text-gray-900"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.71 3.4H16.924C18.302 3.4 19.297 4.67 18.919 5.948L17.265 11.548C17.01 12.408 16.196 13 15.27 13H6.112C5.185 13 4.37 12.407 4.116 11.548L1.71 3.4ZM1.71 3.4L1 1M14.5 19C14.8978 19 15.2794 18.842 15.5607 18.5607C15.842 18.2794 16 17.8978 16 17.5C16 17.1022 15.842 16.7206 15.5607 16.4393C15.2794 16.158 14.8978 16 14.5 16C14.1022 16 13.7206 16.158 13.4393 16.4393C13.158 16.7206 13 17.1022 13 17.5C13 17.8978 13.158 18.2794 13.4393 18.5607C13.7206 18.842 14.1022 19 14.5 19ZM6.5 19C6.89782 19 7.27936 18.842 7.56066 18.5607C7.84196 18.2794 8 17.8978 8 17.5C8 17.1022 7.84196 16.7206 7.56066 16.4393C7.27936 16.158 6.89782 16 6.5 16C6.10218 16 5.72064 16.158 5.43934 16.4393C5.15804 16.7206 5 17.1022 5 17.5C5 17.8978 5.15804 18.2794 5.43934 18.5607C5.72064 18.842 6.10218 19 6.5 19Z"
                        stroke="black"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="/favorites"
                    className="text-gray-700 hover:text-gray-900"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.0002 21L16.6572 16.657M16.6572 16.657C17.4001 15.9141 17.9894 15.0321 18.3914 14.0615C18.7935 13.0909 19.0004 12.0506 19.0004 11C19.0004 9.94936 18.7935 8.90905 18.3914 7.93842C17.9894 6.96779 17.4001 6.08585 16.6572 5.34296C15.9143 4.60007 15.0324 4.01078 14.0618 3.60874C13.0911 3.20669 12.0508 2.99976 11.0002 2.99976C9.9496 2.99976 8.90929 3.20669 7.93866 3.60874C6.96803 4.01078 6.08609 4.60007 5.34321 5.34296C3.84288 6.84329 3 8.87818 3 11C3 13.1217 3.84288 15.1566 5.34321 16.657C6.84354 18.1573 8.87842 19.0002 11.0002 19.0002C13.122 19.0002 15.1569 18.1573 16.6572 16.657Z"
                        stroke="black"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
