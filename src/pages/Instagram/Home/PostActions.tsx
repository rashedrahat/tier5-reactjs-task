import React from "react";
import { FiSend } from "react-icons/fi";
import { BsBookmark, BsChat, BsHeart, BsHeartFill } from "react-icons/bs";

type PostActionProps = {
  liked: boolean;
  commentHandler: (show: boolean) => void;
  proceedToComment: boolean;
};

function PostActions({
  liked,
  commentHandler,
  proceedToComment,
}: PostActionProps) {
  return (
    <div className="flex items-center justify-between text-instagram-primary px-4">
      <div className="flex gap-x-3">
        <div style={{ marginTop: "2px" }}>
          {liked ? (
            <BsHeartFill
              size={20}
              className="cursor-not-allowed fill-red-600"
            />
          ) : (
            <BsHeart size={20} className="cursor-not-allowed" />
          )}
        </div>
        <BsChat
          size={20}
          className="cursor-pointer"
          onClick={() => commentHandler(!proceedToComment)}
          aria-hidden="true"
        />
        <FiSend size={20} className="cursor-not-allowed" />
      </div>
      <div>
        <BsBookmark size={20} className="cursor-not-allowed" />
      </div>
    </div>
  );
}

export default PostActions;
