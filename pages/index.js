import Head from 'next/head';
import React from 'react';
import { useContext } from 'react';
import Link from 'next/link';

import SelfieImage from '@/components/body/SelfieImage';
import { MyContext } from '@/components/Layout';
import styles from '@/styles/Home.module.scss';
import selfie from '@/public/images/selfies/cartoonselfie.png';

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
						ability—and responsibility—to shape the world for the better. I
						believe that the first step toward this is listening - Please,{' '}
						<Link href="/contact" className="underline">
							Contact Me
						</Link>{' '}
						and let me listen to your vision.
					</p>{' '}
					<ul className={`md:px-4 px-3 ${styles.myList}`}>
						<h2 className={`my-title`}>Current areas of interest:</h2>

						<li>Web Development and Design</li>
						<li>AI-augmented Learning</li>
						<li>Mental Health and Well-being</li>
					</ul>
				</div>

				<SelfieImage
					src={selfie.src}
					alt="Cartoon selfie made with Inkscape"
					height={200}
					width={200}
				/>
			</section>
		</main>
	);
}

export default Home;
