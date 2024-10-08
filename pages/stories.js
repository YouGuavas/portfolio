import Head from 'next/head';
import Link from 'next/link';

import stories from '../data/stories.json';
import styles from '../styles/stories.module.scss';

export default function Work() {
	return (
		<div>
			<Head>
				<title>Stories | Patrick Yambrick</title>
			</Head>
			<section
				id="Stories"
				className={`${styles.stories} pad-top-vh my-background-generic text-center my-text-mustard`}
			>
				<h1>Stories</h1>
				<ul>
					{stories.map((story, index) => {
						return (
							<li key={index}>
								<Link href={`/stories/${index + 1}`}>{story.title}</Link>
							</li>
						);
					})}
				</ul>
			</section>
		</div>
	);
}
