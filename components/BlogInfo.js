import Link from 'next/link';
import styles from '../styles/blog.module.scss';
import { useContext } from 'react';
import { MyContext } from './Layout';
export default function BlogInfo(props) {
	const blogPost = props.blogPost;
	const { theme, setTheme } = useContext(MyContext);

	return (
		<li className={`${theme}`}>
			<Link href={`/blog/${blogPost.href}`}>
				<h2 className={`${styles.title}`}>{blogPost.title}</h2>
			</Link>

			<p>
				<span>Description: </span>
				{blogPost.description}
			</p>
		</li>
	);
}
