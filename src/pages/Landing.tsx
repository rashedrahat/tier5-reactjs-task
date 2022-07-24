import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import appRoutes from "../utils/routes";

function Landing() {
  return (
    <div className="flex items-center justify-center h-screen gap-x-7">
      <div className="flex flex-col gap-y-2 items-center">
        <FaFacebook className="fill-facebook-primary w-10 h-10 md:w-12 md:h-12" />
        <Link
          to={appRoutes.FACEBOOK_HOME}
          className="text-facebook-primary text-sm text-normal"
        >
          Go to Facebook
        </Link>
      </div>
      <div className="flex flex-col gap-y-2 items-center">
        <FaInstagram className="w-10 h-10 md:w-12 md:h-12" />
        <Link
          to={appRoutes.INSTAGRAM_HOME}
          className="text-instagram-primary text-sm text-normal"
        >
          Go to Instagram
        </Link>
      </div>
    </div>
  );
}

export default Landing;
