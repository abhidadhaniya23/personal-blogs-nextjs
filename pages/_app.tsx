import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // @ts-ignore
    import("preline");
  }, []);
  return (
    <>
      <NextNProgress color="#00FA9A" height={2} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
