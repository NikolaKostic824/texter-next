import {useState,useEffect} from 'react';
import Layout from '../components/Layout'
import Preloader from '../components/Preloader'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(false)
  }, [])
  return (
    <>
      {!loading ? (<Layout>
        <Component {...pageProps} />
      </Layout> ): <Preloader/>}
    </>
  )
}

export default MyApp
