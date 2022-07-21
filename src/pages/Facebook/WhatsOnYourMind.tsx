import React from "react";
import TextArea from "../../components/form/TextArea";
import Image from "../../components/ui/Image";

type WhatsOnYourMindProps = {
  profilePictureURL: string;
  name: string;
};

function WhatsOnYourMind({ profilePictureURL, name }: WhatsOnYourMindProps) {
  return (
    <div className="bg-white w-auto h-18 rounded-lg mx-2 md:mx-5 lg:mx-0 shadow">
      <div className="flex items-center justify-around p-4 gap-x-3">
        <Image
          srcURL={profilePictureURL}
          alt="Profile Picture"
          className="rounded-full w-10 h-10"
        />
        <TextArea
          className="bg-facebook-light w-full h-10 rounded-full resize-none border border-facebook-light py-3 md:py-2
        px-4 text-facebook-normal align-middle focus:outline-none focus:bg-white
        focus:border-facebook-primary text-xs md:text-sm placeholder:text-facebook-normal"
          placeholder={`What's on your mind, ${name}?`}
        />
      </div>
    </div>
  );
}

export default WhatsOnYourMind;
