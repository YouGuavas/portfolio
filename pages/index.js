import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from '../public/images/logo.png';
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
    <section id="Home" className={`p-6 vpheight ${styles.lander}`}>
      <div>
        <h1 className={styles.banner}><span>Patrick</span> Yambrick</h1>
        <p className={`my-text-mustard`}>Developer.</p>
      </div>
    </section>
  )
}



export default index;