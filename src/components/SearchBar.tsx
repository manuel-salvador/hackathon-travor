import React from "react";
import Link from "next/link";

import { SearchIcon } from "./Icons";

type Props = {};

export default function SearchBar({}: Props) {
  return (
    <Link
      href="/elegir-destino"
      className="w-4/5 bg-white absolute top-10 right-0 left-0 mx-auto z-10 flex gap-2 p-3 items-center rounded-lg shadow-md shadow-gray-400"
    >
      <SearchIcon size={20} color="black" />
      <p>¿A dónde quieres ir?</p>
    </Link>
  );
}
