import { useContext } from 'react';
import { MyContext } from './Layout';
import styles from '../styles/components/Header.module.scss';
const ThemeButton = (props) => {
	const { url, text } = props;
	const { theme, setTheme } = useContext(MyContext);

	return (
		<div
			className={`${styles.shareButton} ${theme}`}
			size={props.buttonSize}
			round={true}
		>
			{props.theme}
		</div>
	);
};
