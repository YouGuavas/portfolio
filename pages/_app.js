import '../styles/globals.scss';
import React from 'react';
import Layout from '@/components/Layout';
import { Analytics } from '@vercel/analytics/react';
export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
			<Analytics />
		</Layout>
	);
}
