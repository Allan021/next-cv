import { FC } from "react";
import { useUIContext } from "../../../context";
import { NavItem } from "./NavItem";

export const NavList: FC = () => {
  const { sections,isMobileMenuOpen } = useUIContext();


  return (
      <ul className={`md:flex md:items-center md:z-auto md:static absolute flex-col mt-0 md:mt-2 md:flex-row md:space-x-2 lg:space-x-8 md:border-0 w-full md:w-auto left-0 md:opacity-100 transition-height ease-in  
      top-[96px] 
      duration-500 md:scale-y-100

      ${isMobileMenuOpen ? "scale-y-1" : "scale-y-0"}

      `}
      style={{transformOrigin: "0 0 0",}}
      >
        {sections.map((section) => (
          <NavItem key={section.id} href={section.href} text={section.name} />
        ))}
      </ul>
  );
};
