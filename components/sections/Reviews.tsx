import { FC } from "react";
import { SectionTitle } from "../ui/text";
import { ScrollSpyContainer } from "../ui/containers";
export const Reviews: FC = () => {
  return (
    <ScrollSpyContainer section="reviews">
      <SectionTitle>Reviews</SectionTitle>
    </ScrollSpyContainer>
  );
};
