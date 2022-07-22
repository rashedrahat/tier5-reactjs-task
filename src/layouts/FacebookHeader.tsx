import React from "react";
import { FaBars } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { GoSearch } from "react-icons/go";

function FacebookHeader() {
  return (
    <ul className="bg-facebook-primary w-full h-10 flex items-center justify-around">
      <li className="border-b-2 border-white py-2">
        <AiOutlineHome size={20} color="white" className="cursor-pointer" />
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
        <GoSearch size={20} color="white" className="cursor-pointer" />
      </li>
      <li>
        <FaBars size={20} color="white" className="cursor-pointer" />
      </li>
    </ul>
  );
}

export default FacebookHeader;
