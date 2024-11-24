import React, { useEffect, useState, createContext } from 'react';
import { useRouter } from 'next/router'; // Import useRouter from Next.js

import Header from './Header';
import Footer from './Footer';

import Nav from './Nav';
import styles from '../styles/components/Layout.module.scss';

export const MyContext = createContext();

const Layout = ({ children }) => {
	const [theme, setTheme] = useState('new-normal');
	const [url, setUrl] = useState('https://patdesigns.online');
	const router = useRouter(); // Get the router object

	useEffect(() => {
		const handleRouteChange = (url) => {
			setUrl(`https://patdesigns.online${url}`);
		};

		// Initially set the URL
		handleRouteChange(router.pathname);

		// Subscribe to route change events
		router.events.on('routeChangeComplete', handleRouteChange);

		// Clean up the event listener when the component unmounts
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router]); // Run when router changes

	return (
		<MyContext.Provider value={{ theme, setTheme, url, setUrl }}>
			<div className={`${styles.container} ${theme}`}>
				<Header />

				<Nav
					links={['Home', 'Work', 'Blog', 'Contact']}
					pages={['work', 'contact', 'blog']}
				/>
			</div>

			{children}
			<Footer />
		</MyContext.Provider>
	);
};
export default Layout;
