import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { CarIcon, ProfileIcon } from "@/components/Icons";

type Props = {};

export default function TabNavigator({}: Props) {
  const router = useRouter();
  const path = router.pathname;
  console.log(path);

  return (
    <div className="absolute bottom-0 right-0 left-0 bg-white flex justify-evenly py-4 shadow-2xl shadow-black">
      <Link href="/" className={`flex flex-col items-center`}>
        <CarIcon size={20} color={path !== "/profile" ? "black" : "gray"} />
        <p
          className={`${path !== "/profile" ? "text-black" : "text-gray-300"}`}
        >
          Viajar
        </p>
      </Link>
      <Link href="/profile" className="flex flex-col items-center">
        <ProfileIcon size={20} color={path == "/profile" ? "black" : "gray"} />
        <p className={`${path == "/profile" ? "text-black" : "text-gray-400"}`}>
          Perfil
        </p>
      </Link>
    </div>
  );
}
