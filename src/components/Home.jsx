import React from "react";
import HeroImage from "../photo/HeroImage1.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-transparent pt-20"
    >
      <div className="max-w-screen-lg mx-auto  flex flex-col items-center justify-between h-full px-4 text-black md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl pt-4 font-bold">
            I'm a Full Stark Developer
          </h2>

          <p className=" text-black text-[1.2rem] font-semibold font-serif py-8 max-w-md">
          Hi, My name is Gautam kumar gupta. I'm a web developer. who works on various modern, reactive and responsive user interface while also communicating with backend services.
          </p>
          <div>
            <Link
              to="about"
              smooth
              duration={400}
              className=" w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-900 to-blue-800 cursor-pointer hover:scale-90 first-letter: text-white"
            >
              About
              <span className=" hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="max-w-md max-h-md pb-8">
          <img src={HeroImage} alt="my profile" />
        </div>
      </div>
    </div>
  );
};

export default Home;
