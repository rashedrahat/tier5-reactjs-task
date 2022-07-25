import React, { useEffect, useState } from "react";
import InstagramHeader from "../../../layouts/InstagramHeader";
import Stories from "./Stories";
import * as data from "../../../data/instagram.json";
import AccountSwitch from "./AccountSwitch";
import Suggestions from "./Suggestions";
import Posts from "./Posts";
import Loader from "../../../components/ui/Loader";

function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { user, stories, suggestions, posts } = data;

  useEffect(() => {
    window.setTimeout(() => setIsLoading(!isLoading), 1000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader placeAt="page" forWhich="Instagram" />
      ) : (
        <div
          className={
            posts?.length === 0 ? `h-screen main-content-wrapper` : `h-auto`
          }
          style={{ backgroundColor: "#FAFAFA" }}
        >
          <InstagramHeader profilePicture={user.profilePicture} />
          <div className="md:py-8 mt-14 md:mt-16">
            <div className="flex justify-center">
              <div className="flex w-full h-auto md:w-10/12 lg:w-7/12 md:gap-x-5 lg:gap-x-10">
                <div className="w-full md:w-7/12">
                  <Stories
                    currUserAvatar={user.profilePicture}
                    data={stories}
                  />
                  <Posts data={posts} />
                </div>
                <div className="hidden md:flex flex-col w-5/12 gap-y-5">
                  <AccountSwitch currUser={user} />
                  {suggestions?.length > 0 && (
                    <Suggestions data={suggestions} />
                  )}
                  <hr />
                  <p className="text-xs text-instagram-secondary font-light">
                    © 2022 INSTAGRAM FROM META
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
