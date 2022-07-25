import React from "react";
import Post from "./Post";

type PostsProps = {
  data: any[];
};

function Posts({ data }: PostsProps) {
  return (
    <div className="mx-3 md:mx-5 lg:mx-0">
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
              <Post
                id={id}
                user={user}
                description={description}
                image={image}
                postedOn={postedOn}
                likes={likes}
                liked={liked}
                comments={comments}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Posts;
