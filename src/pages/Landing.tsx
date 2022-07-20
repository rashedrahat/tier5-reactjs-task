import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import appRoutes from "../utils/routes";

function Landing() {
  return (
    <div className="flex items-center justify-center h-screen gap-x-5">
      <Link to={appRoutes.FACEBOOK}>
        <FaFacebook size={48} className="cursor-pointer fill-facebook" />
      </Link>
      <Link to={appRoutes.INSTAGRAM}>
        <FaInstagram size={48} className="cursor-pointer" />
      </Link>
    </div>
  );
}

export default Landing;
