import { createContext, useEffect, useState } from "react";
import { PeraWalletConnect } from "@perawallet/connect";

interface IAccountContext {
  address: string | null;
  connectWallet: () => void;
  disconnectWallet: () => void;
}

const defaultAccountContext: IAccountContext = {
  address: null,
  connectWallet: () => {},
  disconnectWallet: () => {},
};

const AccountContext = createContext<IAccountContext>(defaultAccountContext);

const peraWallet = new PeraWalletConnect({ chainId: 416002 });

function AccountProvider({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  // Store account address which is connected dApp with Pera Wallet
  const [accountAddress, setAccountAddress] = useState<string | null>(null);

  useEffect(() => {
    // Reconnect to the session when the component is mounted
    peraWallet
      .reconnectSession()
      .then((accounts) => {
        // Setup the disconnect event listener
        peraWallet.connector?.on("disconnect", handleDisconnectWalletClick);

        if (peraWallet.isConnected && accounts.length) {
          setAccountAddress(accounts[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleDisconnectWalletClick() {
    peraWallet.disconnect();
    setAccountAddress(null);
  }

  function handleConnectWalletClick() {
    peraWallet
      .connect()
      .then((newAccounts) => {
        // Setup the disconnect event listener
        peraWallet.connector?.on("disconnect", handleDisconnectWalletClick);

        setAccountAddress(newAccounts[0]);
      })
      .catch((error) => {
        // You MUST handle the reject because once the user closes the modal, peraWallet.connect() promise will be rejected.
        // For the async/await syntax you MUST use try/catch
        if (error?.data?.type !== "CONNECT_MODAL_CLOSED") {
          // log the necessary errors
        }
      });
  }

  return (
    <AccountContext.Provider
      value={{
        address: accountAddress,
        connectWallet: handleConnectWalletClick,
        disconnectWallet: handleDisconnectWalletClick,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}

export { AccountContext, AccountProvider };
