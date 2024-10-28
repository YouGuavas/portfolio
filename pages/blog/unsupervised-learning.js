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
						Unsupervised learning is a machine learning concept.
					</p>
					<TableOfContents sections={sections} />
					<h2
						className={`${styles.blogTitle} my-title`}
						id="Struggling With Styles"
					>
						Struggling With Styles
					</h2>
					<p className={styles.blogParagraph}>
						While working in development, everything was smooth and beautiful,
						so I grew excited and rushed to deploy. After doing so, I came
						across my first frustrating bug: upon deploying to firebase, I
						discovered that my styling was all wrong! My unordered lists looked
						like something out of 1993 -- completely unstyled -- and everything
						else was stretched and skewed in a displeasing way. I was
						immediately frustrated, and chose not to give up. Instead, I decided
						to do some (read: "a lot of") digging.
					</p>
					<p className={styles.blogParagraph}>
						In this case, the most useful step in solving my problem turned out
						to be <em>diagnosing</em> my problem. After some digging (and only a
						moderate amount of head-banging), I determined that the source of my
						woes was that my Tailwind styles weren't applying. Everything I'd
						customized was working fine, but Tailwind was doing its best to give
						me a headache.
					</p>
					<p className={styles.blogParagraph}>
						Ultimately, thanks to a fair bit of Googling, I determined that the
						source of my problems lay in my Tailwind config. All I had to do was
						change my Tailwind config exports' purge line to this: And poof!
						Onto the Next task with a strong Tailwind at my back.
					</p>
					<h2
						className={`${styles.blogTitle} my-title`}
						id="Struggling With Structure"
					>
						Struggling With Structure
					</h2>
					<p className={styles.blogParagraph}>
						This was more of a minor concern, but it still tripped me up a bit
						at first. I had grown so used to structuring files in the way I'd
						developed while learning with create-react-app that acclimating to
						nextjs' file structure presented some challenges. I felt that this
						was something of an 'acquired taste' scenario; after using next for
						a while, I sort of got used to things. That means that if you're in
						a similar spot to the one I found myself in with this one -- and
						feeling a little overhwelmed with the change --, there's hope! Give
						yourself permission to mess up a couple of times, and you'll find
						your own way through it.
					</p>
				</div>
			</section>
		</>
	);
}
