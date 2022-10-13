import '../styles/globals.css'
import 'antd/dist/antd.css'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
      <Component {...pageProps} />
  )}

export default MyApp
