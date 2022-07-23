import React from "react";
import { MdHomeFilled, MdOutlineExplore } from "react-icons/md";
import { FiSend, FiHeart } from "react-icons/fi";
import { TbSquarePlus } from "react-icons/tb";
import { Link } from "react-router-dom";
import appRoutes from "../utils/routes";
import Image from "../components/ui/Image";

function SearchBar() {
  return (
    <form className="flex items-center">
      <div className="relative w-full h-9">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <input
          type="text"
          id="simple-search"
          className=" bg-gray-200 border-none text-instagram-primary text-sm rounded-lg block w-full pl-10 p-2 focus:outline-none"
          placeholder="Search"
        />
      </div>
    </form>
  );
}

type NavLinksProps = {
  profilePicture: string;
};

function NavLinks({ profilePicture }: NavLinksProps) {
  return (
    <ul className="flex justify-around w-full md:w-auto md:gap-x-4">
      <li>
        <Link to={appRoutes.INSTAGRAM_HOME}>
          <MdHomeFilled size={28} className="cursor-pointer" />
        </Link>
      </li>
      <li>
        <Link to={appRoutes.INSTAGRAM_HOME}>
          <FiSend size={28} className="cursor-pointer text-instagram-primary" />
        </Link>
      </li>
      <li>
        <Link to={appRoutes.INSTAGRAM_HOME}>
          <TbSquarePlus
            size={28}
            className="cursor-pointer text-instagram-primary"
          />
        </Link>
      </li>
      <li>
        <Link to={appRoutes.INSTAGRAM_HOME}>
          <MdOutlineExplore
            size={28}
            className="cursor-pointer text-instagram-primary"
          />
        </Link>
      </li>
      <li>
        <Link to={appRoutes.INSTAGRAM_HOME}>
          <FiHeart
            size={28}
            className="cursor-pointer text-instagram-primary"
          />
        </Link>
      </li>
      <Image
        srcURL={
          profilePicture ||
          "https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar-300x300.jpg"
        }
        alt="Profile Picture"
        className="rounded-full w-7 h-7 object-cover"
      />
    </ul>
  );
}

type InstagramHeaderProps = {
  profilePicture: string;
};

function InstagramHeader({ profilePicture }: InstagramHeaderProps) {
  return (
    <div className="fixed top-0 w-full z-1">
      <div className="bg-white shadow w-full h-14 flex md:hidden items-center">
        <NavLinks profilePicture={profilePicture} />
      </div>
      <div className="bg-white shadow hidden md:flex justify-evenly items-center w-full h-16">
        <Image
          srcURL="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
          alt="Profile Picture"
          className="w-auto h-10"
        />
        <SearchBar />
        <NavLinks profilePicture={profilePicture} />
      </div>
    </div>
  );
}

export default InstagramHeader;
