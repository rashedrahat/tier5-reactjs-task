import React from "react";
import { ActiveUserProps } from "../../../types/facebook";
import ActiveUser from "./ActiveUser";

type ActiveUsersProps = {
  data: ActiveUserProps[];
};

function ActiveUsers({ data }: ActiveUsersProps) {
  return (
    <div className="bg-white max-w-screen-md overflow-x-auto online-scrollbar h-auto rounded-lg mx-3 md:mx-5 lg:mx-0 shadow flex md:hidden items-center justify-around p-4 gap-x-3">
      {data?.map((user) => {
        return (
          <ActiveUser name={user.name} profilePicture={user.profilePicture} />
        );
      })}
    </div>
  );
}

export default ActiveUsers;
