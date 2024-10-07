import styles from '../styles/components/Nav.module.scss';
import Link from 'next/link';

import { useEffect } from 'react';
const navHighlighter = () => {
	if (window) {
		let pageName = window.location.pathname;
		document.querySelectorAll('nav a').forEach((link) => {
			link.classList.remove(styles.active);
		});
		if (pageName === '/') {
			return document.getElementById('home').classList.add(styles.active);
		}
		if (pageName.indexOf('stories') === -1) {
			document
				.getElementById(`${pageName.slice(1)}`)

				.classList.add(styles.active);
		}
	}
};
export default function Nav(props) {
	const links = props.links;

	const renderLinks = (item, index) => {
		return (
			<li key={index}>
				<Link
					scroll={false}
					id={item.toLowerCase()}
					href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
					className={`${styles.standardMenuLink}`}
					name={`Nav ${item}`}
				>
					{item}
				</Link>
			</li>
		);
	};

	useEffect(() => {
		navHighlighter();
		window.addEventListener('scroll', navHighlighter);
	}, [links]);

	return (
		<nav className={`${styles.myNavFull}`} id="menu-full">
			<ul className={styles.standardMenu}>
				{links.map((item, index) => {
					return renderLinks(item, index);
				})}
			</ul>
		</nav>
	);
}
