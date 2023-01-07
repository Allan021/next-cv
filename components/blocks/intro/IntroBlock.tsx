import { FC } from "react";
import { IntroLine } from "./IntroLine";
export const IntroBlock: FC = () => {
  return (
    <article
      className="fixed
        top-0
        left-0
        w-full
        h-screen
        flex
        
        "
    >
      <IntroLine lineNum={0} />
      <IntroLine lineNum={1} />
      <IntroLine lineNum={2} />
      <IntroLine lineNum={3} />
    </article>
  );
};
