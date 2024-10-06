import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { faA, faE, faF } from "@fortawesome/free-solid-svg-icons";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "./Navbar";

export const Skills = () => {
  const icons = [
    ".icon-1",
    ".icon-2",
    ".icon-3",
    ".icon-4",
    ".icon-5",
    ".icon-6",
    ".icon-7",
    ".icon-8",
    ".icon-9",
  ];

  useGSAP(() => {
    icons.forEach((icon) => {
      gsap.from(icon, {
        x: -20,
        opacity: 0,
        delay: "0." + icon.slice(-1),
      });
    });
  });
  const fonts = [".font-1", ".font-2", ".font-3"];
  useGSAP(() => {
    fonts.forEach((font) => {
      gsap.from(font, {
        x: -20,
        opacity: 0,
        delay: "1." + font.slice(-1),
      });
    });
  });
  return (
    <>
      <Navbar />
      <div className="md:h-[100vh] absolute top-[50px] w-[100%] bg-black text-white pb-[40px] flex flex-col justify-start items-center ">
        <h1 className="uppercase text-4xl font-semibold mt-[20px] ">skills</h1>

        <div className="w-[90%]  mt-[20px] flex flex-wrap justify-center items-center gap-[40px]">
          <p className="icon-1 flex flex-col items-center">
            <FaHtml5 className="text-7xl" />
            <span>HTML</span>
          </p>
          <p className="icon-2 flex flex-col items-center">
            <FaCss3Alt className="text-7xl" />
            <span>Css</span>
          </p>
          <p className="icon-3 flex flex-col items-center">
            <FaJs className="text-7xl" />
            <span>js basics</span>
          </p>
          <p className="icon-4 flex flex-col items-center">
            <RiTailwindCssFill className="text-7xl" />
            <span>Tailwind Css</span>
          </p>
          <p className="icon-5 flex flex-col items-center">
            <FaReact className="text-7xl" />
            <span>React js</span>
          </p>
          <p className="icon-6 flex flex-col items-center">
            <FaPython className="text-7xl" />
            <span>Python basics</span>
          </p>
          <p className="icon-7 flex flex-col items-center">
            <FaPhp className="text-7xl" />
            <span>Php basics</span>
          </p>
          <p className="icon-8 flex flex-col items-center">
            <TbBrandCpp className="text-7xl" />
            <span>c++ basics</span>
          </p>
          <p className="icon-9 flex flex-col items-center">
            <MdOutlineSettingsApplications className="text-7xl" />
            <span>GSAP</span>
          </p>
        </div>
        <h1 className="uppercase text-4xl font-semibold mt-[20px]">
          Languages
        </h1>
        <div className="w-[90%]  mt-[20px] flex flex-wrap justify-center items-center gap-[40px]">
          <p className="font-1 flex flex-col items-center">
            <FontAwesomeIcon icon={faA} className="text-7xl" />
            <span>Arabic</span>
          </p>
          <p className="font-2 flex flex-col items-center">
            <FontAwesomeIcon icon={faE} className="text-7xl" />
            <span>English</span>
          </p>
          <p className="font-3 flex flex-col items-center">
            <FontAwesomeIcon icon={faF} className="text-7xl" />
            <span>French</span>
          </p>
        </div>
      </div>
    </>
  );
};
