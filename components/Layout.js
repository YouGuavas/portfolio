import React, { useEffect, useState, createContext } from 'react';
import Header from './Header';

import Nav from './Nav';
import styles from '../styles/components/Layout.module.scss';

export const MyContext = createContext();

const Layout = ({ children }) => {
	const [theme, setTheme] = useState('default');
	const [url, setUrl] = useState('https://patdesigns.online');
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const pathName = window.location.pathname;
			setUrl(`https://patdesigns.online${pathName}`);
		}
	}, []);

	return (
		<MyContext.Provider value={{ theme, setTheme }}>
			<div className={`${styles.container} ${theme}`}>
				<Header url={url} />

				<Nav
					links={['Home', 'Work', 'Blog', 'Contact']}
					pages={['work', 'contact', 'blog']}
				/>
			</div>

			{children}
		</MyContext.Provider>
	);
};
export default Layout;
