import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import styles from "@/styles/Home.module.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <main className={styles.main}>
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  );
}
