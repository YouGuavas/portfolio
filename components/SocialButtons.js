import {
	FacebookShareButton,
	FacebookIcon,
	TwitterShareButton,
	TwitterIcon,
} from 'react-share';
import { useContext } from 'react';
import { MyContext } from './Layout';
import styles from '../styles/components/Header.module.scss';
const FbButton = (props) => {
	const { url, text } = props;
	const { theme, setTheme } = useContext(MyContext);

	return (
		<FacebookShareButton
			className={`${styles.shareButton} ${theme}`}
			url={url}
			quote={text}
		>
			<FacebookIcon size={props.buttonSize} round={true} />
		</FacebookShareButton>
	);
};
const TweetButton = (props) => {
	const { url, text } = props;
	const { theme, setTheme } = useContext(MyContext);

	return (
		<TwitterShareButton className={`${styles.shareButton} ${theme}`} url={url}>
			<TwitterIcon size={props.buttonSize} round={true} />
		</TwitterShareButton>
	);
};
export { FbButton, TweetButton };
