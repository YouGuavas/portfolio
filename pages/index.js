import Head from 'next/head';
import React from 'react';
import Lander from '../components/Lander';


function index() {

  return (
    <div >
      <Head>
        <title>Home | Patrick Yambrick</title>
      </Head>

      <Lander />

    </div>
  );
}


export default index;