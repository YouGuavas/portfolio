import {
	FacebookShareButton,
	FacebookIcon,
	TwitterShareButton,
	TwitterIcon,
} from 'react-share';
import styles from '../styles/components/Header.module.scss';

const FbButton = (props) => {
	let { url, text } = props;
	if (window) {
		let pageName = window.location.pathname;
		url = 'https://patdesigns.online' + pageName;
	}
	return (
		<FacebookShareButton className={styles.shareButton} url={url} quote={text}>
			<FacebookIcon size={props.buttonSize} round={true} />
		</FacebookShareButton>
	);
};
const TweetButton = (props) => {
	let { url, text } = props;
	if (window) {
		let pageName = window.location.pathname;
		url = 'https://patdesigns.online' + pageName;
	}
	return (
		<TwitterShareButton
			className={styles.shareButton}
			url={url}
			hashtags={['WebDevelopment', 'React']}
		>
			<TwitterIcon size={props.buttonSize} round={true} />
		</TwitterShareButton>
	);
};
export { FbButton, TweetButton };
