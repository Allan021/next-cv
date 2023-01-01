import { FC } from "react";
import styles from "./Text.module.css";
interface SectionTitleProps {
  children?: React.ReactNode | React.ReactNode[];
  align?: "left" | "center" | "right";
}

const alignClass = (align: string = "") => {
  switch (align) {
    case "left":
      return "justify-start";
    case "center":
      return "justify-center";
    case "right":
      return "justify-end";
    default:
      return "justify-center";
  }
};

export const SectionTitle: FC<SectionTitleProps> = ({
  align = "center",
  children,
}) => {
  return (
    <div className={`relative flex ${alignClass(align)}`}>
      <p
        className={`
    relative
    font-semibold
    text-white
    pl-16
    md:pl-24
    sm:text-lg
    animate__animated animate__bounce
    md:text-2xl 
    ${styles.title}
  `}
      >
        {children}
      </p>
    </div>
  );
};
