import React from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { BiMessage } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";

type PostActionProps = {
  liked: boolean;
};

function PostActions({ liked }: PostActionProps) {
  return (
    <div className="flex items-center justify-around text-facebook-normal">
      <div
        className={`flex gap-x-1 items-center cursor-not-allowed ${
          liked ? `text-facebook-primary` : ``
        }`}
      >
        {liked ? <AiFillLike size={18} /> : <AiOutlineLike size={18} />}
        <p>Like</p>
      </div>
      <div className="flex gap-x-1 items-center cursor-pointer">
        <BiMessage size={18} className="mt-1" />
        <p>Comment</p>
      </div>
      <div className="flex gap-x-1 items-center cursor-not-allowed">
        <RiShareForwardLine size={18} className="mt-1" />
        <p>Share</p>
      </div>
    </div>
  );
}

export default PostActions;
