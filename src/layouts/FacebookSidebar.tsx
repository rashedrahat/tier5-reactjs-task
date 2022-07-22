import React from "react";
import { FaFacebookMessenger, FaSearch } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { HiUsers, HiUserGroup } from "react-icons/hi";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import Image from "../components/ui/Image";

type FacebookSidebarProps = {
  profilePicture: string;
};

function FacebookSidebar({ profilePicture }: FacebookSidebarProps) {
  return (
    <ul className="bg-white w-16 h-full flex flex-col items-center gap-y-5 pt-5">
      <li>
        <Image
          srcURL={
            profilePicture ||
            "https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar-300x300.jpg"
          }
          alt="Profile Picture"
          className="rounded-full w-9 h-9 object-cover"
        />
      </li>
      <li>
        <AiFillHome
          size={24}
          className="cursor-pointer fill-facebook-primary"
        />
      </li>
      <li>
        <HiUsers size={24} className="cursor-pointer fill-facebook-dark" />
      </li>
      <li>
        <FaFacebookMessenger
          size={24}
          className="cursor-pointer fill-facebook-dark"
        />
      </li>
      <li>
        <IoNotifications
          size={24}
          className="cursor-pointer fill-facebook-dark"
        />
      </li>
      <li>
        <FaSearch size={24} className="cursor-pointer fill-facebook-dark" />
      </li>
      <li>
        <BsGrid3X3GapFill
          size={24}
          className="cursor-pointer fill-facebook-dark"
        />
      </li>
      <li>
        <SiHomeassistantcommunitystore
          size={24}
          className="cursor-pointer fill-facebook-dark"
        />
      </li>
      <li>
        <HiUserGroup size={24} className="cursor-pointer fill-facebook-dark" />
      </li>
    </ul>
  );
}

export default FacebookSidebar;
