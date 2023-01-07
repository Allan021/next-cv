import { FC } from "react";
import style from "./IntroLine.module.css";

interface IntroLineProps {
  lineNum: number;
  gap?: number;
}

const spacing = 389;

//crear una animacion para cada linea llamada vline${lineNum}anim
//en tailwind.config.js

export const IntroLine: FC<IntroLineProps> = ({ lineNum, gap }) => {
  return (
    <span
      className={`${style["vline"]} animate-vline${lineNum + 1}anim`}
      style={{
        marginLeft: `calc(-586px + ${gap ? gap : spacing}px * ${lineNum})`,
        animationIterationCount: 4,
      }}
    />
  );
};
