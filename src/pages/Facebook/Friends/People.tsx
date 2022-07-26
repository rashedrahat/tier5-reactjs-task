/* eslint-disable react/require-default-props */
import React from "react";
import { FaFacebookMessenger, FaFacebook, FaUserTimes } from "react-icons/fa";
import { ImUserPlus, ImUserMinus } from "react-icons/im";
import { RiUserSharedFill } from "react-icons/ri";
import Image from "../../../components/ui/Image";
import { PeopleProps } from "../../../types/facebook";

function People({
  name,
  profilePicture,
  numOfMutualFrnd,
  type,
  reqType,
}: PeopleProps) {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between gap-x-3">
          <Image
            srcURL={
              profilePicture ||
              "https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar-300x300.jpg"
            }
            alt="Profile Picture"
            className="rounded-full w-10 h-10 object-cover"
          />
          <div>
            <p className="text-sm text-facebook-dark font-normal">{name}</p>
            {numOfMutualFrnd && numOfMutualFrnd > 0 && (
              <p className="text-xs text-facebook-dark font-light">{`${numOfMutualFrnd} mutual friend${
                numOfMutualFrnd > 1 ? `s` : ``
              }`}</p>
            )}
          </div>
        </div>
        {type !== "Friend" ? (
          <div className="flex items-center justify-between gap-x-2">
            <div className="w-8 h-8 rounded-full bg-facebook-light flex justify-center items-center">
              {reqType === "In" ? (
                <ImUserPlus className="fill-facebook-primary cursor-not-allowed" />
              ) : (
                <RiUserSharedFill className="fill-facebook-primary cursor-not-allowed" />
              )}
            </div>
            <div className="w-8 h-8 rounded-full bg-facebook-light flex justify-center items-center">
              {reqType === "In" ? (
                <ImUserMinus className="fill-red-500 cursor-not-allowed" />
              ) : (
                <FaUserTimes className="fill-red-500 cursor-not-allowed" />
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-x-1">
            <div className="w-8 h-8 rounded-full bg-facebook-light flex justify-center items-center">
              <FaFacebookMessenger className="fill-facebook-primary cursor-not-allowed" />
            </div>
            <div className="w-8 h-8 rounded-full bg-facebook-light flex justify-center items-center">
              <FaFacebook className="fill-facebook-primary cursor-not-allowed" />
            </div>
          </div>
        )}
      </div>
      <hr />
    </>
  );
}

export default People;
