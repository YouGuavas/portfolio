import styles from '../styles/components/TableOfContents.module.scss';
import { useContext } from 'react';
import { MyContext } from './Layout';
import { BlogContext } from './BlogPost';

export default function TableOfContents(props) {
	const { theme, setTheme } = useContext(MyContext);
	const { variant, setVariant } = useContext(BlogContext);
	const newVariant = (newVariant) => {
		setVariant(newVariant);
	};
	return (
		<ul className={`${styles.tableOfContents} ${theme}`}>
			{props.title ? <h3>{props.title}</h3> : null}
			{props.sections.map((section, index) => {
				return (
					<li onClick={() => newVariant(section)} key={index}>
						{section[0]}
					</li>
				);
			})}
		</ul>
	);
}
