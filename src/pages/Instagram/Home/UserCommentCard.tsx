/* eslint-disable react/require-default-props */
import React from "react";
import Image from "../../../components/ui/Image";
import helpers from "../../../utils/helpers";

type UserCommentCardProps = {
  userProfilePictureURL: string;
  userName: string;
  comment: string;
  commentedAt: number;
};

function UserCommentCard({
  userProfilePictureURL,
  userName,
  comment,
  commentedAt,
}: UserCommentCardProps) {
  return (
    <div className="flex gap-x-2 items-start">
      <Image
        srcURL={userProfilePictureURL}
        alt="Profile Picture"
        className="w-8 h-8 object-cover rounded-full"
      />
      <div className="flex flex-col gap-y-3">
        <p className="text-sm text-instagram-primary font-normal">
          <span className="font-semibold">{userName}</span>&nbsp;{comment}
        </p>
        <p className="text-xs text-instagram-secondary">
          {helpers.formatTheDateInRelativeTime(commentedAt, "hour")}
        </p>
      </div>
    </div>
  );
}

export default UserCommentCard;
