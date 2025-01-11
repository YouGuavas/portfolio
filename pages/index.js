import Head from 'next/head';
import React from 'react';
import { useContext } from 'react';

import SelfieImage from '@/components/body/SelfieImage';
import { MyContext } from '@/components/Layout';
import styles from '@/styles/Home.module.scss';
import selfie from '@/public/images/selfies/selfie.png';

function Home() {
	const { theme, setTheme } = useContext(MyContext);

	return (
		<main className={theme}>
			<Head>
				<title>Home | Patrick Yambrick</title>
			</Head>

			<section
				id="About"
				className={`${styles.about} my-background-generic pad-top-vh`}
			>
				<div className={`main-wrapper`}>
					<h1 className="font-bold md:px-4 px-3 my-title" id="About">
						Welcome
					</h1>
					<p className={styles.blogParagraph}>
						I am a self-directed learner on a journey to explore modern science,
						technology, and the self. Guided by the principle: &quot;Knowledge
						is power, teaching is honor,&quot; I believe we each have the
						ability—and responsibility—to shape the world for the better.
					</p>{' '}
					<p className={styles.blogParagraph}>
						We&apos;re all winging it--life&apos;s a whole lot of trial and
						error. Nobody&apos;s grading our papers. To me, the leap from there
						is clear: Let&apos;s work together to create a sustainable, peaceful
						future through quantum historical recursion.
					</p>
					<ul className={`md:px-4 px-3 ${styles.myList}`}>
						<h2 className={`my-title`}>Current areas of interest:</h2>

						<li>Web Development and Design</li>
						<li>AI-augmented Learning</li>
						<li>Mental Health and Well-being</li>
					</ul>
				</div>
			</section>
		</main>
	);
}

export default Home;
