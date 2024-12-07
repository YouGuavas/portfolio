import styles from '@/styles/blog.module.scss';
import { ByLine, Disclaimer } from '@/components/ByLine';
import Collapsible from '@/components/body/Collapsible';
import SelfieImage from '@/components/body/SelfieImage';
import Link from 'next/link';
import Head from 'next/head';
import { useContext } from 'react';
import { MyContext } from '@/components/Layout';
import BlogImage from '@/components/BlogImage';
import dendrite from '@/public/images/psilocybin/dendrite.png';

export default function Blog() {
	const { theme, setTheme } = useContext(MyContext);

	return (
		<>
			<Head>
				<title>Mental Health Benefits of Psilocybin | Patrick Yambrick</title>
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
						Understanding the Effects of Psilocybin on the Brain
					</h1>
					<ByLine
						by="Patrick Yambrick"
						date="December 6, 2024"
						edit="December 6, 2024"
					/>
					<Disclaimer />
				</div>

				<Collapsible orientation="center" title="An Introductory Anecdote">
					<p className={styles.blogParagraph}>
						Stories abound of users who take magic mushrooms once and see
						profound changes in cognition, creativity, and mood. Take this
						example of a single mother, plagued by depression and overhwelm,
						who, upon discovering the therapeutic benefits of psilocybin, began
						the following regimen: take mushrooms once a month. Since beginning
						this regimen, she has reported improvements in her interactions with
						others -- ranging from extended patience, to greater empathy and
						compassion, to improved listening skills -- as well as in her
						creativity in creating lesson plans for her children.
					</p>
				</Collapsible>
				<Collapsible orientation="left" title="Mental Health Benefits">
					<p className={styles.blogParagraph}>Under construction</p>
					{/*<p className={styles.blogParagraph}>
						Those of us who wish to look beyond the immediate improvements in
						dendritic efficency and their suggested effect as a cognitive
						performance enhancer -- in order to view psilocybin as a likely aid
						to various therapies, say -- need only to pause, take a breath, and
						swap shoes with another. Consider how this increase in flexible
						thinking may assist someone with a deeply entrenched
					</p>*/}
				</Collapsible>

				<div className={styles.leaders}>
					<Link href=".">
						<h2 className={`${styles.blogTitle} my-title`}>Back</h2>
					</Link>
				</div>
			</section>
		</>
	);
}
