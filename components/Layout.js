import React, { useEffect, useState } from 'react';
import Header from './Header';

import Nav from './Nav';
import styles from '../styles/components/Layout.module.scss';

const Layout = ({ children }) => {
	const [url, setUrl] = useState('https://patdesigns.online');
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const pathName = window.location.pathname;
			setUrl(`https://patdesigns.online${pathName}`);
		}
	}, []);

	return (
		<>
			<div className={styles.container}>
				<Header url={url} />

				<Nav
					links={['Home', 'Work', 'Blog', 'Contact']}
					pages={['work', 'contact', 'blog']}
				/>
			</div>

			{children}
		</>
	);
};
export default Layout;
