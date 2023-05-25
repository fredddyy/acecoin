import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faCertificate } from "@fortawesome/free-solid-svg-icons";

const CreditCardInput = ({ setInputValue }) => {
  const MasterCard = process.env.PUBLIC_URL + "/Mastercard-Logo.png";

  const inputRefs = useRef([]);
  const [inputValues, setInputValues] = useState([
    "1234",
    "5678",
    "9012",
    "3456",
  ]); // Initial input values
  const [editable, setEditable] = useState(false);

  const handleInputChange = (index, event) => {
    const { value } = event.target;
    if (
      value.length < inputValues[index].length &&
      index < inputRefs.current.length - 1
    ) {
      // A number is deleted in the input field
      setInputValues((prevValues) => {
        const updatedValues = [...prevValues];
        updatedValues.fill("", index + 1); // Clear all values after the current input
        return updatedValues;
      });
    }
    setInputValues((prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues[index] = value;
      return updatedValues;
    });
    if (
      value.length === event.target.maxLength &&
      index < inputRefs.current.length - 1
    ) {
      inputRefs.current[index + 1].focus();
    }
    if (
      index === inputRefs.current.length - 1 &&
      value.length === event.target.maxLength
    ) {
      inputRefs.current.forEach((ref) => {
        ref.readOnly = editable;
        setEditable(false);
      });
    }
    if (value.length === 0 && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleInputFocus = (index) => {
    if (inputValues[index] === "") {
      setInputValues((prevValues) => {
        const updatedValues = [...prevValues];
        updatedValues[index] = ""; // Clear the input value
        return updatedValues;
      });
    }
  };

  //set input value of card number in CardSide component

  /* eslint-disable */
  useEffect(() => {
    setInputValue(inputValues);
    return;
  }, [handleInputChange]);
  return (
    <div>
      <div className="my-3 mb-4">
        <h5 className="text-deep-blue font-bold leading-8">Card Number</h5>
        <div className="flex justify-between items-center">
          <p className="text-deep-blue-2 text-xs font-medium">
            Enter the 16-digit card number on the card
          </p>
          <div
            className="flex items-center gap-x-1 cursor-pointer"
            onClick={() => {
              setEditable(!editable);
            }}
          >
            <FontAwesomeIcon
              icon={faPencil}
              color={editable ? "#a2a6b4" : "#025EFE"}
              size="8"
            />
            <p
              className={`font-bold text-sm ${
                editable ? "text-deep-blue-2" : "text-light-blue"
              }`}
            >
              Edit
            </p>
          </div>
        </div>
      </div>
      <div
        className={`flex justify-between items-center gap-x-5 ${
          editable ? "border-2 border-light-blue" : "border bg-[#025efe13]"
        } border rounded-md h-12 px-4 my-4`}
      >
        <div className="flex justify-between items-center md:w-[65%] md:gap-x-2">
          <img className="h-4 w-8" src={MasterCard} alt="Logo" />
          {[0, 1, 2, 3].map((index) => (
            <div className="flex items-center justify-between">
              <input
                className={
                  " bg-transparent md:w-[66%] w-[95%] focus:outline-none text-deep-blue read-only:text-deep-blue-3 font-semibold"
                }
                key={index}
                ref={(ref) => (inputRefs.current[index] = ref)}
                type="number"
                maxLength={4}
                value={inputValues[index]}
                onChange={(event) => {
                  handleInputChange(index, event);
                  setInputValue(inputValues);
                }}
                readOnly={!editable}
                onFocus={() => handleInputFocus(index)}
              />
              {index !== inputRefs.current.length - 1 && (
                <div className="h-[2px] w-[4px] bg-deep-blue-2 mx-1 md:mx-2"></div>
              )}
            </div>
          ))}
        </div>

        <div className={`${!editable ? " visible" : " invisible"}`}>
          <FontAwesomeIcon icon={faCertificate} color="#02A1EF" />
        </div>
      </div>
    </div>
  );
};

export default CreditCardInput;
