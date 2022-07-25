import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiBookmark } from "react-icons/fi";
import { FaReact, FaLaptopCode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { CgIfDesign } from "react-icons/cg";
import { BiMoviePlay, BiFlag, BiCalendar } from "react-icons/bi";
import { BsSoundwave } from "react-icons/bs";
import FacebookHeader from "../../../layouts/FacebookHeader";
import WhatsOnYourMind from "./WhatsOnYourMind";
import * as data from "../../../data/facebook.json";
import Posts from "./Posts";
import FacebookSidebar from "../../../layouts/FacebookSidebar";
import Requests from "../Friends/Requests";
import Online from "../Friends/Online";
import appRoutes from "../../../utils/routes";
import Loader from "../../../components/ui/Loader";

type MainContentProps = {
  name: string;
  profilePicture: string;
  posts: any[];
};

function MainContent({ name, profilePicture, posts }: MainContentProps) {
  return (
    <>
      <WhatsOnYourMind
        name={name}
        profilePictureURL={
          profilePicture ||
          "https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar-300x300.jpg"
        }
      />
      <Posts data={posts} />
    </>
  );
}

function SuggestedAndShortcuts() {
  return (
    <div className="h-full flex flex-col gap-y-4 pt-5 px-5">
      <div>
        <Link
          to={appRoutes.FACEBOOK_HOME}
          className="text-facebook-primary text-3xl font-semibold"
        >
          facebook
        </Link>
      </div>
      <div className="flex flex-col gap-y-3">
        <p className="text-lg text-facebook-dark font-semibold">Suggested</p>
        <ul className="flex flex-col gap-y-3">
          <li className="flex gap-x-2 items-center text-facebook-dark text-base font-normal">
            <FiBookmark size={24} />
            <Link to={appRoutes.FACEBOOK_HOME}>Saved</Link>
          </li>
          <li className="flex gap-x-2 items-center text-facebook-dark text-base font-normal">
            <BiMoviePlay size={24} />
            <Link to={appRoutes.FACEBOOK_HOME}>Watch</Link>
          </li>
          <li className="flex gap-x-2 items-center text-facebook-dark text-base font-normal">
            <BiFlag size={24} />
            <Link to={appRoutes.FACEBOOK_HOME}>Pages</Link>
          </li>
          <li className="flex gap-x-2 items-center text-facebook-dark text-base font-normal">
            <BiCalendar size={24} />
            <Link to={appRoutes.FACEBOOK_HOME}>Events</Link>
          </li>
          <li className="flex gap-x-2 items-center text-facebook-dark text-base font-normal">
            <BsSoundwave size={24} />
            <Link to={appRoutes.FACEBOOK_HOME}>Most Recents</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-y-3">
        <p className="text-lg text-facebook-dark font-semibold">
          Your shortcuts
        </p>
        <ul className="flex flex-col gap-y-3">
          <li className="flex gap-x-2 items-center text-facebook-dark text-base font-normal">
            <FaReact size={24} />
            <Link to={appRoutes.FACEBOOK_HOME}>React.js</Link>
          </li>
          <li className="flex gap-x-2 items-center text-facebook-dark text-base font-normal">
            <IoLogoJavascript size={24} />
            <Link to={appRoutes.FACEBOOK_HOME}>Talk.js</Link>
          </li>
          <li className="flex gap-x-2 items-center text-facebook-dark text-base font-normal">
            <CgIfDesign size={24} />
            <Link to={appRoutes.FACEBOOK_HOME}>UI/UX</Link>
          </li>
          <li className="flex gap-x-2 items-center text-facebook-dark text-base font-normal">
            <FaLaptopCode size={24} />
            <Link to={appRoutes.FACEBOOK_HOME}>Progmming</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { user, posts, friends } = data;

  useEffect(() => {
    window.setTimeout(() => setIsLoading(!isLoading), 1000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader placeAt="page" forWhich="Facebook" />
      ) : (
        <div
          className={posts?.length === 0 ? `h-screen` : `h-auto`}
          style={{ backgroundColor: "#DADDE1" }}
        >
          <div className="hidden lg:block left-area">
            <div className="flex h-full w-full">
              <FacebookSidebar profilePicture={user.profilePicture} />
              <SuggestedAndShortcuts />
            </div>
          </div>
          <div className="block lg:hidden pt-9">
            <FacebookHeader />
            <div className="container mx-auto py-5 flex flex-col gap-y-5">
              <MainContent
                name={user.name}
                profilePicture={user.profilePicture}
                posts={posts}
              />
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="middle-area p-5 flex flex-col gap-y-5">
              <MainContent
                name={user.name}
                profilePicture={user.profilePicture}
                posts={posts}
              />
            </div>
          </div>
          <div className="hidden lg:block right-area no-scrollbar">
            <div className="flex flex-col gap-y-3 py-5 pr-5">
              <Requests
                heading="Friends Requests"
                type="In"
                data={friends.request.slice(0, 1)}
              />
              <Online data={friends.online} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
