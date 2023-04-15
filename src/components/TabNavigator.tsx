import React from "react";

import { CarIcon, ProfileIcon } from "@/components/Icons";

type Props = {};

export default function TabNavigator({}: Props) {
  return (
    <div className="absolute bottom-0 right-0 left-0 bg-white flex justify-evenly py-4 shadow-2xl shadow-black">
      <div className="flex flex-col items-center">
        <CarIcon size={20} color="white" />
        <p>Viajar</p>
      </div>
      <div className="flex flex-col items-center">
        <ProfileIcon size={20} color="white" />
        <p>Perfil</p>
      </div>
    </div>
  );
}
