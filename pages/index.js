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
      </div>
      <div className={`my-rotate ${styles.titleWrapper}`}>
        <h1 className={styles.banner}><span>Patrick</span> Yambrick</h1>
        <div>
          <p className={`my-text-mustard`}>Dragons</p>
          <p>Ents</p>
          <p>V</p>
          <p>E</p>
          <p>L</p>
          <p>O</p>
          <p>P</p>
          <p>E</p>
          <p>R</p>
        </div>
      </div>
    </section>
  )
}



export default index;