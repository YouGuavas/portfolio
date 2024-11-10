import Link from 'next/link';
import styles from '../styles/blog.module.scss';

export default function BlogInfo(props) {
	const blogPost = props.blogPost;
	return (
		<li>
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
