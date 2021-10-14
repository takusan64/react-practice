import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import {
  CssBaseline,
  Container
} from '@mui/material'
import { ThemeProvider } from '@mui/styles'
import theme from '../styles/theme'
import TopBar from '../components/TopBar'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    jssStyles?.parentElement?.removeChild(jssStyles)
  }, [])

  const pages = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" }
  ]

  return (
    <>
      <Head>
        <title>React Practice</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TopBar pages_info={pages} />
        <Container maxWidth="lg">
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  )
}