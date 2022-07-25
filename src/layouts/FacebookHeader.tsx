import React from "react";
import { FaBars } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
import appRoutes from "../utils/routes";

function FacebookHeader() {
  return (
    <nav className="bg-facebook-primary w-full h-10 flex items-center justify-around">
      <Link
        to={appRoutes.FACEBOOK_HOME}
        className="border-b-2 border-white py-2"
      >
        <AiOutlineHome size={20} color="white" className="cursor-pointer" />
      </Link>
      <Link to={appRoutes.FACEBOOK_FRIENDS}>
        <FiUsers size={20} color="white" className="cursor-pointer" />
      </Link>
      <Link to={appRoutes.FACEBOOK_HOME}>
        <RiMessengerLine size={20} color="white" className="cursor-pointer" />
      </Link>
      <Link to={appRoutes.FACEBOOK_HOME}>
        <IoNotificationsOutline
          size={20}
          color="white"
          className="cursor-pointer"
        />
      </Link>
      <Link to={appRoutes.FACEBOOK_HOME}>
        <GoSearch size={20} color="white" className="cursor-pointer" />
      </Link>
      <Link to={appRoutes.FACEBOOK_HOME}>
        <FaBars size={20} color="white" className="cursor-pointer" />
      </Link>
    </nav>
  );
}

export default FacebookHeader;
