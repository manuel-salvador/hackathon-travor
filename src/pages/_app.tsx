import type { AppProps } from "next/app";

import { AccountProvider } from "@/context/AccountContext";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AccountProvider>
      <Component {...pageProps} />
    </AccountProvider>
  );
}
