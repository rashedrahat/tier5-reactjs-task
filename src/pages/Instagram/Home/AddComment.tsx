import React, { useState } from "react";
import Image from "../../../components/ui/Image";

function AddComment() {
  const [comment, setComment] = useState<string>("");

  return (
    <div className="flex px-4 items-center justify-between border-t border-gray-300 h-10 pt-2">
      <div className="flex items-center justify-between gap-x-3">
        <Image
          srcURL="https://minimaltoolkit.com/images/randomdata/male/38.jpg"
          alt="Profile Picture"
          className="w-6 h-6 object-cover rounded-full"
        />
        <input
          className="border-none w-full py-2 placeholder:text-instagram-secondary text-instagram-primary text-base focus:outline-none"
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <button
        disabled={comment === ""}
        type="button"
        className={`text-base font-semibold text-instagram-blue ${
          comment ? `` : `opacity-50`
        }`}
      >
        Post
      </button>
    </div>
  );
}

export default AddComment;
