import {
	FacebookShareButton,
	FacebookIcon,
	TwitterShareButton,
	TwitterIcon,
} from 'react-share';
import styles from '../styles/components/Header.module.scss';
const FbButton = (props) => {
	const { url, text } = props;

	return (
		<FacebookShareButton className={styles.shareButton} url={url} quote={text}>
			<FacebookIcon size={props.buttonSize} round={true} />
		</FacebookShareButton>
	);
};
const TweetButton = (props) => {
	const { url, text } = props;

	return (
		<TwitterShareButton className={styles.shareButton} url={url}>
			<TwitterIcon size={props.buttonSize} round={true} />
		</TwitterShareButton>
	);
};
export { FbButton, TweetButton };
