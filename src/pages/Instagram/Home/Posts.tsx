import React from "react";
import Post from "./Post";

type PostsProps = {
  data: any[];
};

function Posts({ data }: PostsProps) {
  return (
    <div className="mt-5 mb-5 md:mb-0">
      {data?.length === 0 ? (
        <h1 className="text-instagram-tertiary text-lg md:text-2xl lg:text-3xl text-center">
          No posts found.
        </h1>
      ) : (
        <div className="flex flex-col gap-y-3">
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
                key={Math.floor(Math.random() * 100)}
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
