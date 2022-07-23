import React from "react";
import { IoMdMail } from "react-icons/io";
import { AiOutlinePhone } from "react-icons/ai";
import { AiTwotonePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BiPaperPlane } from "react-icons/bi";

const Contact = () => {
  return (
    <div
      name="contact"
      className=" h-screen w-full bg-transparent"
    >
      <div className=" h-full w-full mx-auto py-4 md:flex-row">
      <h1 className=" py-8 border-b-2  font-bold text-4xl text-black text-center">
        Contact <span className=" text-yellow-800">Me</span>
      </h1>
        <div className=" flex justify-center items-center flex-wrap  h-full">
          <div className=" px-24 py-8">
            <h1 className=" font-bold text-4xl  inline border-b-4 border-gray-800 text-black  ">
              Contact <span className="text-yellow-700">Me</span>
            </h1>
            <div className=" py-4 pb-16  font-bold text-black text-[20px]">
              <h3 className="flex items-center pb-4">
                <span className="text-yellow-800 pr-4">
                  <IoMdMail />
                </span>{" "}
                kumarguptagautam20@gmail.com
              </h3>
              <h3 className="flex items-center pb-4">
                <span className=" text-yellow-800 pr-4">
                  <AiOutlinePhone />
                </span>{" "}
                8292009902
              </h3>
              <h3 className="flex items-center pb-4-">
                <span className=" text-yellow-800 pr-4">
                  <AiTwotonePhone />
                </span>
                7004498673
              </h3>
              <h3 className="flex items-center py-2">
                <span className=" text-yellow-800 pr-4">
                  <GoLocation />
                </span>
                Muzaffarpur, Bihar 842001
              </h3>
            </div>
          </div>
          <div className=" flex-1 justify-center items-center md:flex  flex-col pl-48 pb-4">
            <form
              action="https://getform.io/f/723e4629-f996-4492-aa74-bb5dbb32400d"
              method="post"
              className=" "
            >
              <input
                className=" flex justify-center items-center border-2 border-gray-400  p-2  text-[1.5rem] mr-[27rem] ml-[-5rem] w-[90%]"
                type="username"
                name="name"
                id="name"
                placeholder="Your Name" required
                autocomplete="off" />
      
              <input
                className=" flex justify-center items-center border-2 border-gray-400 m-8 p-2 text-[1.5rem] mr-[27rem] ml-[-5rem]  w-[90%]"
                type="username"
                name="email"
                id="email"
                placeholder="Enter Email" required
                autocomplete="off" />
            
              <input
                className=" flex justify-center items-center border-2 border-gray-400 m-8 p-2 text-[1.5rem] mr-[27rem] ml-[-5rem]  w-[90%]"
                type="number"
                name="number"
                id="number"
                placeholder="Your Number" required
                autocomplete="off" 
              />
              <textarea
               className="flex justify-center items-center border-2 border-gray-400 m-8 p-2 text-[1.5rem] mr-[27rem] ml-[-5rem]  w-[90%]"
                name="message"
                id="msg"
                placeholder="Enter message"
                cols="20"
                rows="5"
                required
            
              ></textarea>
              <button
                className=" w-fit  px-6 py-3 my-2  flex items-center rounded-lg bg-gradient-to-r from-cyan-900 to-blue-800 cursor-pointer hover:scale-90 first-letter: text-white"
                type="submit"
              >
                Sent
                <i className="pl-2 font-bold">
                  <BiPaperPlane />
                </i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

