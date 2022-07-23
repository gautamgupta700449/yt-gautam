import React from 'react'
import { IoMdMail } from "react-icons/io";
import { AiOutlinePhone } from "react-icons/ai";
import { AiTwotonePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

const Footer = () => {
  return (
    <div name="footer" className=' w-full h-auto bg-black' >
      <div className='max-w-screen-sm mx-auto flex  h-full px-4 text-black '>
      <div className=" py-4 font-bold text-white text-[20px]">
              <h3 className="flex pb-4">
                <span className="text-yellow-800 pr-4">
                  <IoMdMail />
                </span>{" "}
                kumarguptagautam20@gmail.com
              </h3>
              <h3 className="flex pb-4">
                <span className=" text-yellow-800 pr-4">
                  <AiOutlinePhone />
                </span>{" "}
                8292009902
              </h3>
              <h3 className="flex pb-4-">
                <span className=" text-yellow-800 pr-4">
                  <AiTwotonePhone />
                </span>
                7004498673
              </h3>
              <h3 className="flex py-4">
                <span className=" text-yellow-800 pr-4">
                  <GoLocation />
                </span>
                Muzaffarpur, Bihar 842001
              </h3>
            </div>
      </div>
    </div>
  )
}

export default Footer