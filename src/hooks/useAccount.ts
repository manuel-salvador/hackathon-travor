import { useContext } from "react";

import { AccountContext } from "@/context/AccountContext";

export default function useAccount() {
  const { address, connectWallet, disconnectWallet } =
    useContext(AccountContext);

  return { address, connectWallet, disconnectWallet };
}
