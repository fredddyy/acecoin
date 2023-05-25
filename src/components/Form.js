import React from "react";
import CreditCardInput from "./CreditCardInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import ExpiryDateInput from "./ExpiryDateInput";

const Form = ({ setInputValue, setDateValue }) => {
  return (
    <div className="mb-12">
      <div>
        <div className="w-full">
          <CreditCardInput setInputValue={setInputValue} />
        </div>
        <div className="mb-4 md:grid grid-cols-2 my-auto items-center">
          <div className=" grid-cols-1">
            <h5 className="text-deep-blue font-bold leading-8">CVV Number</h5>
            <div className="flex justify-between items-center">
              <p className="text-deep-blue-2 text-xs font-medium">
                Enter 3 or 4 digit number on the card
              </p>
            </div>
          </div>
          <div className=" h-12 w-full relative">
            <input
              maxLength={3}
              className="relative h-full border-2 w-full rounded-md focus:outline-none focus:text-light-blue focus:bg-[#025efe13] text-center text-deep-blue font-semibold focus:border-2 focus:border-light-blue"
            />
            <FontAwesomeIcon />
            <div className="absolute right-3 top-3">
              <FontAwesomeIcon
                icon={faBars}
                className=" text-deep-blue-3 text-xl"
              />
            </div>
          </div>
        </div>
        <ExpiryDateInput setDateValue={setDateValue} />
        <div className="mb-4 md:grid grid-cols-2 my-auto items-center">
          <div className=" grid-cols-1">
            <h5 className="text-deep-blue font-bold leading-8">Password</h5>
            <div className="flex justify-between items-center">
              <p className="text-deep-blue-2 text-xs font-medium">
                Enter your Dynamic password
              </p>
            </div>
          </div>
          <div className=" h-12 w-full relative">
            <input
              maxLength={8}
              type="password"
              className="relative px-4 text-lg h-full border-2 w-full rounded-md focus:outline-none focus:text-light-blue focus:bg-[#025efe13] text-deep-blue font-semibold focus:border-2 focus:border-light-blue"
            />
            <div className="absolute right-3 top-3">
              <FontAwesomeIcon
                icon={faBars}
                className=" text-deep-blue-3 text-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <button className="h-[60px] bg-light-blue w-full rounded-lg text-white font-semibold mt-4">
        Pay Now
      </button>
    </div>
  );
};

export default Form;
