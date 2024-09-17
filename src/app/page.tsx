"use client";

import Hero from '@/components/hero/hero';
import Catagory from '@/components/catagory/catagory';
import Wanted from '@/components/wanted/wanted';
import Arrival from '@/components/arrival/arrival';
import Commit from '@/components/commit/commit';
import Bought from '@/components/bought/bought';
import Head from 'next/head';
import Notification from '@/components/notification';
import { useEffect, useState } from 'react';



export default function Home() {
  const [showNotification, setShowNotification] = useState<boolean>(false);

  // Define how long the notification should be hidden before showing again (in milliseconds)
  const NOTIFICATION_DELAY = 24 * 60 * 60 * 1000; // 24 hours

  useEffect(() => {
    const notificationLastShown = localStorage.getItem('notificationLastShown');
    
    // If the notification hasn't been shown or the delay has passed, show the notification
    if (!notificationLastShown || Date.now() - parseInt(notificationLastShown, 10) > NOTIFICATION_DELAY) {
      setShowNotification(true);
      localStorage.setItem('notificationLastShown', Date.now().toString());
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
      </div>
    </>
  );
}
