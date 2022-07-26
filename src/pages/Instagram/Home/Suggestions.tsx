import React from "react";
import { Link } from "react-router-dom";
import appRoutes from "../../../utils/routes";
import UserCard from "./UserCard";

type User = {
  username: string;
  name: string;
  profilePicture: string;
};

type SuggestionsProps = {
  data: User[];
};

function Suggestions({ data }: SuggestionsProps) {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex justify-between items-center">
        <p className="text-base text-instagram-secondary font-semibold">
          Suggestions for you
        </p>
        <Link
          to={appRoutes.INSTAGRAM_HOME}
          className="text-sm text-instagram-primary font-semibold cursor-not-allowed"
        >
          See All
        </Link>
      </div>
      <div className="flex flex-col gap-y-3">
        {data?.map((user) => {
          const { username, name, profilePicture } = user;
          return (
            <UserCard
              username={username}
              name={name}
              profilePicture={profilePicture}
              actionName="Follow"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Suggestions;
