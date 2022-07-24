import React from "react";
import UserCommentCard from "./UserCommentCard";

type PostCommentsProps = {
  data: any[];
};

function PostComments({ data }: PostCommentsProps) {
  return (
    <div className="flex flex-col px-4 gap-y-4 max-h-52 no-scrollbar overflow-y-auto border-t border-gray-300 pt-4">
      <div className="flex flex-col gap-y-5 mb-2">
        {data?.map((comment) => {
          const { user, text, createdAt } = comment;
          return (
            <UserCommentCard
              userProfilePictureURL={
                user.profilePicture ||
                "https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar-300x300.jpg"
              }
              userName={user.username}
              comment={text}
              commentedAt={createdAt}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PostComments;
