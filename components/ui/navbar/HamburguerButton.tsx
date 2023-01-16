import { FC } from "react";
import { useUIContext } from "../../../context";

const genericHamburgerLine = `h-1 w-8 my-1 rounded-full bg-green-500 transition ease transform duration-300`;

export const HamburguerButton: FC = () => {

  
    const { toggleMobileMenu,isMobileMenuOpen }=useUIContext()
    return  <button
    onClick={toggleMobileMenu}
    aria-expanded="false"
    type="button"
    className="flex flex-col justify-center justify-self-end	 p-2 ml-3 text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  >
    <span className="sr-only">Open main menu</span>
       <div
        className={`${genericHamburgerLine} ${
          isMobileMenuOpen
            ? "rotate-45 translate-y-3 opacity-100 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />

      <div
        className={`${genericHamburgerLine} ${
          isMobileMenuOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isMobileMenuOpen
            ? "-rotate-45 -translate-y-3 opacity-100 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
  </button> 
}

