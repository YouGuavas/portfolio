import styles from '../styles/Blog.module.scss';
import Image from 'next/image';
import { useContext } from 'react';
import { MyContext } from './Layout';

export default function BlogImage(props) {
	const { theme, setTheme } = useContext(MyContext);

	return (
		<div className={`${styles.blogImageContainer} ${theme}`}>
			<Image src={props.src} />
		</div>
	);
}
