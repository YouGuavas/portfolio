import React, { useEffect, useState, createContext } from 'react';
import { useRouter } from 'next/router'; // Import useRouter from Next.js
import Header from './Header';
import Footer from './Footer';

import Nav from './Nav';
import styles from '../styles/components/Layout.module.scss';

export const MyContext = createContext();

const Layout = ({ children }) => {
	const [theme, setTheme] = useState('spaceship');
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
	useEffect(() => {
		// Set the theme class on <html> dynamically
		const root = document.documentElement;
		root.classList.remove('default', 'spaceship', 'new-normal'); // Remove old classes
		root.classList.add(`${theme}`); // Add new class based on context
	}, [theme]);

	return (
		<MyContext.Provider value={{ theme, setTheme, url, setUrl }}>
			<div className={`${styles.container} ${theme}`}>
				<Header />

				<Nav
					links={['Home', 'Work', 'Hire', 'Contact']}
					pages={['work', 'hire', 'contact']}
				/>
			</div>

			{children}
			<Footer />
		</MyContext.Provider>
	);
};
export default Layout;
