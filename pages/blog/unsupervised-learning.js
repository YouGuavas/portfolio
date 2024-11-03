import TableOfContents from '@/components/TableOfContents';
import ByLine from '@/components/ByLine';
import BlogImage from '@/components/BlogImage';
import styles from '../../styles/blog.module.scss';
import Link from 'next/link';
import Head from 'next/head';

export default function () {
	const sections = ['Struggling With Styles', 'Struggling With Structure'];
	return (
		<>
			<Head>
				<title>Simplifying Unsupervised Learning | Patrick Yambrick</title>
			</Head>
			<section className={`${styles.blogPostContainer} pad-top-vh`}>
				<div className={`${styles.titleContainer}`}>
					<h1 className="my-title" id="Struggling to Convert">
						Simplifying Unsupervised Learning
					</h1>
					<ByLine by="Patrick Yambrick" date="Wednesday, July 13, 2022" />
				</div>
				<div className={styles.blogBody}>
					<h2 className={`${styles.blogTitle} my-title`}>
						What is unsupervised learning?
					</h2>
					<p className={styles.blogParagraph}>
						Unsupervised learning is a machine learning concept wherein an
						algorithm or model sorts unlabeled data, without human interaction,
						into clusters or groupings by association. This tends to be
						particularly useful in
					</p>
					<TableOfContents sections={sections} />
				</div>
			</section>
		</>
	);
}
