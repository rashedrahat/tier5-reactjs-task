import React, { useEffect, useState } from "react";
import { RiUserShared2Fill } from "react-icons/ri";
import { FaUserPlus } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiFillGift } from "react-icons/ai";
import { Link } from "react-router-dom";
import Online from "./Online";
import Requests from "./Requests";
import * as data from "../../../data/facebook.json";
import FacebookSidebar from "../../../layouts/FacebookSidebar";
import FacebookHeader from "../../../layouts/FacebookHeader";
import appRoutes from "../../../utils/routes";
import Loader from "../../../components/ui/Loader";

type People = {
  username: string;
  name: string;
  profilePicture: string;
  numOfMutualFrnd: number;
};

type Frnds = {
  request: People[];
  online: People[];
};

type MainContentProps = {
  friends: Frnds;
};

function MainContent({ friends }: MainContentProps) {
  return (
    <>
      <Requests heading="Friends Requests" type="In" data={friends.request} />
      <Requests
        heading="People you may know"
        type="Out"
        data={friends.request}
      />
    </>
  );
}

function Misc() {
  return (
    <div className="h-full flex flex-col gap-y-4 pt-5 px-5">
      <div className="flex flex-col gap-y-3">
        <p className="text-lg text-facebook-dark font-semibold">Friends</p>
        <ul className="flex flex-col gap-y-3">
          <li className="flex gap-x-2 items-center text-facebook-dark text-base font-normal">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-facebook-light">
              <RiUserShared2Fill size={22} />
            </div>
            <Link to={appRoutes.FACEBOOK_FRIENDS}>Friend Requests</Link>
          </li>
          <li className="flex gap-x-2 items-center text-facebook-dark text-base font-normal">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-facebook-light">
              <FaUserPlus size={22} />
            </div>
            <Link to={appRoutes.FACEBOOK_FRIENDS}>Suggestions</Link>
          </li>
          <li className="flex gap-x-2 items-center text-facebook-dark text-base font-normal">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-facebook-light">
              <AiFillGift size={22} />
            </div>
            <Link to={appRoutes.FACEBOOK_FRIENDS}>Birthdays</Link>
          </li>
          <li className="flex gap-x-2 items-center text-facebook-dark text-base font-normal">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-facebook-light">
              <BsFillPersonLinesFill size={22} />
            </div>
            <Link to={appRoutes.FACEBOOK_FRIENDS}>Custom List</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Friends() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { user, friends } = data;

  useEffect(() => {
    window.setTimeout(() => setIsLoading(!isLoading), 1000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader placeAt="page" forWhich="Facebook" />
      ) : (
        <div className="bg-facebook-body">
          <div className="hidden lg:block left-area">
            <div className="flex h-full w-full">
              <FacebookSidebar profilePicture={user.profilePicture} />
              <Misc />
            </div>
          </div>
          <div className="block lg:hidden pt-9">
            <FacebookHeader />
            <div className="container mx-auto py-5 flex flex-col gap-y-5">
              <MainContent friends={friends} />
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="bg-white middle-area p-5 flex flex-col gap-y-5">
              <MainContent friends={friends} />
            </div>
          </div>
          <div className="hidden lg:block right-area no-scrollbar">
            <div className="flex flex-col gap-y-3 py-5 px-5">
              <Online data={friends.online} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Friends;
