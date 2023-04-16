import useAccount from "@/hooks/useAccount";

export default function ConnectButton() {
  const { address, connectWallet, disconnectWallet } = useAccount();

  const isConnectedToPeraWallet = !!address;

  return (
    <button
      onClick={isConnectedToPeraWallet ? disconnectWallet : connectWallet}
      className="bg-dark text-white py-2 px-4 rounded-lg"
    >
      {isConnectedToPeraWallet
        ? "Desconectar Pera Wallet"
        : "Conectar Pera Wallet"}
    </button>
  );
}
