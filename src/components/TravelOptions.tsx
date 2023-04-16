import React from "react";
import Link from "next/link";

import { ClockIcon, UserBorderedIcon } from "./Icons";

export default function TravelOptions() {
  return (
    <div className="flex flex-col gap-4">
      {options.map((option, index) => (
        <div
          key={option.time + index}
          className="w-full bg-slate-100 rounded-xl p-4 flex justify-between"
        >
          <div className="flex gap-4 items-center">
            <div className="w-16 h-16 bg-white rounded-md flex justify-center items-center">
              car
            </div>
            <div>
              <p className="font-bold">Auto {index + 1}</p>
              <div className="flex items-center gap-1">
                <span>
                  <ClockIcon size={10} color="black" />
                </span>
                <span>{option.time} mins</span>
              </div>
              <div className="flex items-center gap-1">
                <span>
                  <UserBorderedIcon size={10} color="black" />
                </span>
                <span>{option.passengers} pasajeros</span>
              </div>
            </div>
          </div>
          <p className="text-xl">${option.price}</p>
        </div>
      ))}
      <Link
        href="/esperando-viaje"
        className="bg-dark text-white text-center py-4 rounded-lg"
      >
        Confirmar viaje
      </Link>
    </div>
  );
}

const options = [
  {
    time: 5,
    passengers: 2,
    price: 860,
  },
  {
    time: 5,
    passengers: 2,
    price: 860,
  },
  {
    time: 5,
    passengers: 2,
    price: 860,
  },
];
