import React from "react";
import { Link } from "react-router-dom";
import appRoutes from "../../../utils/routes";
import Image from "../../../components/ui/Image";

type User = {
  username: string;
  name: string;
  profilePicture: string;
};

type AccountSwitchProps = {
  currUser: User;
};

function AccountSwitch({ currUser }: AccountSwitchProps) {
  const { username, name, profilePicture } = currUser;
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-4">
        <Image
          srcURL={profilePicture}
          alt="Profile Picture"
          className="rounded-full w-14 h-14 object-cover"
        />
        <div className="flex flex-col items-start">
          <p className="text-base font-semibold text-instagram-primary">
            {username}
          </p>
          <p className="text-base font-normal text-instagram-secondary">
            {name}
          </p>
        </div>
      </div>
      <div>
        <Link
          to={appRoutes.INSTAGRAM_HOME}
          className="text-sm text-instagram-blue font-semibold cursor-not-allowed"
        >
          Switch
        </Link>
      </div>
    </div>
  );
}

export default AccountSwitch;
