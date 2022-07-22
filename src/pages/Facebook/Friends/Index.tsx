import React from "react";
import FacebookHeader from "../../../layouts/FacebookHeader";
import * as data from "../../../data/facebook.json";
import Requests from "./Requests";
import Online from "./Online";

function Friends() {
  const { friends } = data;
  return (
    <>
      <FacebookHeader />
      <div className="container mx-auto bg-transparent py-5 flex flex-col gap-y-5">
        <Requests data={friends.request} />
        <Online data={friends.online} />
      </div>
    </>
  );
}

export default Friends;
