import styles from '../styles/components/TableOfContents.module.scss';
import { useContext } from 'react';
import { MyContext } from './Layout';

export default function TableOfContents(props) {
	const { theme, setTheme } = useContext(MyContext);

	return (
		<ul className={`${styles.tableOfContents} ${theme}`}>
			{props.sections.map((section, index) => {
				return <li key={index}>{section[0]}</li>;
			})}
		</ul>
	);
}
