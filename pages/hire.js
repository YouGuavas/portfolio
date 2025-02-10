import Head from 'next/head';
import { Product } from '@/components/ecommerce/Product';
import tiers from '../data/tiers.json';

import styles from '../styles/work.module.scss';
import { useContext } from 'react';
import { MyContext } from '../components/Layout';

export default function Work() {
	const { theme, setTheme } = useContext(MyContext);
	return (
		<div className={`${theme}`}>
			<Head>
				<title>Patrick Yambrick | Work</title>
			</Head>
			<section
				id="Work"
				className={`${styles.work} pad-top-vh my-background-generic text-center my-text-mustard`}
			>
				<div className="my-overlay">
					<h2 className="my-title disappear-md">Project Tiers</h2>

					<div className="grid grid-cols-3 gap-2 py-6">
						{tiers.map((item, index) => {
							const tier = item;
							return <Product key={index} product={tier} />;
						})}
					</div>
				</div>
			</section>
		</div>
	);
}
