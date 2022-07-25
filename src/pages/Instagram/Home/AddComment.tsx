import React, { useState } from "react";
import Input from "../../../components/form/Input";
import Button from "../../../components/ui/Button";
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
        <Input
          className="border-none w-full py-2 placeholder:text-instagram-secondary text-instagram-primary text-base focus:outline-none"
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={setComment}
        />
      </div>
      <Button
        className={`text-base font-semibold text-instagram-blue ${
          comment ? `` : `opacity-50 cursor-not-allowed`
        }`}
        disabled={comment === ""}
        name="Post"
        // eslint-disable-next-line no-console
        onClick={() => console.log("Clicked")}
      />
    </div>
  );
}

export default AddComment;
