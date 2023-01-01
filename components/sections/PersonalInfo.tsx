import Image from "next/image";
import { SectionTitle } from "../text";
import { ScrollSpyContainer } from "../ui/containers";

export const PersonalInfo = () => {
  return (
    <ScrollSpyContainer section="">
      <article className="relative flex flex-row items-center justify-between">
        <div>
          <SectionTitle>Frontend Developer</SectionTitle>
          <h1 className="text-4xl font-bold text-center text-gray-900 md:text-6xl">
            Hi, Soy <span className="text-green-500">Jorge</span>
          </h1>
          <h2 className="text-2xl font-light text-center text-gray-900 md:text-4xl">
            Soy un <span className="text-green-500">Frontend Developer</span>
          </h2>
        </div>

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            impedit voluptates nihil ducimus ad, perspiciatis cupiditate?
            Placeat dolor soluta iusto officia ipsam eos animi aperiam, eius,
            excepturi nulla quisquam cumque?
          </p>
        </div>
      </article>
    </ScrollSpyContainer>
  );
};
