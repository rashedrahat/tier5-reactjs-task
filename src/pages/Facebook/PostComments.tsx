import React from "react";
import UserCommentCard from "./UserCommentCard";

type PostCommentsProps = {
  userProfilePiture: string;
  data: any[];
};

function PostComments({ userProfilePiture, data }: PostCommentsProps) {
  return (
    <div className="flex flex-col px-4 gap-y-4">
      <hr />
      <div className="flex flex-col gap-y-2">
        <div className="mb-2">
          <UserCommentCard
            actionType="Write"
            userProfilePictureURL={userProfilePiture}
            comment="Write a comment..."
            cardClass="bg-transparent flex gap-x-2"
            userProfilePitureClass="rounded-full w-9 h-9 object-cover"
          />
        </div>
        {data?.map((comment) => {
          const { user, text, createdAt } = comment;
          return (
            <UserCommentCard
              actionType="See"
              userProfilePictureURL={
                user.profilePicture ||
                "https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar-300x300.jpg"
              }
              userName={user.name}
              comment={text}
              commentedAt={createdAt}
              cardClass="bg-transparent flex gap-x-2"
              userProfilePitureClass="rounded-full w-9 h-9 object-cover"
            />
          );
        })}
      </div>
    </div>
  );
}

export default PostComments;
