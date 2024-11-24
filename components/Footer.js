import Link from 'next/link';

import styles from '../styles/components/Footer.module.scss';
import { useContext } from 'react';
import { MyContext } from './Layout';
export default function Footer() {
	const { theme, setTheme } = useContext(MyContext);

	return (
		<footer className={`${styles.footer} ${theme} my-background-generic `}>
			<p className={styles.footerNotice}>
				This site is hosted on{' '}
				<Link href="https://vercel.com/legal/privacy-policy">Vercel</Link>,
				which may collect IP addresses or other basic data. Read my{' '}
				<Link href="/legal/privacy">Privacy Policy</Link> here.
			</p>
		</footer>
	);
}
