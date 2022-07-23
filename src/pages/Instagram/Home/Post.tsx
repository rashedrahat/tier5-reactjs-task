import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import helpers from "../../../utils/helpers";
import Image from "../../../components/ui/Image";
import PostActions from "./PostActions";
import AddComment from "./AddComment";

type User = {
  username: string;
  hasStory: boolean;
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
  const [showComments, setShowComments] = useState<boolean>(false);
  const { hasStory, profilePicture, username } = user;

  return (
    <div
      className="bg-white w-full h-auto md:border border-gray-300 md:rounded-lg py-3 flex flex-col gap-y-3 shadow-sm md:shadow-none"
      key={id}
    >
      <div className="flex justify-between items-center w-full h-9 px-4">
        <div className="flex justify-between gap-x-3 items-center">
          <div
            className={`relative rounded-full w-11 h-11 flex justify-center items-center ${
              hasStory ? `bg-gradient-to-r to-yellow-500 from-pink-500` : ``
            }`}
          >
            <Image
              srcURL={
                profilePicture ||
                "https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar-300x300.jpg"
              }
              alt="Profile Picture"
              className="rounded-full w-9 h-9 object-cover"
            />
          </div>

          <div>
            <p className="text-sm text-facebook-dark font-semibold">
              {username}
            </p>
          </div>
        </div>
        <BsThreeDots className="text-instagram-tertiary h-4 w-4 md:h-5 md:w-5 cursor-not-allowed" />
      </div>
      <div>
        {image && (
          <Image
            srcURL={image}
            alt="Post Image"
            className="max-w-full h-auto"
          />
        )}
      </div>
      <PostActions
        liked={liked}
        commentHandler={setShowComments}
        proceedToComment={showComments}
      />
      <div className="px-4 flex flex-col gap-y-1">
        {likes > 0 && (
          <p className="text-base text-instagram-primary font-semibold">{`${likes} ${
            likes > 1 ? `likes` : `like`
          }`}</p>
        )}
        {description && (
          <p className="text-base text-facebook-dark font-light">
            {description}
          </p>
        )}
        {comments?.length > 0 && (
          <p className="text-sm text-instagram-secondary font-semibold cursor-pointer">{`View all ${
            comments.length
          } ${comments?.length > 1 ? `comments` : `comments`}`}</p>
        )}
        <p className="text-xs text-instagram-secondary font-normal uppercase">
          {helpers.formatTheDateInRelativeTime(postedOn, "day")}
        </p>
      </div>
      <AddComment />
    </div>
  );
}

export default Post;
