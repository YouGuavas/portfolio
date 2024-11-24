import Head from 'next/head';
import React from 'react';
import { useContext } from 'react';

import SelfieImage from '@/components/body/SelfieImage';
import { MyContext } from '@/components/Layout';
import styles from '@/styles/Home.module.scss';
import selfie from '@/public/images/selfies/selfie.png';

function index() {
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
					<p className={`md:px-4 px-3`}>
						I am a self-directed learner with a personal goal to learn as much
						as possible about modern science, technology, the self, and their
						union leveraging only resources which are available to every-day
						people. In pursuit of this aim, I hope to educate, uplift, and
						enlighten myself and those around me.
					</p>
					<p className={`md:px-4 px-3`}>
						I am beyond lucky to have attended Kettering University during the
						tenure of the late, great professor Reg Bell, whose passion for
						understanding <em>and</em> educating students, paired with his love
						for unconventional presentations (which kept students on their toes
						at all times) somehow made our Chem lectures memorable. As a
						learner, I have carried this quote of his -- repeated so often --
						with me: "Testing stifles students' creativity."
					</p>
					<ul className={`md:px-4 px-3 ${styles.myList}`}>
						<h2 className={`my-title`}>Current areas of interest:</h2>

						<li>Web Development and Design</li>
						<li>AI (especially Ethics and Philosophy)</li>
					</ul>
				</div>
				<SelfieImage
					height={400}
					width={400}
					src={selfie.src}
					alt={`A selfie of me.`}
				/>
			</section>
		</main>
	);
}

export default index;
