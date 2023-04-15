export default function ConnectButton() {
  return <div>ConnectButton</div>;
}

// import { PeraWalletConnect } from "@perawallet/connect";
// import { useEffect, useState } from "react";

// type AlgorandChainIDs = 416001 | 416002 | 416003 | 4160;

// interface PeraWalletConnectOptions {
//   shouldShowSignTxnToast?: boolean;
//   chainId?: AlgorandChainIDs;
// }

// const peraWallet = new PeraWalletConnect({ chainId: 416002 });

// export default function ConnectButton() {
//   // Store account address which is connected dApp with Pera Wallet
//   const [accountAddress, setAccountAddress] = useState<string | null>(null);
//   // Check app is connected with Pera Wallet
//   const isConnectedToPeraWallet = !!accountAddress;

//   function handleDisconnectWalletClick() {
//     useEffect(() => {
//       // Reconnect to the session when the component is mounted
//       peraWallet
//         .reconnectSession()
//         .then((accounts) => {
//           // Setup the disconnect event listener
//           peraWallet.connector?.on("disconnect", handleDisconnectWalletClick);

//           if (peraWallet.isConnected && accounts.length) {
//             setAccountAddress(accounts[0]);
//           }
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }, []);

//     peraWallet.disconnect();
//     setAccountAddress(null);
//   }

//   function handleConnectWalletClick() {
//     peraWallet
//       .connect()
//       .then((newAccounts) => {
//         // Setup the disconnect event listener
//         peraWallet.connector?.on("disconnect", handleDisconnectWalletClick);

//         setAccountAddress(newAccounts[0]);
//       })
//       .reject((error) => {
//         // You MUST handle the reject because once the user closes the modal, peraWallet.connect() promise will be rejected.
//         // For the async/await syntax you MUST use try/catch
//         if (error?.data?.type !== "CONNECT_MODAL_CLOSED") {
//           // log the necessary errors
//         }
//       });
//   }

//   return (
//     <button
//       onClick={
//         isConnectedToPeraWallet
//           ? handleDisconnectWalletClick
//           : handleConnectWalletClick
//       }
//     >
//       {isConnectedToPeraWallet ? "Disconnect" : "Connect to Pera Wallet"}
//     </button>
//   );
// }
