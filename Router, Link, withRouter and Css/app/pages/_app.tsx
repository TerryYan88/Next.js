import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <p>我会一直存在</p>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
