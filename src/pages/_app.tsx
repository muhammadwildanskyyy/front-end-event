import PageHead from "@/componets/commons/PageHead";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <PageHead title="Home" />
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
