import styles from '../styles/components/Blog.module.scss';
import Image from 'next/image';
import { useContext } from 'react';
import { MyContext } from './Layout';

export default function BlogImage(props) {
	const { theme, setTheme } = useContext(MyContext);

	return (
		<figure className={`${styles.blogImageContainer} ${theme}`}>
			<Image
				src={props.src}
				alt={props.alt}
				height={props.height}
				width={props.width}
			/>
			<figcaption>{props.alt}</figcaption>
		</figure>
	);
}
