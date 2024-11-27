import styles from '@/styles/blog.module.scss';
import { useContext } from 'react';
import { MyContext } from '../Layout';
export default function GlossaryWord(props) {
	const blogPost = props.blogPost;
	const { theme, setTheme } = useContext(MyContext);

	return (
		<li className={`${theme}`}>
			<h2 className={`${styles.title}`}>{blogPost.title}</h2>

			<p>
				<span>Description: </span>
				{blogPost.description}
			</p>
		</li>
	);
}
