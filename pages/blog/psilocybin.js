import styles from '@/styles/blog.module.scss';
import { ByLine, Disclaimer } from '@/components/ByLine';
import Collapsible from '@/components/body/Collapsible';
import SelfieImage from '@/components/body/SelfieImage';
import Link from 'next/link';
import Head from 'next/head';
import { useContext } from 'react';
import { MyContext } from '@/components/Layout';
import BlogImage from '@/components/BlogImage';

export default function Blog() {
	const { theme, setTheme } = useContext(MyContext);

	return (
		<>
			<Head>
				<title>An Introduction to Psilocybin | Patrick Yambrick</title>
				<meta
					name="description"
					content="Explore a conversation about a potential variation of future society, accelerated by artificial intelligence, described via conversation between ChatGPT and Patrick Yambrick."
				/>
			</Head>
			<section
				className={`${styles.blogBody} ${theme} pad-top-vh my-background-generic`}
			>
				<div className={`${styles.titleContainer}`}>
					<h1 className="my-title" id="1">
						An Introduction to Psilocybin
					</h1>
					<ByLine
						by="Patrick Yambrick"
						date="December 6, 2024"
						edit="December 6, 2024"
					/>
					<Disclaimer />
				</div>

				<Collapsible orientation="center" title="Introduction">
					<p className={styles.blogParagraph}>
						Psilocybin is a naturally occurring compound found in certain
						species of mushrooms which has been used for centuries in spiritual
						and therapeutic contexts. Recently, it has gained scientific
						recognition for its potential to improve mental health, offering
						hope for those dealing with conditions like depression, anxiety,
						PTSD, and addiction. When combined with intentional practices,
						psilocybin use can lead to profound personal growth, emotional
						healing, and enhanced well-being.
					</p>
					<p className={styles.blogParagraph}>
						This blog explores the mental health benefits of psilocybin use,
						delving into intentional practices to maximize positive outcomes. It
						also discusses potential risks and drawbacks, emphasizing the
						importance of a balanced, informed approach.
					</p>
				</Collapsible>

				<div className={styles.leaders}>
					<Link href="psilocybin/understanding-psilocybin">
						<h2 className={`${styles.blogTitle} my-title`}>
							1. Neurological Benefits
						</h2>
					</Link>
					{/*<Link href="psilocybin/mental-health">
						<h2 className={`${styles.blogTitle} my-title`}>
							2. Mental Health Benefits
						</h2>
					</Link>*/}
				</div>
				<div className={styles.leaders}>
					<Link href=".">
						<h2 className={`${styles.blogTitle} my-title`}>Back</h2>
					</Link>
				</div>
			</section>
		</>
	);
}
