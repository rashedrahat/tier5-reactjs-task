import React from "react";
import { Link } from "react-router-dom";
import Image from "../../../components/ui/Image";
import appRoutes from "../../../utils/routes";

type User = {
  username: string;
  name: string;
  profilePicture: string;
  actionName: "Switch" | "Follow";
};

function UserCard({ username, name, profilePicture, actionName }: User) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-4">
        <Image
          srcURL={profilePicture}
          alt="Profile Picture"
          className={`rounded-full object-cover ${
            actionName === "Switch" ? `w-14 h-14` : `w-10 h-10`
          }`}
        />
        <div className="flex flex-col items-start">
          <p
            className={`font-semibold text-instagram-primary ${
              actionName === "Switch" ? `text-base` : `text-sm`
            }`}
          >
            {username}
          </p>
          <p
            className={`font-normal text-instagram-secondary ${
              actionName === "Switch" ? `text-base` : `text-sm`
            }`}
          >
            {name}
          </p>
        </div>
      </div>
      <div>
        {actionName === "Switch" ? (
          <Link
            to={appRoutes.INSTAGRAM_HOME}
            className="text-sm text-instagram-blue font-semibold cursor-not-allowed"
          >
            {actionName}
          </Link>
        ) : (
          <button
            type="button"
            className="text-sm text-instagram-blue font-semibold cursor-not-allowed"
          >
            {actionName}
          </button>
        )}
      </div>
    </div>
  );
}

export default UserCard;
