import { SectionTitle } from "../ui/text";
import { ScrollSpyContainer } from "../ui/containers";
import { CustomButton } from "../ui/buttons";
import Image from "next/image";

export const PersonalInfo = () => {
  return (
    <ScrollSpyContainer section=""
    background="bg-secondary"
    >
      <article className="flex flex-col md:flex-row justify-between h-full">
        <div
          className="flex flex-col md:align-start w-full pt-20 relative "
          style={{
            zIndex: 2,
          }}
        >
          
          <h1>
          <SectionTitle align="left">Frontend Developer</SectionTitle>
           <span 
           style={{
              animationDelay: "2.5s",
              animationDuration: "1s",
           }}
           className="text-4xl font-bold md:text-6xl my-6 block animate__animated animate__fadeInLeft"><span
           className="text-green-500"
           >Allan</span> <span>Aceituno</span></span>
           <p 
           style={{
            animationDelay: "2.8s",
            animationDuration: "1s",
         }}
           className="text-gray-900 text-base font-light text-gray-300 animate__animated animate__fadeInLeft">
            Mi misión es crear soluciones digitales que ayuden a las personas a llevar sus ideas a la vida.
           </p>
          </h1>

          <div
          className="mt-16
          d-flex flex-col md:flex-row
          justify-center
          pl-0 md:pl-4
          "
          > 
            <CustomButton
            variant="text"
            additionalClasses="mr-0 md:mr-5 animate__animated animate__bounceIn"
            style={{
              animationDelay: "3s",
              animationDuration: "1s",
            }}
            >
            Biografia
            </CustomButton>
            <CustomButton
              additionalClasses="animate__animated animate__bounceIn"
              style={{
              animationDuration: "1s",
              animationDelay: "3.3s",
              }}
            >
               Contáctame
            </CustomButton>
          </div>
        </div>

     

        <div className="static w-full"
        >
        <div
        className="max-w-full absolute bottom-0 left-1/2 -ml-28 z-0 mr-0
        animate__animated animate__fadeInRight 
        "
        style={{
          animationDelay: "3.5s",
        }}


        >
          <Image 
          className="w-full h-auto max-w-full"
          src="/profile.jpg"
          width={664}
          height={630}

          alt="Allan Aceituno"
          />
      

        </div>
        </div>

      </article>
    </ScrollSpyContainer>
  );
};
