import Head from 'next/head';
import Link from 'next/link';

import stats from '../data/stats';
import styles from '../styles/work.module.scss';

import { GridCard } from '@/components/Card';
import { useContext } from 'react';
import { MyContext } from '../components/Layout';

export default function Blogs() {
	const { theme, setTheme } = useContext(MyContext);
	return (
		<div className={`${theme}`}>
			<Head>
				<title>Graphs | Patrick Yambrick</title>
			</Head>
			<section
				id="Stories"
				className={`${styles.work} pad-top-vh my-background-generic text-center my-text-mustard`}
			>
				<h1 className={`my-title`}>OpenAI Pricing</h1>

				<ul className={`grid grid-cols-5`}>
					{stats.map((stat, index) => {
						return <GridCard title={stat.title} key={index} />;
					})}
				</ul>
			</section>
		</div>
	);
}
