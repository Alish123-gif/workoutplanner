import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "../../data/dummy";

const Footer = () => {
  return (
    <footer className="bg-sky-900/95 text-white">
      <div name="Contactus" className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-5">
        <h1
          className="lg:text-3xl text-2xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className="text-cyan-300">Feel</span> Free to Contact Us
          HERE -{'>'}
        </h1>
        <div>
          <input
            type="text"
            placeholder="Enter Your Message"
            className="text-gray-800
            sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none md:w-auto w-full"
          />
          <button
            className="bg-sky-400 hover:bg-sky-500 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto w-full"
          >
            Send
          </button>
        </div>
      </div>
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2024 Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
};

export default Footer;
