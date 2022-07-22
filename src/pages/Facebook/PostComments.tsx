import React from "react";
import Image from "../../components/ui/Image";
import TextArea from "../../components/form/TextArea";

type PostCommentsProps = {
  userProfilePiture: string;
  data: any[];
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function PostComments({ userProfilePiture, data }: PostCommentsProps) {
  return (
    <div className="flex flex-col px-4 gap-y-4">
      <hr />
      <div className="flex items-center justify-between gap-x-2 h-9">
        <Image
          srcURL={userProfilePiture}
          alt="Profile Picture"
          className="rounded-full w-9 h-9 object-cover"
        />
        <TextArea
          className="bg-facebook-light w-full h-9 rounded-full resize-none border border-facebook-light py-3 md:py-2
        px-4 text-facebook-normal align-middle focus:outline-none focus:bg-white
        focus:border-facebook-primary text-xs md:text-sm placeholder:text-facebook-normal scrollbar-hide"
          placeholder="Write a comment"
        />
      </div>
    </div>
  );
}

export default PostComments;
