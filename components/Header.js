import { FbButton, TweetButton } from './SocialButtons';
import { useEffect, useContext } from 'react';
import { MyContext } from './Layout';
import logo from '../public/images/logoDark.png';
import Link from 'next/link';
import Image from 'next/image';
import { handleScroll } from '@/utils/_functions';

import styles from '../styles/components/Header.module.scss';

const buttonSize = 24;

export default function Header() {
	const text =
		'Do you or somebody you know need a website for a small business? Contact Patrick!';

	const { theme, setTheme } = useContext(MyContext);
	const { url, setUrl } = useContext(MyContext);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	});

	return (
		<header id="collapsible-header" className={`${styles.header} ${theme}`}>
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
