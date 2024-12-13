import Head from 'next/head';
import Link from 'next/link';

import stats from '../data/stats';
import styles from '../styles/blog.module.scss';

import BlogInfo from '../components/BlogInfo';
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
				className={`${styles.blogs} pad-top-vh my-background-generic text-center my-text-mustard`}
			>
				<h1 className={`my-title`}>OpenAI Pricing</h1>

				<ul className={`grid grid-cols-3`}>
					{stats.map((stat, index) => {
						return <BlogInfo blogPost={stat} key={index} />;
					})}
				</ul>
			</section>
		</div>
	);
}
