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
				<title>Patrick Yambrick | Web Development & Tutoring in Michigan</title>
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
						You have caught me during a liminal phase. My new home is{' '}
						<Link
							className="my-text-forest lowercase spaced darken"
							href="https://patripples.com/"
						>
							patripples
						</Link>
						.
					</p>{' '}
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
