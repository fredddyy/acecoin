import React, { useState, useRef, useEffect } from "react";

const ExpiryDateInput = ({ setDateValue }) => {
  const inputRefs = useRef([]);
  const [inputValues, setInputValues] = useState(["", ""]); // Initial input values
  const handleInputChange = (index, event) => {
    const { value } = event.target;
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

    if (value.length === 0 && index > 0) {
      inputRefs.current[index].focus();
    }
    if (
      index === inputRefs.current.length - 1 &&
      value.length === event.target.maxLength
    ) {
      inputRefs.current.forEach((ref) => {
        ref.maxLength = 2;
      });
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
    setDateValue(inputValues);
    return;
  }, [handleInputChange]);

  return (
    <div className="mb-4 md:grid grid-cols-2 my-auto items-center">
      <div className="my-3 mb-4 col-span-1">
        <h5 className="text-deep-blue font-bold leading-8">Expiry Date</h5>
        <div className="flex justify-between items-center">
          <p className="text-deep-blue-2 text-xs font-medium">
            Enter the expiry date of the card
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center  gap-x-4">
        {[0, 1].map((index) => (
          <div className="flex items-center justify-between">
            <input
              className="relative h-12 border-2 w-full rounded-md focus:outline-none focus:bg-[#025efe13] text-center text-deep-blue font-semibold focus:border-2 focus:text-light-blue focus:border-light-blue"
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)}
              type="number"
              maxLength={2}
              onChange={(event) => handleInputChange(index, event)}
              onFocus={() => handleInputFocus(index)}
            />
            {index !== 1 && (
              <h1 className="text-deep-blue font-bold text-sm md:mx-2">/</h1>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpiryDateInput;
