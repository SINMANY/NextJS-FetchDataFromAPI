import Layout from '@/component/Layout';
import '@/styles/globals.css'

import 'bootstrap/dist/css/bootstrap.min.css';
export default function App({ Component, pageProps }) {
  if(Component.getLayout){
    return Component.Layout(<Component {...pageProps} />);
  }
  return(
    <div style={{backgroundColor: "#eeeee"}}>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
     <Layout>
        <Component {...pageProps} />
     </Layout>
    </div>
  )
}
