import Layout from '@/components/Layout'
import React from 'react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const getLayout =
    Component.getLayout ||
    ((page: React.ReactElement) => <Layout>{page}</Layout>)

  return getLayout(<Component {...pageProps} />)
}
