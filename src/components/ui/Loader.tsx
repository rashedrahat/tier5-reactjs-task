import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { LoaderProps } from "../../types/global";

function Loader({ placeAt, forWhich }: LoaderProps) {
  return (
    <div
      className={`flex ${
        placeAt === "page" ? `flex-col h-screen` : `space-x-2`
      } items-center justify-center`}
    >
      {placeAt === "page" ? (
        <>
          {forWhich === "Facebook" && (
            <FaFacebook className="fill-facebook-primary w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20" />
          )}
          {forWhich === "Instagram" && (
            <FaInstagram className="fill-instagram-primary w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20" />
          )}
        </>
      ) : (
        <>
          <div
            className={`w-3 h-3 ${
              forWhich === "Facebook"
                ? `bg-facebook-primary`
                : `bg-instagram-primary`
            } animate-fade-in-down`}
          />
          <div
            className={`w-3 h-3 ${
              forWhich === "Facebook"
                ? `bg-facebook-primary`
                : `bg-instagram-primary`
            } animate-fade-out-down`}
          />
          <div
            className={`w-3 h-3 ${
              forWhich === "Facebook"
                ? `bg-facebook-primary`
                : `bg-instagram-primary`
            } animate-fade-in-up`}
          />
        </>
      )}
    </div>
  );
}

export default Loader;
