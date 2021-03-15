import Layout from '../components/Layout';
import Banner from '../components/home-banner';
import Experience from '../components/home-experience';

export default function Home() {
  return (<Layout>
   <section className="main-home-section">
      <Banner />
      <Experience />
   </section>
  </Layout>
    
  )
}
