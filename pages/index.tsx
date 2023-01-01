import {
  AboutSection,
  PersonalInfo,
  ServicesSection,
  Journey,
  Portafolio,
  Contact,
  Reviews,
} from "../components";
import { Layout } from "../components/ui";

export default function Home() {
  return (
    <Layout
      title="CV | Allan Castro"
      description="Portfolio de Allan Castro - Desarrollador Web"
    >
      <PersonalInfo />
      <AboutSection />
      <ServicesSection />
      <Portafolio />
      <Reviews />
      <Journey />
      <Contact />
    </Layout>
  );
}
