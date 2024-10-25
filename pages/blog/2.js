import BlogPost from '../../experimental/components/BlogPost';
import ByLine from '../../experimental/components/ByLine';
import styles from '../../styles/Blog.module.scss';
import Head from 'next/head';

export default function () {
	return (
		<BlogPost title="Converting from CRA to Nextjs">
			<Head>
				<title>Converting from CRA to Nextjs | Patrick Yambrick</title>
			</Head>
			<section className={styles.blogPostContainer}>
				<h1 className="my-title">Converting From Create-React-App to Nextjs</h1>
				<ByLine by="Patrick Yambrick" date="Wednesday, July 13, 2022" />

				<p className={styles.blogParagraph}>This is my post</p>
			</section>
		</BlogPost>
	);
}
