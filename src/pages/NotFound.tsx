import React from "react";
import { TbError404 } from "react-icons/tb";
import { Link } from "react-router-dom";
import appRoutes from "../utils/routes";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <TbError404 size={64} />
      <Link
        to={appRoutes.LANDING}
        className="bg-gradient-to-r from-blue-300 to-blue-600 hover:from-pink-500 hover:to-yellow-500 text-base font-normal rounded-lg p-3"
      >
        Take me Home
      </Link>
    </div>
  );
}

export default NotFound;
