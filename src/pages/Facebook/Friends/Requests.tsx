import React from "react";
import { Link } from "react-router-dom";
import appRoutes from "../../../utils/routes";
import People from "./People";

type User = {
  username: string;
  name: string;
  profilePicture: string;
  numOfMutualFrnd: number;
};

type RequestsProps = {
  data: User[];
};

function Requests({ data }: RequestsProps) {
  return (
    <div className="flex flex-col gap-y-5 mx-3 md:mx-5 lg:mx-0">
      <div className="flex justify-between items-center">
        <p className="text-base md:text-lg lg:text-xl text-facebook-dark font-semibold">
          Friend Requests
        </p>
        <Link
          to={appRoutes.FACEBOOK_FRIENDS}
          className="text-sm md:text-base text-facebook-primary"
        >
          See all
        </Link>
      </div>
      <div>
        {data?.length === 0 ? (
          <h1 className="text-facebook-normal text-lg md:text-2xl lg:text-3xl text-center">
            No requests found.
          </h1>
        ) : (
          <div className="flex flex-col gap-y-4">
            {data?.map((req) => {
              const { name, profilePicture, numOfMutualFrnd } = req;
              return (
                <People
                  name={name}
                  profilePicture={profilePicture}
                  numOfMutualFrnd={numOfMutualFrnd}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Requests;
