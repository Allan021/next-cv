import { FC } from "react";
import { useUIContext } from "../../../context";
import { Logo } from "./Logo";
import { NavList } from "./NavList";

export const Navbar: FC = () => {
  const { activeSection } = useUIContext();

  return (
    <header
      className={`
      ${activeSection === "" ? "bg-transparent" : "bg-secondary shadow-nav"}
      px-5  bg-transaparent overscroll-x-none sticky
      transition duration-600 ease-in-out  z-50 top-0 left-0 right-0`}
    >
      <nav
        className={`container flex flex-row items-center justify-around md:h-24 lg:h-28`}
      >
        <div className="mt-2">
          <Logo />
        </div>
        {/* <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button> */}
        <NavList />
      </nav>
    </header>
  );
};
