export type PeopleProps = {
  name: string;
  profilePicture: string;
  numOfMutualFrnd?: number;
  type?: "Friend" | "Not Friend";
  reqType?: "In" | "Out";
};

export type ActiveUserProps = {
  name: string;
  profilePicture: string;
};
