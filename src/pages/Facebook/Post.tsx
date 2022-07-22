import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import helpers from "../../utils/helpers";
import Image from "../../components/ui/Image";
import PostActions from "./PostActions";

type User = {
  name: string;
  profilePicture: string;
};

type PostProps = {
  id: string;
  user: User;
  description: string;
  image: string;
  postedOn: number;
  likes: number;
  liked: boolean;
  comments: any[];
};

function Post({
  id,
  user,
  description,
  image,
  postedOn,
  likes,
  liked,
  comments,
}: PostProps) {
  return (
    <div
      className="bg-white w-auto h-auto rounded-lg shadow py-4 flex flex-col gap-y-2"
      key={id}
    >
      <div className="flex justify-between w-full h-10 px-4">
        <div className="flex justify-between gap-x-3">
          <Image
            srcURL={
              user.profilePicture ||
              "https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar-300x300.jpg"
            }
            alt="Profile Picture"
            className="rounded-full w-10 h-10 object-cover"
          />
          <div>
            <p className="text-sm text-facebook-dark font-semibold">
              {user?.name}
            </p>
            <p className="text-xs text-facebook-normal font-light">
              {helpers.formatTheDateInRelativeTime(postedOn, "day")}
            </p>
          </div>
        </div>
        <BsThreeDots className="text-facebook-normal h-6 w-6 md:h-8 md:w-8 cursor-not-allowed" />
      </div>
      <div className="flex flex-col gap-y-2">
        {description && (
          <p className="px-4 text-base text-facebook-dark font-light">
            {description}
          </p>
        )}
        {image && (
          <Image
            srcURL={image}
            alt="Post Image"
            className="max-w-full h-auto"
          />
        )}
        <div className="flex justify-between items-center px-4 text-base text-facebook-normal">
          {likes > 0 && (
            <div className="flex gap-x-1 items-center">
              <AiFillLike size={18} className=" fill-facebook-primary" />
              {liked ? <p>{`You and ${likes} others`}</p> : <p>{likes}</p>}
            </div>
          )}
          {comments?.length > 0 && (
            <p className="cursor-pointer">{`${comments.length} comments`}</p>
          )}
        </div>
      </div>
      <hr className="mx-4" />
      <PostActions liked={liked} />
    </div>
  );
}

export default Post;
