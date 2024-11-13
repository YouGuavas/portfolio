import styles from '../../styles/blog.module.scss';
import ByLine from '@/components/ByLine';
import Link from 'next/link';
import Head from 'next/head';
import TableOfContents from '@/components/TableOfContents';
import { useState } from 'react';
export default function blog() {
	return (
		<>
			<Head>
				<title>Why Anyone Can Learn to Code | Patrick Yambrick</title>
			</Head>
			<section className={styles.blogBody}>
				<TableOfContents sections={[['Beginner', '1']]} />
				<div className={`${styles.titleContainer}`}>
					<h1 className="my-title" id="1">
						Why Anyone Can Learn to Code
					</h1>
					<ByLine by="Patrick Yambrick" date="November 9, 2024" />
				</div>
				<p className={styles.blogParagraph}>
					Hi there! I see you sitting there wondering to yourself: &quot;How can
					I get started coding?&quot; Don&apos;t worry-I'm not going to bore you
					with a traditional <em>beginner&apos;s coding tutorial</em>! Instead,
					my aim with this blog post is to attempt to describe coding as one
					might approach it from various non-coding perspectives, and I will
					attempt to do so as accessibly as possible. Each section will serve as
					a surface-level overview only.
				</p>
				<p className={styles.blogParagraph}>
					I'm a huge proponent of the concept that we are capable of coding
					anything we can vocalize, provided the following:
				</p>
				<ul className={styles.myList}>
					<li>we are capable of wielding some programming language</li>
					<li>
						we are able to examine our thoughts and break them down into parts
					</li>
				</ul>
				<h2 className={`${styles.blogTitle} my-title`}>Coding as a Lego set</h2>

				<p className={styles.blogParagraph}>
					<em>Many</em> aspects of coding function just like building blocks!
					Sure, maybe they're a <em>little</em> more complex than Legos. Data
					structures, operands, and operators all <em>link</em>
					together in a system, which then operates toward a goal that you've
					set for it. In this example, we'll be examining HTML-the coding
					language responsible for presenting web pages via your browser. HTML
					fits perfectly in this example because it doesn't really /do/ much of
					anything! It just sits there! As with our skeletons, though, it's far
					from useless. HTML provides much-needed structure to our web pages and
					other front-end applications. HTML elements really are very similar to
					mental building blocks. You're functionally <em>stacking</em> them on
					top of one another to build the basic layout of your site. If you can
					type on a keyboard, and you can build with Legos, you can likely teach
					yourself how to build an HTML site, if provided with the right
					pathway!
				</p>
				<h2 className={`my-title`}>Coding as an English paper</h2>
				<p className={styles.blogParagraph}>
					Great! Now you've got your Lego tower built. Admire it. You've earned
					it. Except that you just remembered that you've got an English paper
					due first thing in the morning! The last time you tried to turn in a
					Lego tower to your professor, they laughed so hard that students from
					the hallway popped their heads in to see what was going on. Never
					again. So, what happens when we want to add a little complexity to
					coding? Well, as with nearly every learning endeavor: we break it down
					into smaller blocks, don't we?
				</p>
				<h2 className={`my-title`}>Coding as a Math problem</h2>
				<p className={styles.blogParagraph}></p>
			</section>
		</>
	);
}
