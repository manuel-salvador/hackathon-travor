import Link from "next/link";
import { useState } from "react";

import { ArrowLeftIcon, CircleIcon, LocationtIcon } from "@/components/Icons";
import TravelInputs from "@/components/TravelInputs";
import TravelOptions from "@/components/TravelOptions";

import ScreenLayout from "../layouts/ScreenLayout";

export default function ElegirDestino() {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  return (
    <ScreenLayout>
      <div className="p-6 flex items-center gap-4">
        <Link href="/">
          <ArrowLeftIcon size={27} color="black" />
        </Link>
        <p className="text-xl font-semibold">Tu viaje</p>
      </div>
      <div className="flex px-6 gap-4">
        {/* icons */}
        <div className="flex flex-col items-center gap-2">
          <LocationtIcon size={20} color="black" />
          <div className="w-1 h-8 rounded-full bg-black" />
          <CircleIcon size={18} color="black" />
        </div>
        {/* Inputs */}
        <TravelInputs setShowOptions={setShowOptions} />
      </div>
      <div className="px-6 mt-8">{showOptions && <TravelOptions />}</div>
    </ScreenLayout>
  );
}
