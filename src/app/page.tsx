import Navbar from '@/components/navbar/navbar'
import Hero from '@/components/hero/hero'
import Catagory from '@/components/catagory/catagory';
import Wanted from '@/components/wanted/wanted';
import Arrival from '@/components/arrival/arrival'
import Commit from '../components/commit/commit';
import Bought from '@/components/bought/bought'
import Subscribe from '@/components/subscribe/subscribe';
import Footer from '@/components/footer/footer'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Catagory/>
      <Wanted/>
      <Arrival/>
      <Commit/>
      <Bought/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}
