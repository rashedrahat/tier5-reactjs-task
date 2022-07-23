import React from "react";
import UserCard from "./UserCard";

type User = {
  username: string;
  name: string;
  profilePicture: string;
};

type AccountSwitchProps = {
  currUser: User;
};

function AccountSwitch({ currUser }: AccountSwitchProps) {
  const { username, name, profilePicture } = currUser;
  return (
    <UserCard
      username={username}
      name={name}
      profilePicture={profilePicture}
      actionName="Switch"
    />
  );
}

export default AccountSwitch;
