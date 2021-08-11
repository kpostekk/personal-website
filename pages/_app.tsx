import '../styles/globals.sass'
import type {AppProps} from 'next/app'
import Head from "next/head";

export default function PersonalApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
