import React from "react";
import Story from "./Story";

type SingleStory = {
  accountName: string;
  accountAvatarURL: string;
  type: string;
  contentURL: string;
};

type StoriesProps = {
  currUserAvatar: string;
  data: SingleStory[];
};

function Stories({ currUserAvatar, data }: StoriesProps) {
  return (
    <div className="flex w-full border-b md:border border-gray-300 md:rounded h-auto p-4 gap-x-4">
      <Story
        readonly={false}
        accountName="Your story"
        accountAvatarURL={currUserAvatar}
      />
      {data?.map((story) => {
        return (
          <Story
            readonly
            accountName={story.accountName}
            accountAvatarURL={story.accountAvatarURL}
          />
        );
      })}
    </div>
  );
}

export default Stories;
