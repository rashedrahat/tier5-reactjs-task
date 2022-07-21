import React from "react";
import FacebookHeader from "../../layouts/FacebookHeader";
import WhatsOnYourMind from "./WhatsOnYourMind";
import * as data from "../../data/facebook.json";
import Posts from "./Posts";

function Facebook() {
  const { user, posts } = data;

  return (
    <div className="h-auto" style={{ backgroundColor: "#DADDE1" }}>
      <FacebookHeader />
      <div className="container mx-auto bg-transparent py-5">
        <WhatsOnYourMind
          name={user.name}
          profilePictureURL={
            user.profilePicture ||
            "https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar-300x300.jpg"
          }
        />
      </div>
      <Posts data={posts} />
    </div>
  );
}

export default Facebook;
