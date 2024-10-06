import { useRef } from "react";
import { Navbar } from "./Navbar";
import emailjs from "@emailjs/browser";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export const Contactme = () => {
  useGSAP(() => {
    gsap.from(".txt", {
      x: -20,
      opacity: 0,
    });
  });
  const inps = [
    ".inp-1",
    ".inp-2",
    ".inp-3",
    ".inp-4",
    ".inp-5",
    ".inp-6",
    ".inp-7",
  ];
  useGSAP(() => {
    inps.forEach((inp) => {
      gsap.from(inp, {
        x: -20,
        opacity: 0,
        delay: "0." + inp.slice(-1),
      });
      console.log(inp.slice(-1));
    });
  });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_05iam9g", "template_69s6i5q", form.current, {
        publicKey: "RUBfvW0S4cnr4t0zd",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="bg-black absolute top-[50px] w-[100%]">
      <Navbar />
      <div className=" py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p className="txt mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form className="space-y-8" ref={form} onSubmit={sendEmail}>
          <div>
            <label className="inp-1 block mb-2 text-sm font-medium text-white dark:text-gray-300">
              Name
            </label>
            <input
              className="inp-2 shadow-sm border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500  p-2.5"
              type="text"
              name="user_name"
              required
            />
          </div>
          <div>
            <label className="inp-3 block mb-2 text-sm font-medium text-white dark:text-gray-300">
              Email
            </label>
            <input
              className="inp-4 shadow-sm border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500  p-2.5"
              type="email"
              name="user_email"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label className=" inp-5 block mb-2 text-sm font-medium text-white dark:text-gray-300">
              Message
            </label>
            <textarea
              className="inp-6 shadow-sm border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500  p-2.5"
              name="message"
              required
            />
          </div>
          <input
            className="inp-7 py-3 px-5 text-sm font-medium hover:bg-slate-950 text-center text-white rounded-lg border-2 border-white cursor-pointer"
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
};
