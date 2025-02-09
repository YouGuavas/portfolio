import '../styles/globals.scss';
import React from 'react';
import Layout from '@/components/Layout';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
				<meta charSet="utf-8" />
				<meta name="theme-color" content="#000000" />
				<meta
					name="description"
					content="Located in Genesee County, Michigan, Patrick Yambrick is a self-directed learner delivering web development and tutoring services to small businesses and individuals in the Flint area and beyond."
				/>
			</Head>
			<Component {...pageProps} />
			<Analytics />
		</Layout>
	);
}
