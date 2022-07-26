import React from "react";
import UserCommentBox from "../../../components/social/UserCommentBox";

type WhatsOnYourMindProps = {
  profilePictureURL: string;
  name: string;
};

function WhatsOnYourMind({ profilePictureURL, name }: WhatsOnYourMindProps) {
  return (
    <div className="bg-white w-auto h-18 rounded-lg mx-3 md:mx-5 lg:mx-0 shadow flex items-center justify-around p-4 gap-x-3">
      <UserCommentBox
        key={Math.floor(Math.random() * 100)}
        forWhich="Facebook"
        actionType="Write"
        userProfilePictureURL={profilePictureURL}
        comment={`What's on your mind, ${name}?`}
        boxClass="flex items-center justify-around gap-x-3 w-full"
        userProfilePitureClass="rounded-full w-10 h-10 object-cover"
      />
    </div>
  );
}

export default WhatsOnYourMind;
