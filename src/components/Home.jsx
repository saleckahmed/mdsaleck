import img from "../assets/Me.jpg";
import { Navbar } from "./Navbar";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

export const Home = () => {
  const texts = [".text-1", ".text-2", ".text-3"];
  useGSAP(() => {
    texts.forEach((text) => {
      gsap.from(text, {
        x: -20,
        opacity: 0,
        delay: "0." + text.slice(-1),
      });
    });

    gsap.from("img", {
      y: -20,
      opacity: 0,
      delay: 0.8,
    });
  });

  return (
    <div className="absolute top-[50px] w-[100%] pb-[100px] bg-black flex md:flex-row flex-col md:justify-between justify-center items-center">
      <Navbar />
      <div className="text-white md:w-[650px] sm:w-[70%]  w-[80%] flex flex-col  gap-[40px] md:ml-[50px] ml-[15px] md:mt-[100px] mt-[30px]">
        <div className="text-1 md:text-6xl sm:text-5xl text-4xl uppercase text-left z-[1]">
          my Frontend skills ensure you get seamless user experiences online
        </div>
        <p className="text-2 text-lg">
          you can contact me now or after see my services
        </p>
        <div className="text-3">
          <Link
            to="/skills"
            className="bg-white hover:bg-black hover:text-white hover:border-white text-black   border border-black py-[10px] px-[16px] rounded-[40px] "
          >
            Skills & Languages
          </Link>
        </div>
      </div>
      <div
        className={`sm:w-[300px] w-[80%] h-[400px]  md:mr-[50px] md:mt-[100px] mt-[40px]`}
      >
        <img
          src={img}
          className="object-cover w-[100%] h-[100%] rounded-bl-[20px] rounded-tr-[20px]"
          alt=""
        />
      </div>
    </div>
  );
};
