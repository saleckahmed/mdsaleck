import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "./Navbar";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export const Projects = () => {
  const texts = [".text-1", ".text-2", ".text-3", ".text-4"];

  useGSAP(() => {
    texts.forEach((text) => {
      gsap.from(text, {
        x: -20,
        opacity: 0,
        delay: "0." + text.slice(-1),
      });
    });
  });
  return (
    <>
      <Navbar />

      <div className="absolute top-[50px] w-[100%] bg-black text-white pb-[100px] flex flex-col justify-start items-center ">
        <h1 className="uppercase text-4xl font-semibold mt-[20px]">Projects</h1>
        <div className="w-[80%] mt-[40px]">
          <p className="text-1 text-lg mb-[20px]">
            <span className="text-2xl flex items-center gap-[10px] uppercase">
              <FontAwesomeIcon icon={faCircleArrowRight} />
              Programming:
            </span>
            this project contain all type of programming from web developpment
            to games to apps to devops & it was create with only pure html & css
            & few line on javascript but it was never upload
          </p>
          <p className="text-2 text-lg mb-[20px]">
            <span className="text-2xl flex items-center gap-[10px] uppercase">
              <FontAwesomeIcon icon={faCircleArrowRight} />
              adrar:
            </span>
            this is a project for tourism in adrar & it was create with react js
            & tailwind css & gsap for animation
            <a
              className="border-2 border-white p-[6px] rounded-lg text-sm ml-[10px]"
              href="https://adrar.netlify.app/"
            >
              click here
            </a>
          </p>
          <p className="text-3 text-lg mb-[20px]">
            <span className="text-2xl flex items-center gap-[10px] uppercase">
              <FontAwesomeIcon icon={faCircleArrowRight} />
              crud operation:
            </span>
            this is a site where you can run crud operation "create delete view
            or read update or edit" it was created with react js 'react router'
            & tailwind css & gsap adn a fake json server for API but it was
            never upload
          </p>
          <p className="text-4 text-lg mb-[20px]">
            <span className="text-2xl flex items-center gap-[10px] uppercase">
              <FontAwesomeIcon icon={faCircleArrowRight} />
              this site:
            </span>
            it was created by react js & tailwind css & gsap & fontawesome &
            reacticon for the icon
          </p>
        </div>
      </div>
    </>
  );
};
