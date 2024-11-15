import styles from '../styles/components/Nav.module.scss';
import Link from 'next/link';
import { MyContext } from './Layout';

import { useEffect, useContext } from 'react';

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

	const { theme, setTheme } = useContext(MyContext);

	return (
		<nav className={`${styles.myNavFull} ${theme}`} id="menu-full">
			<ul className={styles.standardMenu}>
				{links.map((item, index) => {
					return renderLinks(item, index);
				})}
			</ul>
		</nav>
	);
}
