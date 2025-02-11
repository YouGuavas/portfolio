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
						{Array.isArray(data)
							? data.map((tier, index) => {
									console.log('tier- ' + tier);
									return <Product key={index} product={tier} />;
							  })
							: null}
					</div>
				</div>
			</section>
		</div>
	);
}
