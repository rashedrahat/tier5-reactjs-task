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
  postedOn: string;
  likes: number;
  liked: boolean;
  comments: any[];
};

type SocialPlatform = {
  forWhich?: "Facebook" | "Instagram";
};

export type PostActionProps = SocialPlatform & {
  liked: boolean;
  commentHandler: (show: boolean) => void;
  proceedToComment: boolean;
};

export type PostCommentsProps = SocialPlatform & {
  userProfilePiture?: string;
  isLoading?: boolean;
  data: any[];
};

export type UserCommentBoxProps = SocialPlatform & {
  actionType?: "Write" | "See";
  userProfilePictureURL: string;
  userName?: string;
  comment: string;
  commentedAt?: string;
  boxClass: string;
  userProfilePitureClass: string;
};

export type LoaderProps = SocialPlatform & {
  placeAt: "page" | "block";
};

export type StatusAvatarProps = SocialPlatform & {
  name: string;
  profilePicture: string;
  readonly?: boolean;
  type?: string;
  contentURL?: string;
};
