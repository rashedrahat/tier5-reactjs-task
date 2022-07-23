import React from "react";
import { Link } from "react-router-dom";
import Image from "../../../components/ui/Image";
import appRoutes from "../../../utils/routes";

type User = {
  username: string;
  name: string;
  profilePicture: string;
};

type SuggestionsProps = {
  data: User[];
};

function People({ username, name, profilePicture }: User) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-4">
        <Image
          srcURL={profilePicture}
          alt="Profile Picture"
          className="rounded-full w-10 h-10 object-cover"
        />
        <div className="flex flex-col items-start">
          <p className="text-sm font-semibold text-instagram-primary">
            {username}
          </p>
          <p className="text-sm font-normal text-instagram-secondary">{name}</p>
        </div>
      </div>
      <div>
        <button
          type="button"
          className="text-sm text-instagram-blue font-semibold cursor-not-allowed"
        >
          Follow
        </button>
      </div>
    </div>
  );
}

function Suggestions({ data }: SuggestionsProps) {
  return (
    <div className="flex flex-col gap-y-5">
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
      <div className="flex flex-col gap-y-3 px-2">
        {data?.map((user) => {
          const { username, name, profilePicture } = user;
          return (
            <People
              username={username}
              name={name}
              profilePicture={profilePicture}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Suggestions;
