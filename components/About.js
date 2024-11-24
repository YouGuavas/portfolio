import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import { useContext } from 'react';
import { MyContext } from './Layout';

export function About() {
	const { theme, setTheme } = useContext(MyContext);

	return (
		<section id="About" className={`${styles.about} ${theme}`}>
			<div className={`main-wrapper left`}>
				<h2 className="font-bold md:px-4 px-3 my-title" id="About">
					Welcome
				</h2>
				<p className="md:px-4 px-3">
					I am a self-directed learner with a personal goal to learn as much as
					possible about modern science, technology, the self, and their union
					leveraging only resources which are available to every-day people. In
					pursuit of this aim, I hope to educate, uplift, and enlighten myself
					and those around me.
				</p>

				<p className="md:px-4 px-3">
					I&apos;d like to help you build something, and{' '}
					<Link
						className="font-bold rounded my-fade-in my-underline"
						href="/contact"
					>
						I want you to tell me all about it
					</Link>
					.
				</p>
			</div>
		</section>
	);
}

export function AltAbout() {
	const { theme, setTheme } = useContext(MyContext);

	return (
		<section id="About" className={`${styles.about} ${theme}`}>
			<div className={`alt-rotate alt-wrapper`}>
				<h2 className="font-bold md:px-4 px-3 my-title" id="About">
					About Patrick
				</h2>
				<p className="md:px-4 px-3">
					Hi, my name is Patrick! I'm a self-directed learner with a personal
					goal to learn as much as possible about modern science, technology,
					the self, and their Union.
				</p>
				<p className="md:px-4 px-3">I !</p>
				<p className="md:px-4 px-3">
					I&apos;d like to help you build something, and{' '}
					<Link
						className="font-bold rounded my-fade-in my-underline"
						href="/contact"
					>
						I want you to tell me all about it
					</Link>
					.
				</p>
			</div>
		</section>
	);
}
