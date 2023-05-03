import { Container } from '@mui/material'
import 'Mega/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return(
  <>
    <Head>
      <title>Crud Next Js Firebase</title>
      <meta name='description' content='Crud con Next JS y Firebase'></meta>
    </Head>
  <Container maxWidth="sm">
    <h1 align="center">Fase de desarrollo PPC Games</h1>
    <Component {...pageProps} />
  </Container>
  </>
  )
}
