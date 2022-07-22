import React from "react";
import FacebookHeader from "../../layouts/FacebookHeader";
import WhatsOnYourMind from "./WhatsOnYourMind";
import * as data from "../../data/facebook.json";
import Posts from "./Posts";

function Facebook() {
  const { user, posts } = data;

  return (
    <div
      className={posts?.length === 0 ? `h-screen` : `h-auto`}
      style={{ backgroundColor: "#DADDE1" }}
    >
      <FacebookHeader />
      <div className="container mx-auto bg-transparent py-5 flex flex-col gap-y-5">
        <WhatsOnYourMind
          name={user.name}
          profilePictureURL={
            user.profilePicture ||
            "https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar-300x300.jpg"
          }
        />
        <Posts data={posts} />
      </div>
    </div>
  );
}

export default Facebook;
