/* eslint-disable react/no-unknown-property */
import { useState } from "react"
import { HydrationBoundary, QueryClientProvider } from "@tanstack/react-query"
import type { AppProps } from "next/app"
import localFont from "next/font/local"
import Head from "next/head"

import { createQueryClient } from "../src/shared/api"

import { Layout } from "./_layout"

import "../styles/globals.css"

import type { NextPageWithLayout } from "@/shared/types"

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const SourceSansPro = localFont({
  src: [
    {
      path: "../src/shared/assets/fonts/MSCHFSansMono.otf",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-sans",
})

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = useState(() => createQueryClient())
  const getLayout = Component.getLayout ?? (page => page)
  return (
    <>
      <style global jsx>{`
        :root {
          --font-sans: ${SourceSansPro.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>bad ass</title>
        <meta content="bad ass" name="description" />
        <link href="/favicon.ico" rel="icon" type="image/x-icon" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={pageProps}>
          <Layout className={`${SourceSansPro.variable} font-sans`}>
            {getLayout(<Component {...pageProps} />)}
          </Layout>
        </HydrationBoundary>
      </QueryClientProvider>
    </>
  )
}
