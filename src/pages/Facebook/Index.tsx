import React from "react";
import FacebookHeader from "../../layouts/FacebookHeader";
import WhatsOnYourMind from "./WhatsOnYourMind";
import * as data from "../../data/facebook.json";

function Facebook() {
  const { user } = data;

  return (
    <div className="h-screen" style={{ backgroundColor: "#DADDE1" }}>
      <FacebookHeader />
      <div className="container mx-auto bg-transparent py-5">
        <WhatsOnYourMind
          name={user?.name}
          profilePictureURL={
            user.profile_picture ||
            "https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar-300x300.jpg"
          }
        />
      </div>
    </div>
  );
}

export default Facebook;
