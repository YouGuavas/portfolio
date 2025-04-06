import '../styles/globals.scss';
import React from 'react';
import Layout from '@/components/Layout';
import Head from 'next/head';
export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
				<meta charSet="utf-8" />
				<meta name="theme-color" content="#000000" />
				<meta
					name="description"
					content="Patrick Yambrick, a Flint-based web developer and tutor, offers expert web design, React development, and personalized tutoring services for small businesses and individuals in Michigan and beyond."
				/>
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}
