import React from "react";
import StatusAvatar from "../../../components/social/StatusAvatar";
import { StatusAvatarProps } from "../../../types/global";

type StoriesProps = {
  currUserAvatar: string;
  data: StatusAvatarProps[];
};

function Stories({ currUserAvatar, data }: StoriesProps) {
  return (
    <div className="flex w-full overflow-x-auto stories-scrollbar border-b md:border border-gray-300 md:rounded-lg h-auto p-4 gap-x-4">
      <StatusAvatar
        key={Math.floor(Math.random() * 100)}
        readonly={false}
        forWhich="Instagram"
        name="Your story"
        profilePicture={currUserAvatar}
      />
      {data?.map((story) => {
        return (
          <StatusAvatar
            key={Math.floor(Math.random() * 100)}
            readonly
            forWhich="Instagram"
            name={story.name}
            profilePicture={story.profilePicture}
          />
        );
      })}
    </div>
  );
}

export default Stories;
