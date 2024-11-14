import Link from 'next/link';
import Head from 'next/head';
import SkillsUsed from '@/components/SkillsUsed';
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

function Card(props) {
	const renderSkills = () => {
		if (props.project.skills) {
			const skills = props.project.skills;
			return <SkillsUsed skills={skills} />;
		}
	};
	const { theme, setTheme } = useContext(MyContext);
	return (
		<div className={`${styles.card} ${theme}`}>
			<div
				style={{ backgroundImage: `url(${props.project.src1})` }}
				className={styles.backgroundImageContainer}
			></div>

			<div
				className={`${styles.contentContainer} my-text-mustard grid grid-cols-2 place-items-center text-center`}
			>
				<h4 className="col-span-2">{props.project.title}</h4>
				{renderSkills()}
				<div className={`col-span-2 ${styles.projectDescription}`}>
					<p>{props.project.description}</p>
				</div>
				<p className={`col-span-2`}>
					View {props.project.live ? 'it' : 'the code'} here:
				</p>
				{props.project.live ? (
					<Link
						name={`Live link to ${props.project.title}`}
						href={props.project.live}
						target="_blank"
						rel="noreferrer"
						className="col-span-2 my-btn"
					>
						View it live
					</Link>
				) : null}
				{props.project.github ? (
					<Link
						name={`Github link to ${props.project.title}`}
						href={props.project.github}
						target="_blank"
						rel="noreferrer"
						className="col-span-2 my-btn"
					>
						View it on github
					</Link>
				) : null}
			</div>
		</div>
	);
}
