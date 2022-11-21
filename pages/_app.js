import Layout from '../common/Layout'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

function MyApp({ Component, pageProps }) {
  return(
    <Layout footerstatus={pageProps.footerstatus}> 
      <Component {...pageProps} />
    </Layout>
  )
}
// footerstatus is my layout name and its should be same for my lay out page
// const {children, footerstatus} = props; // in my layout page
export default MyApp
