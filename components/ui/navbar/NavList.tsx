import { FC } from "react";
import { useUIContext } from "../../../context";
import { NavItem } from "./NavItem";

export const NavList: FC = () => {
  const { sections } = useUIContext();

  return (
    <div className="hidden w-full md:block md:w-auto">
      <ul className="flex mt-4 bg-gray-50 md:flex-row md:space-x-8 md:border-0">
        {sections.map((section) => (
          <NavItem key={section.id} href={section.href} text={section.name} />
        ))}
      </ul>
    </div>
  );
};
