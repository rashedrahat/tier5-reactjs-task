export type InputProps = {
  className: string;
  type: "text";
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

export type ButtonProps = {
  className: string;
  disabled: boolean;
  name: string;
  onClick: () => void;
};

export type CardProps = {
  id: string | number;
  className: string;
  content: React.ReactNode;
};

export type User = {
  name: string;
  username: string;
  profilePicture: string;
  hasStory?: boolean;
};

export type PostProps = {
  id: string;
  user: User;
  description: string;
  image: string;
  postedOn: number;
  likes: number;
  liked: boolean;
  comments: any[];
};

export type PostActionProps = {
  forWhich?: "Facebook" | "Instagram";
  liked: boolean;
  commentHandler: (show: boolean) => void;
  proceedToComment: boolean;
};
