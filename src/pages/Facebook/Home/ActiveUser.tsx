import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import Image from "../../../components/ui/Image";
import { ActiveUserProps } from "../../../types/facebook";

function ActiveUser({ name, profilePicture }: ActiveUserProps) {
  return (
    <div className="flex flex-col items-center cursor-not-allowed">
      <div className="relative rounded-full w-16 h-16 flex justify-center items-center">
        <Image
          srcURL={profilePicture}
          alt={name}
          className="rounded-full w-10 h-10 object-cover"
        />
        <div className="absolute rounded-full bottom-2 right-2 flex items-center justify-center bg-white w-4 h-4">
          <GoPrimitiveDot className="w-4 h-4 fill-green-600" />
        </div>
      </div>
      <p className="text-sm text-facebook-dark text-center">{name}</p>
    </div>
  );
}

export default ActiveUser;
