import Head from 'next/head';
import React from 'react';
import Lander from '../components/Lander';


function index() {

  return (
    <main >
      <Head>
        <title>Home | Patrick Yambrick</title>
      </Head>

      <Lander />

    </main>
  );
}


export default index;