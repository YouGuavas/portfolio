import Head from 'next/head'
import React from 'react'
import Lander from '../components/Lander'
import About from '../components/About'
import Contact from '../components/Contact'

function index() {
    return (
        <main>
            <Head>
                <title>Home | Patrick Yambrick</title>
            </Head>

            <Lander />
            <About />
            <Contact />
        </main>
    )
}

export default index
