import Link from 'next/link';
import Head from 'next/head';
import Card from '@/components/Card';
import projects from '../data/projects.json';
import work from '../data/work.json';

import styles from '../styles/work.module.scss';
import { useContext } from 'react';
import { MyContext } from '../components/Layout';

export default function Work() {
	const { theme, setTheme } = useContext(MyContext);
	return (
		<div className={`${theme}`}>
			<Head>
				<title>Work | Patrick Yambrick</title>
			</Head>
			<section
				id="Work"
				className={`${styles.work} pad-top-vh my-background-generic text-center my-text-mustard`}
			>
				<div className="my-overlay">
					<h2 className="my-title disappear-md">Work</h2>
					<div className="grid grid-cols-3 gap-2 py-6">
						{work.map((item, index) => {
							const work = item;
							return <Card key={index} project={work} />;
						})}
					</div>
					<h2 className="my-title disappear-md">Personal Projects</h2>

					<div className="grid grid-cols-3 gap-2 py-6">
						{projects.map((item, index) => {
							const project = item;
							return <Card key={index} project={project} />;
						})}
					</div>
				</div>
			</section>
		</div>
	);
}
