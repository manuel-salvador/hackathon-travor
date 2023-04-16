import useAccount from "@/hooks/useAccount";
import ConnectButton from "@/components/ConnectButton";

import ScreenLayout from "../layouts/ScreenLayout";

export default function ProfileScreen() {
  const { address, disconnectWallet } = useAccount();

  return (
    <ScreenLayout>
      {!!address ? (
        <div className="h-full w-full flex flex-col justify-center items-center px-10">
          <div className="flex flex-col items-center gap-4">
            <div className="bg-teal-900 h-20 w-20 rounded-full" />
            <span className="font-semibold">Nombre Apellido</span>
          </div>
          <div className="flex justify-between w-full border-b-2 border-gray-300 py-3 cursor-pointer">
            <span>Actividad</span>
            <span>{">"}</span>
          </div>
          <div className="flex justify-between w-full border-b-2 border-gray-300 py-3 cursor-pointer">
            <span>Wallet</span>
            <span>{">"}</span>
          </div>
          <div className="flex justify-between w-full border-b-2 border-gray-300 py-3 cursor-pointer">
            <span>Mi cuenta</span>
            <span>{">"}</span>
          </div>
          <div className="flex justify-between w-full border-b-2 border-gray-300 py-3 cursor-pointer">
            <span>Ayuda</span>
            <span>{">"}</span>
          </div>
          <div className="flex justify-between w-full border-b-2 border-gray-300 py-3 cursor-pointer">
            <span>Código de descuento</span>
            <span>{">"}</span>
          </div>
          <div
            className="flex justify-between w-full border-b-2 border-gray-300 py-3 cursor-pointer"
            onClick={() => disconnectWallet()}
          >
            <span>Cerrar sesión</span>
            <span>{">"}</span>
          </div>
        </div>
      ) : (
        <div className="h-full flex flex-col justify-center items-center gap-8">
          <p className="text-2xl">¡Bienvenido/a!</p>
          <ConnectButton />
        </div>
      )}
    </ScreenLayout>
  );
}
