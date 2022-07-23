// import "./About.css"
import React from "react";
import { MdDownload } from "react-icons/md";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div
      name="about"
      className="  h-full w-full bg-transparent text-black "
    >
      <h1 className=" text-center border-b-2 font-bold text-3xl text-black py-4">
        About <span className="text-yellow-700 border-orange-500">Me</span>
      </h1>
      <div className=" flex justify-center items-center flex-wrap p-8">
        <p className=" text-black text-2xl tracking-wider font-serif">
          I enjoy being challenged and engaging with projects that require me to
          work outside my comfort and knowledge set, as continuing to learn new
          languages and development techniques are important to me.
        <br />
        <br />
          I'm big on frontend web, serverless. Experience in Web app, Static Site
          generation, Server Side rendering, Rest API, Jamstack, SEO, Firebase
          and highly interactive UI,
          </p>
        <div className=" py-8 px-4  z-10 pl-12">
          <h3 className=" text-2xl py-4 font-bold text-yellow-600">
            <span className=" text-black">Name : </span> Gautam kumar Gupta
          </h3>
          <h3 className=" text-2xl py-4 font-bold text-yellow-600">
            <span className=" text-black">Age :</span> 22
          </h3>
          <h3 className=" text-2xl py-4 font-bold text-yellow-600">
            <span className=" text-black"> Qualification :</span> BCA
          </h3>
          <h3 className=" text-2xl py-4 font-bold text-yellow-600">
            <span className=" text-black">Post :</span> Front end developer
          </h3>
          <h3 className=" text-2xl py-4 font-bold text-yellow-600">
            <span className=" text-black">Language :</span> Hindi
          </h3>
          <Link
            to="contact"
            smooth
            duration={500}
            className=" w-full px-6 py-3 my-2 flex items-center rounded-md bg-blue-800 cursor-pointer hover:scale-90 hover:bg-gradient-to-br from-yellow-600 to-green-700 first-letter: text-white"
            
          >
            download cv
            <span>
              <MdDownload size={25} className="ml-1 " />
            </span>
          </Link>
        </div>
        <div className=" flex justify-center flex-wrap flex-[48rem]">
          <div className=" w-[20rem] bg-black items-center p-4 m-4">
            <span className=" text-white text-[4rem]">1+</span>
            <h3 className=" text-[2rem] text-yellow-700">Year of experience</h3>
          </div>
          <div className="w-80 bg-black items-center p-4 m-4">
            <span className=" text-white text-[4rem]">10+</span>
            <h3 className=" text-[2rem] text-yellow-700">Porject completed</h3>
          </div>
          <div className="w-80 bg-black items-center p-4 m-4">
            <span className=" text-white text-[4rem]">6+</span>
            <h3 className=" text-[2rem] text-yellow-700">Happy clients</h3>
          </div>
          <div className="w-80 bg-black items-center p-4 m-4">
            <span className=" text-white text-[4rem]">5+</span>
            <h3 className=" text-[2rem] text-yellow-700">Awards</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
