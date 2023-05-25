import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faReceipt,
  faAppleWhole,
} from "@fortawesome/free-solid-svg-icons";

import React from "react";

function CardSide({ cardNumberValue, dateValue }) {
  const MasterCard = process.env.PUBLIC_URL + "/Mastercard-Logo.png";
  const Wifi = process.env.PUBLIC_URL + "/SimCard.png";
  const SimCard = process.env.PUBLIC_URL + "/Wifi.png";

  return (
    <div className="relative px-2 md:mx-4 md:my-6">
      <div className="h-6 w-16 left-[43%] md:left-[48%] xl:left-[43%] lg:left-[40%] rounded -top-[6px] bg-light-blue absolute"></div>
      <div className="z-10 px-4 py-5 bg-[#ffffff9f] backdrop-blur-[12px] h-[250px] w-[65%] rounded-xl left-[20%] absolute shadow-2xl shadow-deep-blue-3 ">
        <div className=" z-20 flex items-center justify-between pb-10 mb-4 ">
          <img className="h-[40px] w-[35px]" src={SimCard} alt="Sim" />
          <img src={Wifi} className="h-[25px] w-[25px]" alt="Wifi" />
        </div>
        <p className="text-xs text-deep-blue my-2">Jonathan Micheal</p>
        <div>
          {cardNumberValue ? (
            <div className="flex items-center gap-x-1 h-[22px]">
              <FontAwesomeIcon
                className="text-[6px]"
                icon={faCircle}
                color="black"
              />
              <FontAwesomeIcon
                className="text-[6px]"
                icon={faCircle}
                color="black"
              />
              <FontAwesomeIcon
                className="text-[6px]"
                icon={faCircle}
                color="black"
              />
              <FontAwesomeIcon
                className="text-[6px]"
                icon={faCircle}
                color="black"
              />
              <p className=" font-semibold ml-2 text-deep-blue">
                {cardNumberValue[3]}
              </p>
            </div>
          ) : (
            <p className="text-sm text-deep-blue font-bold">
              Enter Card Details
            </p>
          )}
        </div>

        <div className="flex mt-12 items-center justify-between">
          <div className="flex gap-x-1">
            <p className=" text-xs font-semibold text-deep-blue">
              {dateValue[0] ? dateValue[0] : "--"} /
            </p>

            <p className="text-xs font-semibold text-deep-blue">
              {dateValue[1] ? dateValue?.[1]?.[0] : "-"}
              {dateValue[1] ? dateValue?.[1]?.[1] : "-"}
            </p>
          </div>
          <div>
            <img className="h-6 w-10" src={MasterCard} alt="Master card logo" />
            <p className="text-[6px]">mastercard</p>
          </div>
        </div>
      </div>
      <div className="z-5 absolute xl:h-[420px] h-[420px] top-20 w-full bg-deep-blue-4 rounded-xl">
        <div className="mt-[200px]">
          <table className="mb-3 mx-[10%] w-[80%] font-semibold text-sm">
            <tbody className="w-full">
              <tr className="">
                <td className=" text-deep-blue-2">Company</td>
                <td className="flex  items-end justify-end text-right text-deep-blue">
                  <div className="bg-deep-blue rounded-full h-[15px] mr-2 w-[15px] flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faAppleWhole}
                      color="white"
                      className="text-[10px]"
                    />
                  </div>
                  Apple
                </td>
              </tr>
              <tr>
                <td className=" text-deep-blue-2">Order Number</td>
                <td className=" text-right text-deep-blue">1245888</td>
              </tr>
              <tr>
                <td className=" text-deep-blue-2">Product</td>
                <td className=" text-right text-deep-blue">MacBook Air</td>
              </tr>
              <tr>
                <td className=" text-deep-blue-2">Vat(20%)</td>
                <td className=" text-right text-deep-blue">$100.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="relative border border-dashed border-deep-blue-2 my-6">
          <div className="h-[40px] w-[40px] rounded-full bg-white absolute -top-[20px] -left-[20px]"></div>
          <div className="h-[40px] w-[40px] rounded-full bg-white absolute -top-[20px] -right-[20px]"></div>
        </div>

        <div className="mx-[10%] flex justify-between items-center">
          <div>
            <p className=" text-xs font-medium text-deep-blue-2 ">
              You have to Pay
            </p>
            <p className=" text-deep-blue font-semibold">
              <span className="text-[25px] text-deep-blue font-bold"> 549</span>
              .99
              <span className=" text-deep-blue-2 font-medium ml-1">USD</span>
            </p>
          </div>
          <FontAwesomeIcon
            icon={faReceipt}
            className=" text-xl text-deep-blue"
          />
        </div>
      </div>
    </div>
  );
}

export default CardSide;
