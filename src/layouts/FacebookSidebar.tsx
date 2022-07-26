import React from "react";
import { FaFacebookMessenger, FaSearch } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import { HiUsers, HiUserGroup } from "react-icons/hi";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { Link, useLocation } from "react-router-dom";
import Image from "../components/ui/Image";
import appRoutes from "../utils/routes";

type FacebookSidebarProps = {
  profilePicture: string;
};

function FacebookSidebar({ profilePicture }: FacebookSidebarProps) {
  const location = useLocation();

  return (
    <nav className="bg-white w-16 h-full flex flex-col items-center gap-y-5 pt-5">
      <Link to={appRoutes.FACEBOOK_HOME}>
        <Image
          srcURL={
            profilePicture ||
            "https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar-300x300.jpg"
          }
          alt="Profile Picture"
          className="rounded-full w-10 h-10 object-cover"
        />
      </Link>
      <Link to={appRoutes.FACEBOOK_HOME}>
        <AiFillHome
          size={24}
          className={`${
            location.pathname === appRoutes.FACEBOOK_HOME
              ? `fill-facebook-primary`
              : ``
          }`}
        />
      </Link>
      <Link to={appRoutes.FACEBOOK_FRIENDS}>
        <HiUsers
          size={24}
          className={`${
            location.pathname === appRoutes.FACEBOOK_FRIENDS
              ? `fill-facebook-primary`
              : ``
          }`}
        />
      </Link>
      <Link to={appRoutes.FACEBOOK_HOME}>
        <FaFacebookMessenger size={24} className="fill-facebook-dark" />
      </Link>
      <Link to={appRoutes.FACEBOOK_HOME}>
        <IoNotifications size={24} className="fill-facebook-dark" />
      </Link>
      <Link to={appRoutes.FACEBOOK_HOME}>
        <FaSearch size={24} className="fill-facebook-dark" />
      </Link>
      <Link to={appRoutes.FACEBOOK_HOME}>
        <BsGrid3X3GapFill size={24} className="fill-facebook-dark" />
      </Link>
      <Link to={appRoutes.FACEBOOK_HOME}>
        <SiHomeassistantcommunitystore
          size={24}
          className="fill-facebook-dark"
        />
      </Link>
      <Link to={appRoutes.FACEBOOK_HOME}>
        <HiUserGroup size={24} className="fill-facebook-dark" />
      </Link>
      <Link to={appRoutes.INSTAGRAM_HOME}>
        <RiInstagramFill size={27} className="fill-facebook-dark" />
      </Link>
    </nav>
  );
}

export default FacebookSidebar;
