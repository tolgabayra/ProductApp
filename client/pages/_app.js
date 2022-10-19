import '../styles/globals.css'
import 'antd/dist/antd.css'
import { AuthContextProvider } from '../store/authContext'


function MyApp({ Component, pageProps}) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <AuthContextProvider>
      { getLayout(<Component {...pageProps} />) }
    </AuthContextProvider>

  )
}

export default MyApp
