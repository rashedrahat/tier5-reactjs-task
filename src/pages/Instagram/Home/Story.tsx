import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import Image from "../../../components/ui/Image";

type StoryProps = {
  readonly: boolean;
  accountName: string;
  accountAvatarURL: string;
};

function Story({ readonly, accountName, accountAvatarURL }: StoryProps) {
  return (
    <div className="flex flex-col gap-y-1 items-center">
      <div
        className={`relative rounded-full w-16 h-16 flex justify-center items-center ${
          readonly ? `bg-gradient-to-r to-yellow-500 from-pink-500` : ``
        }`}
      >
        <Image
          srcURL={accountAvatarURL}
          alt={accountName}
          className="rounded-full w-14 h-14 object-cover"
        />
        {!readonly && (
          <div className="absolute rounded-full bottom-1 right-1 flex items-center justify-center bg-white w-5 h-5">
            <FaPlusCircle className="w-4 h-4 fill-instagram-blue" />
          </div>
        )}
      </div>
      <p className="text-sm text-instagram-tertiary">{accountName}</p>
    </div>
  );
}

export default Story;
