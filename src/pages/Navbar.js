// import React from "react";
// import { Link } from "react-scroll";
// import { BsArrowRight } from 'react-icons/bs';
// import { BsSearch } from 'react-icons/bs';

// function Navbar() {
//   return (
//     <div className="w-full h-[80px] flex justify-around items-center px-4 bg-[#0a192f] text-gray-100">
//       <div>logo</div>
//       <ul className="flex flex-row gap-4">
//         <Link to="home" smooth="true" duration={500}>
//           <li className="">Home</li>
//         </Link>
//         <Link to="about" smooth="true" duration={500}>
//           <li>About</li>
//         </Link>
//         <Link to="services" smooth="true" duration={500}>
//           <li>Services</li>
//         </Link>
//         <Link to="pages" smooth="true" duration={500}>
//           <li>Pages</li>
//         </Link>
//         <Link to="blogs" smooth="true" duration={500}>
//           <li>Blogs</li>
//         </Link>
//         <Link to="contact" smooth="true" duration={500}>
//           <li>Contact</li>
//         </Link>
//       </ul>
//       <div className="flex items-center">
//       <BsSearch className="mr-4 "/>
//       <button className="rounded-2xl bg-white text-black p-2 flex items-center">Get a Quotes<BsArrowRight className="ml-2"/></button>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/LOGO PNG.png";
import { FaBars, FaLinkedin } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import {  AiFillPhone } from "react-icons/ai";
import {FiMail} from "react-icons/fi"
import { BsWhatsapp } from "react-icons/bs";

function Navbar() {
  const [bar, setBar] = useState(false);
  const handleClick = () => {
    setBar(!bar);
  };
  return (
    <div className=" flex justify-around md:max-w-[full] w-full  h-[90px] mx-auto bg-black">
      <div className="flex justify-center items-center">
        <img src={logo} className="w-32" />
      </div>
      {/* <div className="flex justify-center items-center"> */}
      <ul className="hidden md:flex flex-row font-header justify-center items-center">
        <Link to="home" smooth="true" duration={500}>
          <li>Home</li>
        </Link>
        <Link to="about" smooth="true" duration={500}>
          <li>About Us</li>
        </Link>
        <Link to="services" smooth="true" duration={500}>
          <li className="flex items-center">Services</li>
        </Link>
        <Link to="products" smooth="true" duration={500}>
          <li>Products</li>
        </Link>
        <Link to="contact" smooth="true" duration={500}>
          <li>Conatct us</li>
        </Link>
      </ul>

      <div
        onClick={handleClick}
        className="md:hidden z-10 cursor-pointer flex justify-center items-center"
      >
        {!bar ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={
          !bar
            ? "hidden"
            : "absolute top-0 left-0 w-[300px] h-[400px] bg-[white] flex flex-col justify-center items-center"
        }
      >
        <li
          className="py-6 text-4x
        "
        >
          Home
        </li>
        <li
          className="py-6 text-4x
        "
        >
          About
        </li>
        <li
          className="py-6 text-4x
        "
        >
          Skill
        </li>
        <li
          className="py-6 text-4x
        "
        >
          Work
        </li>
      </ul>
      {/* </div> */}

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 text-grey-300">
        <ul>
        <li className="mb-3 w-[160px] h-[60px] flex justify-between items-center bg-[#099c3f] ml-[-100px] hover:ml-[-10px] duration-300">
            <a href="#" className="flex justify-between items-center w-full ">
              Whatsapp <BsWhatsapp size={"30px"} />
            </a>
          </li>
          <li className="mb-3 w-[160px] h-[60px] flex justify-between items-center bg-blue-600 ml-[-100px] hover:ml-[-10px] duration-300">
            <a href="#" className="flex justify-between items-center w-full ">
              Linked In <FaLinkedin size={"30px"} />
            </a>
          </li>
          
          <li className="mb-3 w-[160px] h-[60px] flex justify-between items-center bg-[#099c3f] ml-[-100px] hover:ml-[-10px] duration-300">
            <a href="tel:9656346818" className="flex justify-between items-center w-full ">
              Phone <AiFillPhone size={"30px"} />
            </a>
          </li>
          <li className="mb-3 w-[160px] h-[60px] flex justify-between items-center bg-red-500 ml-[-100px] hover:ml-[-10px] duration-300">
            <a href="#" className="flex justify-between items-center w-full ">
              Mail <FiMail size={"30px"} />
            </a>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default Navbar;
