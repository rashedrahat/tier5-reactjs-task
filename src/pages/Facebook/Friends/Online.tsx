import React from "react";
import People from "./People";

type User = {
  username: string;
  name: string;
  profilePicture: string;
};

type OnlineProps = {
  data: User[];
};

function Online({ data }: OnlineProps) {
  return (
    <div className="flex flex-col gap-y-5 mx-3 md:mx-5 lg:mx-0">
      <div className="flex justify-between items-center">
        <p className="text-base md:text-lg lg:text-xl text-green-500 font-semibold">
          Online - {data.length}
        </p>
      </div>
      <div>
        {data?.length === 0 ? (
          <h1 className="text-facebook-normal text-lg md:text-2xl lg:text-3xl text-center">
            No one is here.
          </h1>
        ) : (
          <div className="flex flex-col gap-y-4">
            {data?.map((req) => {
              const { name, profilePicture } = req;
              return <People name={name} profilePicture={profilePicture} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Online;
