import Link from "next/link";

import React, { FC } from "react";
import { useUIContext } from "../../../context/";

import Styles from "./NavBar.module.css";

interface NavItemProps {
  href: string;
  text: string;
  active?: boolean;
}
export const NavItem: FC<NavItemProps> = ({ href, text }) => {
  const { activeSection, setActiveSection } = useUIContext();
  return (
    <li
      className={`${Styles["nav-item"]}


      `}
      onClick={() => setActiveSection(href)}
    >
      <Link href={`#${href}`} passHref>
        <span
          className={`block bg-blue-700 rounded md:bg-transparent md:p-0 text-white bg-transparent 
          text-lg text-left md:text-center 
          md:text-md transition-duration-500 ease-in-out hover:text-green-500
           ${
             activeSection === href
               ? "text-green-500 font-medium"
               : "text-white"
           } 
          `}
          aria-current="page"
        >
          {text}
        </span>
      </Link>

      <div
        className={`${activeSection === href ? Styles["active-line"] : ""}`}
      />
    </li>
  );
};
