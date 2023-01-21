import { FC } from "react";
import { useUIContext } from "../../../context";
import { Logo, HamburguerButton, NavList } from "./";

export const Navbar: FC = () => {
  const { activeSection } = useUIContext();

  return (
    <header
      className={`
      ${activeSection === "" ? "bg-secondary" : "bg-dark shadow-nav"}
      px-5  bg-transaparent overscroll-x-none sticky
      transition duration-600 ease-in-out z-50 top-0 left-0 right-0 `}
    >
      <nav
        className={`container flex flex-row items-center justify-between py-2 md:py-0 h-20 sm:h-24 lg:h-28
        max-w-6xl
        `}
      >
        <div className="mt-2">
          <Logo />
        </div>
        <HamburguerButton />
        <NavList />
      </nav>
    </header>
  );
};
