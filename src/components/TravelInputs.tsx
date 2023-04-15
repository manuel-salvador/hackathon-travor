import { useState, Dispatch, SetStateAction } from "react";

import { ArrowsUpDownIcon } from "./Icons";

type Props = {
  setShowOptions: Dispatch<SetStateAction<boolean>>;
};

export default function Travel({ setShowOptions }: Props) {
  const [origin, setOrigin] = useState<undefined | string>(undefined);
  const [destination, setDestination] = useState<undefined | string>(undefined);

  return (
    <div className="flex-1 bg-slate-100 rounded-xl flex px-2">
      <div className="flex-1 flex flex-col">
        <input
          type="text"
          className="bg-transparent py-2 outline-none"
          placeholder="Punto de partida"
          value={origin}
          onInput={() => setOrigin("Bernal 570")}
        />
        <div className="h-[2px] w-full bg-gray-300" />
        <input
          type="text"
          className="bg-transparent py-2 outline-none"
          placeholder="Destino"
          value={destination}
          onInput={() => {
            setDestination("Av. Corrientes 3885");
            setShowOptions(true);
          }}
        />
      </div>
      <div className="px-2 flex place-items-center">
        <ArrowsUpDownIcon size={25} color="black" />
      </div>
    </div>
  );
}
