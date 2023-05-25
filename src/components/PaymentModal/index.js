import React, { useState } from "react";
import FormSide from "./FormSide";
import CardSide from "./CardSide";

const PaymentModal = () => {
  const [inputValue, setInputValue] = useState("");
  const [dateValue, setDateValue] = useState("");

  return (
    <div className="relative lg:grid grid-cols-3 p-6 md:p-6 bg-white lg:bg-gradient-to-r from-[#f8feff] via-[#ffffff] from-1% to-[#fff]  to-90%  h-full">
      <div className=" col-span-2">
        <FormSide setInputValue={setInputValue} setDateValue={setDateValue} />
      </div>
      <div className="col-span-1">
        <CardSide cardNumberValue={inputValue} dateValue={dateValue} />
      </div>
    </div>
  );
};

export default PaymentModal;
