import Head from 'next/head';
import Link from 'next/link';

import glossaryWords from '../data/glossary';
import styles from '../styles/blog.module.scss';

import GlossaryWord from '../components/body/GlossaryWord';
import { useContext } from 'react';
import { MyContext } from '../components/Layout';

export default function Blogs() {
	const { theme, setTheme } = useContext(MyContext);
	return (
		<div className={`${theme}`}>
			<Head>
				<title>Glossary | Patrick Yambrick</title>
			</Head>
			<section
				id="Stories"
				className={`${styles.blogs} pad-top-vh my-background-generic text-center my-text-mustard`}
			>
				<h1 className={`my-title`}>A Glossary of Terms I Enjoy</h1>
				<ul>
					{glossaryWords.map((glossaryWord, index) => {
						return <GlossaryWord blogPost={glossaryWord} key={index} />;
					})}
				</ul>
			</section>
		</div>
	);
}
