import Head from 'next/head';
import Link from 'next/link';

import blogPosts from '../data/blog';
import styles from '../styles/blog.module.scss';

import BlogInfo from '../components/BlogInfo';
import { useContext } from 'react';
import { MyContext } from '../components/Layout';

export default function Blogs() {
	const { theme, setTheme } = useContext(MyContext);
	return (
		<div className={`${theme}`}>
			<Head>
				<title>Patrick Yambrick | Blog</title>
			</Head>
			<section
				id="Stories"
				className={`${styles.blogs} pad-top-vh my-background-generic text-center my-text-mustard`}
			>
				<h1 className={`my-title`}>Blog</h1>
				<ul>
					{blogPosts.map((blogPost, index) => {
						return <BlogInfo blogPost={blogPost} key={index} />;
					})}
				</ul>
			</section>
		</div>
	);
}
