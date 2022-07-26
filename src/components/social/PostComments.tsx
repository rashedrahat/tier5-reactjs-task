import React, { useEffect, useState } from "react";
import { PostCommentsProps } from "../../types/global";
import Loader from "../ui/Loader";
import UserCommentBox from "./UserCommentBox";

function Facebook({ userProfilePiture, isLoading, data }: PostCommentsProps) {
  return (
    <div className="flex flex-col px-4 gap-y-4 max-h-52 no-scrollbar overflow-y-auto">
      <hr />
      {isLoading ? (
        <Loader placeAt="block" forWhich="Facebook" />
      ) : (
        <div className="flex flex-col gap-y-2">
          <div className="mb-2">
            <UserCommentBox
              key={Math.floor(Math.random() * 100)}
              forWhich="Facebook"
              actionType="Write"
              userProfilePictureURL={
                userProfilePiture ||
                "https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar-300x300.jpg"
              }
              comment="Write a comment..."
              boxClass="bg-transparent flex gap-x-2"
              userProfilePitureClass="rounded-full w-9 h-9 object-cover"
            />
          </div>
          {data?.map((comment) => {
            const { user, text, createdAt } = comment;
            return (
              <UserCommentBox
                key={Math.floor(Math.random() * 100)}
                forWhich="Facebook"
                actionType="See"
                userProfilePictureURL={
                  user.profilePicture ||
                  "https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar-300x300.jpg"
                }
                userName={user.name}
                comment={text}
                commentedAt={createdAt}
                boxClass="bg-transparent flex gap-x-2"
                userProfilePitureClass="rounded-full w-9 h-9 object-cover"
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

function Instagram({ isLoading, data }: PostCommentsProps) {
  return (
    <div className="flex flex-col px-4 gap-y-4 max-h-52 no-scrollbar overflow-y-auto border-t border-gray-300 pt-4">
      {isLoading ? (
        <Loader placeAt="block" forWhich="Instagram" />
      ) : (
        <div className="flex flex-col gap-y-5 mb-2">
          {data?.map((comment) => {
            const { user, text, createdAt } = comment;
            return (
              <UserCommentBox
                key={Math.floor(Math.random() * 100)}
                forWhich="Instagram"
                userProfilePictureURL={
                  user.profilePicture ||
                  "https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar-300x300.jpg"
                }
                userName={user.username}
                comment={text}
                commentedAt={createdAt}
                boxClass="flex gap-x-2 items-start"
                userProfilePitureClass="rounded-full w-8 h-8 object-cover"
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

function PostComments({
  forWhich,
  userProfilePiture,
  data,
}: PostCommentsProps) {
  const [isLoading, setIsLoading] = useState<boolean>(data?.length > 0);

  useEffect(() => {
    if (isLoading) window.setTimeout(() => setIsLoading(!isLoading), 1000);
  }, [isLoading]);

  return (
    <>
      {forWhich === "Facebook" && (
        <Facebook
          userProfilePiture={userProfilePiture}
          isLoading={isLoading}
          data={data}
        />
      )}
      {forWhich === "Instagram" && (
        <Instagram isLoading={isLoading} data={data} />
      )}
    </>
  );
}

export default PostComments;
