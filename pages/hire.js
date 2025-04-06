import Head from 'next/head';
import { Product } from '@/components/ecommerce/Product';
import tiers from '../data/tiers.json';
import { useEffect, useState } from 'react';
import styles from '../styles/work.module.scss';
import { useContext } from 'react';
import { MyContext } from '../components/Layout';

export default function Work() {
	const { theme, setTheme } = useContext(MyContext);
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch('/api/data')
			.then((res) => res.json())
			.then((data) => setData(data))
			.then(() => console.log('data- ' + JSON.stringify(data)))
			.catch((err) => console.error(err));
	}, []);
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
						<Product
							product={{
								name: 'Single Page',
								price: 8000,
								description:
									'A responsive, modern, SEO-friendly landing page build with react and next.',
							}}
						/>
						<Product
							product={{
								name: 'Entrepreneur',
								price: 15000,
								description:
									'A full site, SEO optimized and branded, fit for an entrepreneurial spirit. Similar to this site.',
							}}
						/>
						<Product
							product={{
								name: 'Fully Featured',
								price: 35000,
								description:
									'A fully-featured, customized site - suitable for any use, up to and including enterprise level.',
							}}
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
