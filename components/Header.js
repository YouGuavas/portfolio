import { FbButton, TweetButton } from './SocialButtons';
import { useEffect } from 'react';
import logo from '../public/images/logoDark.png';
import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/components/Header.module.scss';
const buttonSize = 24;

export default function Header() {
	const url = 'https://patdesigns.online';
	const text =
		'Do you or somebody you know need a website for a small business? Contact Patrick!';
	const scrollTop = () => {
		//returns current scroll position
		if (typeof window !== 'undefined') {
			return window.scrollY;
		}
	};
	const handleScroll = () => {
		const container = document.getElementById('collapsible-header');
		const currentScroll = scrollTop();
		if (currentScroll > 50) {
			container.classList.remove(styles.open);
			container.classList.add(styles.collapse);
			if (container.classList.contains(styles.open)) {
				setTimeout(() => {
					container.style.display = 'none';
				}, 200);
			}
		} else {
			container.style.display = 'flex';
			container.classList.remove(styles.collapse);
			container.classList.add(styles.open);
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	});

	return (
		<header id="collapsible-header" className={styles.header}>
			<TweetButton buttonSize={buttonSize} url={url} text={text} />
			<Link name="Logo Home" href="#Home" scroll={false}>
				<Image
					alt="My personal logo"
					className="my-logo"
					height={96}
					width={96}
					src={logo.src}
				/>
			</Link>
			<FbButton buttonSize={buttonSize} url={url} quote={text} />
		</header>
	);
}
