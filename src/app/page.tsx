"use client";
import Hero from '@/components/hero/hero';
import Catagory from '@/components/catagory/catagory';
import Wanted from '@/components/wanted/wanted';
import Arrival from '@/components/arrival/arrival';
import Commit from '../components/commit/commit';
import Bought from '@/components/bought/bought';
import Subscribe from '@/components/subscribe/subscribe';
import Head from 'next/head';
import Notification from '@/components/notification';
import Topbar from '@/components/top-navbar'
import { useEffect, useState } from 'react';

export default function Home() {
  const [showNotification, setShowNotification] = useState<boolean>(false);

  useEffect(() => {
    const hasNotificationBeenShown = localStorage.getItem('notificationShown');

    if (!hasNotificationBeenShown) {
      setShowNotification(true);
      localStorage.setItem('notificationShown', 'true');
    }
  }, []);

  const handleClose = () => {
    setShowNotification(false);
  };

  return (
    <>
      <Head>
        <link rel="icon" href='/favicon.ico' />
      </Head>
      <div>
        {showNotification && (
          <Notification
            message="on your initial purchase of our chosen products"
            onClose={handleClose}
          />
        )}
        <Hero />
        <Catagory />
        <Wanted />
        <Arrival />
        <Commit />
        <Bought />
        <Subscribe />
      </div>
    </>
  );
}
