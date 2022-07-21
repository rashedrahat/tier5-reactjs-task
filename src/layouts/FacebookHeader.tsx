import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BiNews } from "react-icons/bi";
import { RiMessengerLine } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { GoSearch } from "react-icons/go";

function FacebookHeader() {
  return (
    <ul className="bg-facebook w-full h-10 flex items-center justify-around">
      <li className="border-b-2 border-white py-2">
        <BiNews size={20} color="white" className="cursor-pointer" />
      </li>
      <li>
        <FiUsers size={20} color="white" className="cursor-pointer" />
      </li>
      <li>
        <RiMessengerLine size={20} color="white" className="cursor-pointer" />
      </li>
      <li>
        <IoNotificationsOutline
          size={20}
          color="white"
          className="cursor-pointer"
        />
      </li>
      <li>
        <FaRegUserCircle size={20} color="white" className="cursor-pointer" />
      </li>
      <li>
        <GoSearch size={20} color="white" className="cursor-pointer" />
      </li>
    </ul>
  );
}

export default FacebookHeader;
