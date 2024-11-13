import styles from '../styles/blog.module.scss';
import { useContext } from 'react';
import { MyContext } from './Layout';

export default function ByLine(props) {
	const { theme, setTheme } = useContext(MyContext);

	return (
		<div className={`${styles.byLineContainer} ${theme}`}>
			<p className={styles.byLine}>By: {props.by}</p>
			<p className={styles.byLine}>Published on: {props.date}</p>
		</div>
	);
}
