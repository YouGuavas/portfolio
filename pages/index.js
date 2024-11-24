import Head from 'next/head';
import React from 'react';
import { About } from '../components/About';

function index() {
	return (
		<main>
			<Head>
				<title>Home | Patrick Yambrick</title>
			</Head>

			<About />
		</main>
	);
}

export default index;
