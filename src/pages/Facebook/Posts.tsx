import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { BiMessage } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import Image from "../../components/ui/Image";
import helpers from "../../utils/helpers";

type PostsProps = {
  data: any[];
};

function Posts({ data }: PostsProps) {
  return (
    <div className="container mx-auto bg-transparent pb-5">
      <div className="mx-2 md:mx-5 lg:mx-0">
        {data?.length === 0 ? (
          <h1 className="text-facebook-normal text-lg md:text-2xl lg:text-3xl text-center">
            No posts found.
          </h1>
        ) : (
          <div className="flex flex-col gap-y-4">
            {data?.map((post) => {
              const {
                id,
                user,
                postedOn,
                description,
                image,
                likes,
                liked,
                comments,
              } = post;
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
                      <div className="flex gap-x-1 items-center">
                        <AiFillLike
                          size={18}
                          className=" text-facebook-primary"
                        />
                        {liked ? (
                          <p>{`You and ${likes} others`}</p>
                        ) : (
                          <p>{likes}</p>
                        )}
                      </div>
                      {comments?.length > 0 && (
                        <p className="cursor-pointer">{`${comments.length} comments`}</p>
                      )}
                    </div>
                  </div>
                  <hr className="mx-4" />
                  <div className="flex items-center justify-around text-facebook-normal">
                    <div
                      className={`flex gap-x-1 items-center cursor-not-allowed ${
                        liked ? `text-facebook-primary` : ``
                      }`}
                    >
                      {liked ? (
                        <AiFillLike size={18} />
                      ) : (
                        <AiOutlineLike size={18} />
                      )}
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
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Posts;
