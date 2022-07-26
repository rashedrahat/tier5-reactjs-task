import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { FaPlusCircle } from "react-icons/fa";
import { StatusAvatarProps } from "../../types/global";
import Image from "../ui/Image";

function StatusAvatar({
  name,
  profilePicture,
  readonly,
  forWhich,
}: StatusAvatarProps) {
  return (
    <div
      className={`flex flex-col gap-y-1 items-center ${
        forWhich === "Instagram" ? `gap-y-1` : ``
      } cursor-not-allowed`}
    >
      <div
        className={`relative rounded-full w-16 h-16 flex justify-center items-center ${
          readonly ? `bg-gradient-to-r to-yellow-500 from-pink-500` : ``
        }`}
      >
        <Image
          srcURL={profilePicture}
          alt={name}
          className={`rounded-full ${
            forWhich === "Instagram" ? `w-14 h-14` : `w-10 h-10`
          } object-cover`}
        />
        {forWhich === "Facebook" && (
          <div className="absolute rounded-full bottom-2 right-2 flex items-center justify-center bg-white w-4 h-4">
            <GoPrimitiveDot className="w-4 h-4 fill-green-600" />
          </div>
        )}
        {!readonly && forWhich === "Instagram" && (
          <div className="absolute rounded-full bottom-1 right-1 flex items-center justify-center bg-white w-5 h-5">
            <FaPlusCircle className="w-4 h-4 fill-instagram-blue" />
          </div>
        )}
      </div>
      <p
        className={`text-sm ${
          forWhich === "Instagram"
            ? `text-instagram-tertiary`
            : `text-facebook-dark -mt-2`
        } text-center`}
      >
        {name}
      </p>
    </div>
  );
}

export default StatusAvatar;
