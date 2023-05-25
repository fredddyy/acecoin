import React from "react";
import DigitalClock from "../DigitalClock";
import Logo from "../Logo";
import Form from "../Form";

const FormSide = ({ setInputValue, setDateValue }) => {
  return (
    <div className="md:px-4 md:py-6">
      <div className="flex justify-between items-center">
        <Logo /> <DigitalClock />
      </div>
      <div>
        <Form setInputValue={setInputValue} setDateValue={setDateValue} />
      </div>
    </div>
  );
};

export default FormSide;
