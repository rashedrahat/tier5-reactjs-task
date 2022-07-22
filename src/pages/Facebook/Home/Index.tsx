import React from "react";
import FacebookHeader from "../../../layouts/FacebookHeader";
import WhatsOnYourMind from "./WhatsOnYourMind";
import * as data from "../../../data/facebook.json";
import Posts from "./Posts";
import "../../../assets/facebook.css";
import FacebookSidebar from "../../../layouts/FacebookSidebar";

type MainContentProps = {
  name: string;
  profilePicture: string;
  posts: any[];
};

function MainContent({ name, profilePicture, posts }: MainContentProps) {
  return (
    <>
      <WhatsOnYourMind
        name={name}
        profilePictureURL={
          profilePicture ||
          "https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar-300x300.jpg"
        }
      />
      <Posts data={posts} />
    </>
  );
}

function Home() {
  const { user, posts } = data;

  return (
    <div
      className={posts?.length === 0 ? `h-screen` : `h-auto`}
      style={{ backgroundColor: "#DADDE1" }}
    >
      <div className="hidden lg:block left-area">
        <FacebookSidebar profilePicture={user.profilePicture} />
      </div>
      <div className="block lg:hidden">
        <FacebookHeader />
        <div className="container mx-auto py-5 flex flex-col gap-y-5">
          <MainContent
            name={user.name}
            profilePicture={user.profilePicture}
            posts={posts}
          />
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="middle-area p-5 flex flex-col gap-y-5">
          <MainContent
            name={user.name}
            profilePicture={user.profilePicture}
            posts={posts}
          />
        </div>
      </div>
      <div className="hidden lg:block right-area">3</div>
    </div>
  );
}

export default Home;
