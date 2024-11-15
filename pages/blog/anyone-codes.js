import styles from '../../styles/blog.module.scss';
import ByLine from '@/components/ByLine';
import Head from 'next/head';
import TableOfContents from '@/components/TableOfContents';
import BlogImage from '@/components/BlogImage';
import Carousel from '@/components/Carousel';
import { useContext, useEffect } from 'react';
import { MyContext } from '@/components/Layout';
import Link from 'next/link';
import BlogPost, { BlogContext } from '@/components/BlogPost';
import drawing1 from '../../public/images/anyone-codes/drawing1.png';
import drawing2 from '../../public/images/anyone-codes/drawing2.png';
import drawing3 from '../../public/images/anyone-codes/drawing3.png';
import drawing4 from '../../public/images/anyone-codes/drawing4.png';
import drawing5 from '../../public/images/anyone-codes/drawing5.png';

export default function Blog() {
	return (
		<BlogPost>
			<Head>
				<title>
					Why Elon Musk Can't Teach You CSS (Simplified) | Patrick Yambrick
				</title>
			</Head>
			<BlogContent />
		</BlogPost>
	);
}
function BlogContent() {
	const { theme, setTheme } = useContext(MyContext);
	const { variant, setVariant } = useContext(BlogContext);

	useEffect(() => {
		variant[1].indexOf(4) !== -1 ? setTheme('spaceship') : null;
	}, [variant]);

	return (
		<section className={`${styles.blogBody} ${theme}`}>
			<TableOfContents
				title="Voice"
				sections={[
					['Cowboy', [1]],
					['Patrick', [2]],
					['Teacher', [3]],
					['Elon Musk', [4]],
				]}
			/>
			<div className={`${styles.titleContainer}`}>
				<h1 className="my-title" id="1">
					Why Elon Musk Can't Teach You CSS (Simplified)
				</h1>

				<ByLine by="Patrick Yambrick" date="November 9, 2024" />
			</div>
			{variant[1].indexOf(4) !== -1 ? (
				<>
					<p className={styles.blogParagraph}>
						I have things to do. Why are you asking me to teach you CSS?
					</p>
					<p className={styles.blogParagraph}>
						Have you ever given Mars side-eye through a telescope? If you
						haven't--really, you should; it-it's one of the-- really, one of the
						peak experiences humanity has to offer itself. Have you seen my
						rocket?
					</p>
					<p className={styles.blogParagraph}>
						Fine. <em>This</em> is how you write CSS.
					</p>
					<BlogImage
						src={drawing5.src}
						alt={'Elon Musk writing CSS.'}
						height={400}
						width={400}
					/>
					<p className={styles.blogParagraph}>
						Okay, maybe Elon Musk didn't write any of this--and maybe he&apos;s
						too busy to teach you CSS--but I did, and I&apos;m <em>certain</em>{' '}
						that I can teach anybody how to write CSS.
					</p>
				</>
			) : (
				<>
					<p className={styles.blogParagraph}>
						Hi there! I see you sitting there wondering to yourself: &quot;How
						can I get started coding?&quot; Or maybe: &quot;What does this have
						to do with Elon Musk?&quot; Don&apos;t worry-I'm not going to bore
						you with a traditional <em>beginner&apos;s coding tutorial</em>!
						Instead, my aim with this blog post is to attempt to describe coding
						as one might approach it from various non-coding perspectives, and I
						will attempt to do so as accessibly as possible. Each section will
						serve as a surface-level overview only.
					</p>
					<p className={styles.blogParagraph}>
						Owing to my own limitations, I will be focusing on HTML and CSS
						here. I personally authored the "Patrick Yambrick" and "Elon Musk"
						sections. <Link href="">OpenAI&apos;s chatGPT</Link> provided me
						with the other two "translations" based on information I provided,
						in conjunction with specific prompting. If you want to follow along
						with a curriculum and start exploring, I strongly advise checking
						out <Link href="https://www.freecodecamp.org/">FreeCodeCamp</Link>.
					</p>
					<p className={styles.blogParagraph}>
						I'm a huge proponent of the concept that we are capable of coding
						anything we can vocalize, provided the following:
					</p>
					<ul className={`${styles.ending} ${styles.myList}`}>
						<li>we are capable of wielding some programming language</li>
						<li>
							we are able to examine our thoughts and break them down into parts
						</li>
					</ul>
				</>
			)}

			{variant[1].indexOf(2) !== -1 ? (
				<>
					<h2 className={`${styles.blogTitle} my-title`}>HTML as a Lego set</h2>
					<p className={styles.blogParagraph}>
						<em>Many</em> aspects of coding function just like building blocks!
						Sure, maybe they're a <em>little</em> more complex than Legos. Data
						structures, operands, and operators all <em>link</em> together in a
						system, which then operates toward a goal that you've set for it. In
						this example, we'll be examining HTML-the coding language
						responsible for presenting web pages via your browser. HTML fits
						perfectly in this example because it doesn't really /do/ much of
						anything! It just sits there! As with our skeletons, though, it's
						far from useless. HTML provides much-needed structure to our web
						pages and other front-end applications. HTML elements really are
						very similar to mental building blocks. You're functionally{' '}
						<em>stacking</em> them on top of one another to build the basic
						layout of your site. If you can type on a keyboard, and you can
						build with Legos, you can teach yourself how to build an HTML
						site-when provided with the pathway that best suits you.
					</p>{' '}
					<p className={styles.blogParagraph}>
						A common theme you'll discover on your coding journey is this:
						Things were perfect before. HTML was perfect. Why did we add more
						code? Further still, within HTML: divs are perfect. Why do we need
						more elements? This is how an HTML site built only with divs looks
						(and it is Perfect, since it is HTML):
					</p>
					<BlogImage
						src={drawing1.src}
						alt={'Perfect HTML, drawn.'}
						height={400}
						width={400}
					/>
					<p className={`${styles.blogParagraph} ${styles.ending}`}>
						I know what you&apos;re thinking-those are Mega Bloks! That's right.
						We just opened up the starter kit. As we dig deeper and deepr into
						HTML, we'll learn more and more about its elements -- and how we can
						use those to improve the structure of our code. In the beginning,
						it's fine to dig around and explore -- that's how I learned! One
						piece of gentle advice, though: diving deeper and really
						understanding the importance of structure from early on is a{' '}
						<em>really</em> good idea.
					</p>
					<h3 className={`${styles.blogTitle} my-title`}>
						<strong>Takeaway:</strong>
					</h3>
					<p className={`${styles.blogParagraph} ${styles.ending}`}>
						HTML is very forgiving! Play around with it, build some stuff, see
						what you can do. You can write pretty much anything, and HTML will
						make it work.
					</p>
					<h2 className={`my-title`}>HTML & CSS as an English paper</h2>
					<p className={styles.blogParagraph}>
						Great! Now you've got your Lego tower built. Admire it. You've
						earned it. Except that you just remembered that you've got an
						English paper due first thing in the morning! The last time you
						tried to turn in a Lego tower to your professor, they laughed so
						hard that students from the hallway popped their heads in to see
						what was going on. Never again. So, what happens when we want to add
						a little complexity to coding? Well, as with nearly every learning
						endeavor: we break it down into smaller blocks, don't we?
					</p>{' '}
					<p className={styles.blogParagraph}>
						What's a thing that every English teacher appreciates? That's
						right--a well-formatted document! As you've been playing with your
						blocks, you've begun to take notice of the fact that many of them
						come in different shapes and sizes. Maybe you've even started to
						draw comparisons in your own mind's eye, like this one--use those!
						Lean into them. Anyway, I think about HTML elements the same way I
						do building blocks, which is the same way that I think about English
						paper formatting rules. As we dive deeper into HTML, we can really
						begin to deepen this comparison -- h1, h2, h3, etc. all serve as
						headings; attention-grabbers we place strategically throughout a
						page, half in an attempt to help others, and half in an attempt to
						keep our <em>own</em> thoughts organized.
					</p>
					<p className={styles.blogParagraph}>
						Following that same line of thinking, it makes sense -- in my mind
						-- that the other HTML elements function in much the same way,
						providing structure and formatting at a basic level.{' '}
						<pre>
							<code>
								Body
								<body style={{ display: 'flex' }}>
									<section
										style={{
											width: '48%',
											minHeight: '5rem',
										}}
										className={`example-outline`}
									>
										Sections
										<p className={`example-outline`}>paragraphs</p>
										<p style={{ color: 'red' }} className={`example-outline`}>
											paragraphs
										</p>
										<p className={`example-outline`} style={{ color: 'blue' }}>
											paragraphs
										</p>
									</section>
									<section
										style={{
											width: '48%',
											minHeight: '5rem',
										}}
										className={`example-outline`}
									>
										Images
										<BlogImage
											src={drawing1.src}
											alt={'Perfect HTML, drawn.'}
											height={40}
											width={40}
										/>
									</section>
								</body>
							</code>
						</pre>
					</p>
					<Carousel
						images={[
							{ src: drawing2, alt: 'Structured HTML & CSS, drawn' },
							{
								src: drawing3,
								alt: 'Structured HTML & CSS, drawn and colored (1/2)',
							},
							{
								src: drawing4,
								alt: 'Structured HTML & CSS, drawn and colored (2/2)',
							},
						]}
					/>
					<h2 className={`my-title`}>HTML & CSS as an art project</h2>
					<p className={styles.blogParagraph}>
						As the curious among us saw while flipping through the previous
						example, when we wield various disciplines together, we can take
						something seemingly rigid and untouchable, and turn it into a sort
						of art.
					</p>
				</>
			) : null}
		</section>
	);
}
