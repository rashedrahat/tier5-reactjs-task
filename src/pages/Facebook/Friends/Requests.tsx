import React from "react";
import { Link } from "react-router-dom";
import { PeopleProps } from "../../../types/facebook";
import appRoutes from "../../../utils/routes";
import People from "./People";

type RequestsProps = {
  heading: string;
  type: "In" | "Out";
  data: PeopleProps[];
};

function Requests({ heading, type, data }: RequestsProps) {
  return (
    <div className="flex flex-col gap-y-5 mx-3 md:mx-5 lg:mx-0">
      <div className="flex justify-between items-center">
        <p className="text-base md:text-lg lg:text-xl text-facebook-dark font-semibold">
          {heading}
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
                  key={Math.floor(Math.random() * 100)}
                  name={name}
                  profilePicture={profilePicture}
                  numOfMutualFrnd={numOfMutualFrnd}
                  type="Not Friend"
                  reqType={type}
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
