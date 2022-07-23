/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import InstagramHeader from "../../../layouts/InstagramHeader";
import Stories from "./Stories";
import * as data from "../../../data/instagram.json";
import AccountSwitch from "./AccountSwitch";

function Home() {
  const { user, stories } = data;

  return (
    <div style={{ backgroundColor: "#FAFAFA" }}>
      <InstagramHeader profilePicture={user.profilePicture} />
      <div className="h-auto md:py-8 mt-14 md:mt-16">
        <div className="flex justify-center">
          <div className="flex w-full h-auto md:w-10/12 lg:w-7/12 md:gap-x-5 lg:gap-x-10">
            <div className="w-full md:w-7/12">
              <Stories currUserAvatar={user.profilePicture} data={stories} />
            </div>
            <div className="hidden md:flex flex-col w-5/12">
              <AccountSwitch currUser={user} />
              <div>2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
