import Head from 'next/head';
import React from 'react';

import styles from '../styles/Home.module.scss';


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

function Lander() {
  return (
    <section id="Home" className={`${styles.lander}`}>
      <div className={styles.landerOverlay}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.banner}><span>Patrick</span> Yambrick</h1>
          <p className={`my-text-mustard`}>Developer</p>
        </div>
      </div>
    </section>
  )
}



export default index;