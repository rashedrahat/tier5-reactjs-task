/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import InstagramHeader from "../../../layouts/InstagramHeader";
import Stories from "./Stories";
import * as data from "../../../data/instagram.json";

function Home() {
  const { user, stories } = data;

  return (
    <div style={{ backgroundColor: "#FAFAFA" }}>
      <InstagramHeader profilePicture={user.profilePicture} />
      <div className="container mx-auto md:py-5">
        <div className="flex justify-center gap-x-5">
          <div className="h-screen w-full md:w-1/2">
            <Stories currUserAvatar={user.profilePicture} data={stories} />
          </div>
          <div className="hidden md:flex flex-col h-screen w-1/2">
            <div>1</div>
            <div>2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
