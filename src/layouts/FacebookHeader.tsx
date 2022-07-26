import React from "react";
import { FaBars, FaInstagram } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";
import appRoutes from "../utils/routes";

function FacebookHeader() {
  const location = useLocation();

  return (
    <nav className="bg-facebook-primary fixed top-0 w-full z-1 h-10 flex items-center justify-around">
      <Link
        to={appRoutes.FACEBOOK_HOME}
        className={`${
          location.pathname === appRoutes.FACEBOOK_HOME
            ? `border-b-2 border-white py-2`
            : ``
        }`}
      >
        <AiOutlineHome size={20} color="white" />
      </Link>
      <Link
        to={appRoutes.FACEBOOK_FRIENDS}
        className={`${
          location.pathname === appRoutes.FACEBOOK_FRIENDS
            ? `border-b-2 border-white py-2`
            : ``
        }`}
      >
        <FiUsers size={20} color="white" />
      </Link>
      <Link to={appRoutes.FACEBOOK_HOME}>
        <RiMessengerLine size={20} color="white" />
      </Link>
      <Link to={appRoutes.FACEBOOK_HOME}>
        <IoNotificationsOutline size={20} color="white" />
      </Link>
      <Link to={appRoutes.FACEBOOK_HOME}>
        <GoSearch size={20} color="white" />
      </Link>
      <Link to={appRoutes.INSTAGRAM_HOME}>
        <FaInstagram size={20} color="white" />
      </Link>
      <Link to={appRoutes.FACEBOOK_HOME}>
        <FaBars size={20} color="white" />
      </Link>
    </nav>
  );
}

export default FacebookHeader;
