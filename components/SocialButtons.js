import {
	FacebookShareButton,
	FacebookIcon,
	TwitterShareButton,
	TwitterIcon,
} from 'react-share';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { useContext } from 'react';
import Link from 'next/link';
import { MyContext } from './Layout';
import styles from '../styles/components/Header.module.scss';
const XIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 512 512"
		className="w-6 h-6 text-gray-600"
	>
		<path d="..." /> {/* SVG path data for the X icon */}
	</svg>
);

const FbButton = (props) => {
	const { theme, url } = useContext(MyContext);

	return (
		<FacebookShareButton
			className={`inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${theme}`}
			url={url}
		>
			<FacebookIcon className="h-6 w-6" round={true} />
		</FacebookShareButton>
	);
};
const TweetButton = (props) => {
	const { theme, url } = useContext(MyContext);

	return (
		<TwitterShareButton
			className={`inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${theme}`}
			url={url}
		>
			<TwitterIcon className="h-6 w-6" round={true} />
		</TwitterShareButton>
	);
};
const ShareButtonsGroup = () => {
	const { theme } = useContext(MyContext);

	return (
		<div className={`${theme} flex space-x-2`}>
			<h3 className="inline-flex items-center justify-center">Share</h3>
			<TweetButton />
			<FbButton />
		</div>
	);
};
const SocialButton = ({ icon: Icon, label, url }) => {
	if (!Icon) {
		console.error('Icon is not defined for SocialButton');
		return null;
	}
	return (
		<Link
			href={url}
			aria-label={label}
			title={label}
			target="_blank"
			className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
		>
			<Icon className="h-6 w-6 rounded-full" />
		</Link>
	);
};

const SocialButtonsGroup = () => {
	const socialMediaLinks = [
		{
			icon: TwitterIcon,
			url: 'https://x.com/beezoox3',
			label: 'X (Formerly Twitter)',
		},
		{
			icon: FacebookIcon,
			url: 'https://facebook.com/patrick.yambrick',
			label: 'Facebook',
		},

		{ icon: FaGithub, url: 'https://github.com/YouGuavas', label: 'GitHub' },
	];
	return (
		<div className="flex space-x-2">
			<h3 className="inline-flex items-center justify-center">Follow</h3>
			{socialMediaLinks.map((social, index) => (
				<SocialButton key={index} {...social} />
			))}
		</div>
	);
};
export { ShareButtonsGroup, SocialButtonsGroup };
