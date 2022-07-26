import React from "react";
import { StatusAvatarProps } from "../../../types/global";
import StatusAvatar from "../../../components/social/StatusAvatar";

type ActiveUsersProps = {
  data: StatusAvatarProps[];
};

function ActiveUsers({ data }: ActiveUsersProps) {
  return (
    <div className="bg-white max-w-full overflow-x-auto online-scrollbar h-22 rounded-lg mx-3 md:mx-5 lg:mx-0 shadow flex md:hidden items-center p-2 gap-x-2">
      {data?.map((user) => {
        return (
          <StatusAvatar
            forWhich="Facebook"
            name={user.name}
            profilePicture={user.profilePicture}
          />
        );
      })}
    </div>
  );
}

export default ActiveUsers;
