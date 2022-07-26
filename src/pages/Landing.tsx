import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import appRoutes from "../utils/routes";

function Landing() {
  return (
    <div className="flex items-center justify-center h-screen gap-x-8">
      <Link
        to={appRoutes.FACEBOOK_HOME}
        className="flex flex-col gap-y-2 items-center"
      >
        <FaFacebook className="fill-facebook-primary w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
        <p className="text-facebook-primary text-sm md:text-base font-semibold">
          Go to Facebook
        </p>
      </Link>
      <Link
        to={appRoutes.INSTAGRAM_HOME}
        className="flex flex-col gap-y-2 items-center"
      >
        <FaInstagram className="fill-instagram-primary w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
        <p className="text-instagram-primary text-sm md:text-base font-semibold">
          Go to Instagram
        </p>
      </Link>
    </div>
  );
}

export default Landing;
