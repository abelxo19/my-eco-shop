import Hero from '@/components/hero/hero';
import Catagory from '@/components/catagory/catagory';
import Wanted from '@/components/wanted/wanted';
import Arrival from '@/components/arrival/arrival';
import Commit from '@/components/commit/commit';
import Bought from '@/components/bought/bought';
import Head from 'next/head';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import New from '@/app/new/page';

export default async function Home() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <>
      <Head>
        <link rel="icon" href='/favicon.ico' />
      </Head>
      <div>
        {user ? (
          <New />
        ) : (
          <>           
            <Hero />
            <Catagory />
            <Wanted />
            <Arrival />
            <Commit />
            <Bought />
          </>
        )}
      </div>
    </>
  );
}
