import Link from 'next/link';
import styles from '../styles/blog.module.scss';

export default function BlogInfo(props) {
	const blogPost = props.blogPost;
	return (
		<li>
			<h2 className={`${styles.title}`}>
				<Link href={`/blog/${blogPost.href}`}>
					<strong>{blogPost.title}</strong>
				</Link>
			</h2>
			<p>
				<span>Category: </span>
				{blogPost.category}
			</p>
			<p>
				<span>Description: </span>
				{blogPost.description}
			</p>
		</li>
	);
}
