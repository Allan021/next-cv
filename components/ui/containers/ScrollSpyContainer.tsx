import { FC, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useUIContext } from "../../../context";
import styles from "./Container.module.css";
interface ScrollSpyContainerProps {
  children: React.ReactNode | React.ReactNode[];
  section: string;
  offset?: number;
  background?: string;
}

export const ScrollSpyContainer: FC<ScrollSpyContainerProps> = ({
  section,
  children,
  background,
}) => {
  const { setActiveSection } = useUIContext();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (!inView) return;
    setActiveSection(section);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, section]);

  return (
    <section
      ref={ref}
      id={section}
      className={`relative ${styles["scroll-spy-container"]}
       ${background ? background : ""} w-full d-flex flex-column justify-content-center align-items-center px-4
      `}
    >
      <article
      className="max-w-6xl container"
      >
        {
          children
        }
      </article>
    </section>
  );
};
