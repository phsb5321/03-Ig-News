import "../styles/global.scss"

import { AppProps } from "next/app"
import { Header } from "../components/Header"
import React from "react"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Header />
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
