import Navbar from '@/components/navbar/navbar'
import Hero from '@/components/hero/hero'
import Catagory from '@/components/catagory/catagory';
import Wanted from '@/components/wanted/wanted';
import Arrival from '@/components/arrival/arrival'
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Catagory/>
      <Wanted/>
      <Arrival/>
    </div>
  );
}
