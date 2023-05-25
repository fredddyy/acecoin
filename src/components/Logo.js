import React from "react";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Logo = () => {
  return (
    <div className="flex justify-center items-center gap-x-1 md:gap-x-3">
      <div className=" bg-light-blue h-10 w-10 rounded-full items-center justify-center flex -rotate-[15deg]">
        <FontAwesomeIcon icon={faCreditCard} color="white" size="lg" />
      </div>
      <h1 className="text-deep-blue text-lg">
        <span className="font-bold">AceCoin</span>Pay
      </h1>
    </div>
  );
};

export default Logo;
