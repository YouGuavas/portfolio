import Head from 'next/head';
import Link from 'next/link';

import blogPosts from '../data/blog';
import styles from '../styles/blog.module.scss';

import BlogInfo from '../components/BlogInfo';

export default function Work() {
	return (
		<div>
			<Head>
				<title>Blog | Patrick Yambrick</title>
			</Head>
			<section
				id="Stories"
				className={`${styles.blogs} pad-top-vh my-background-generic text-center my-text-mustard`}
			>
				<h1>Blog</h1>
				<ul>
					{blogPosts.map((blogPost, index) => {
						return <BlogInfo blogPost={blogPost} key={index} />;
					})}
				</ul>
			</section>
		</div>
	);
}
