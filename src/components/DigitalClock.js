import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";

const DigitalClock = () => {
  const [time, setTime] = useState(DateTime.local());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(DateTime.local());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hour = time.hour.toString().padStart(2, "0");
  const minute = time.minute.toString().padStart(2, "0");
  return (
    <div className="text-lg text-center items-center font-bold flex gap-x-1 justify-between">
      <span className="bg-deep-blue text-white h-10 w-[26px] items-center flex justify-center rounded ">
        {hour.charAt(0)}
      </span>
      <span className="bg-deep-blue text-white h-10 w-[26px] items-center flex justify-center rounded ">
        {hour.charAt(1)}
      </span>
      <span className="opacity-0 inset-0 bg-transparent animate-blink rounded">
        :
      </span>
      <span className="bg-deep-blue text-white h-10 w-[26px] items-center flex justify-center rounded ">
        {minute.charAt(0)}
      </span>
      <span className="bg-deep-blue text-white h-10 w-[26px] items-center flex justify-center rounded ">
        {minute.charAt(1)}
      </span>
    </div>
  );
};

export default DigitalClock;
