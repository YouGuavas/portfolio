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
					Why Elon Musk Can&apos;t Teach You CSS (Simplified) | Patrick Yambrick
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
		variant[1].indexOf(4) !== -1
			? setTheme('spaceship')
			: variant[1].indexOf(2) !== -1 ||
			  variant[1].indexOf(1) !== -1 ||
			  variant[1].indexOf(3) !== -1 ||
			  variant[1].indexOf(0) !== -1
			? setTheme('new-normal')
			: null;
	}, [variant, setTheme]);

	return (
		<section className={`${styles.blogBody} ${theme}`}>
			<TableOfContents
				title="Level"
				sections={[
					['1', [1]],
					['2', [2]],
					['3', [3]],
					['Elon', [4]],
					['Back', [0]],
				]}
			/>
			<div className={`${styles.titleContainer}`}>
				<h1 className="my-title" id="1">
					Why Elon Musk Can&apos;t Teach You CSS (Simplified)
				</h1>

				<ByLine by="Patrick Yambrick" date="November 15, 2024" />
			</div>
			{variant[1].indexOf(0) !== -1 ? (
				<>
					<p className={styles.blogParagraph}>
						Hi! I see you sitting there wondering to yourself: &quot;
						<em>How can I get started coding?</em>&quot; Or maybe: &quot;What
						does this have to do with Elon Musk?&quot; Don&apos;t worry-I&apos;m
						not going to bore you with a traditional{' '}
						<em>beginner&apos;s coding tutorial</em>! My aim is to deliver a
						high-level overview of the building blocks of coding for the web,
						focusing on HTML & CSS. I hope to help readers gain confidence, and
						to inspire you to set out on your own learning pathway. I will do my
						best to provide relevant links (as starting points for self-directed
						learners) when I notice myself making leaps.
					</p>
					<p className={styles.blogParagraph}>
						I will be focusing on{' '}
						<Link href="https://www.w3schools.com/html/html_intro.asp">
							HTML
						</Link>{' '}
						and CSS here, with the intention of delivering information via a
						cascading approach, drawing from real-world examples familiar to
						most of us. I personally authored each of these sections, leveraging{' '}
						<Link href="https://openai.com/chatgpt/overview/">
							OpenAI&apos;s chatGPT
						</Link>{' '}
						for proofreading. If you want to follow along with a curriculum and
						start exploring, I strongly advise checking out{' '}
						<Link href="https://www.freecodecamp.org/">FreeCodeCamp</Link>.
					</p>
					<p className={styles.blogParagraph}>
						I&apos;m a huge proponent of the concept that we are capable of
						coding anything we can vocalize, provided the following:
					</p>
					<ol className={`${styles.ending} ${styles.myList}`}>
						<li>We are capable of wielding some programming language.</li>
						<li>
							We are able to examine our thoughts and break them down into
							parts.
						</li>
					</ol>
					<h3>
						<strong>Readers:</strong>
					</h3>
					<p className={`${styles.ending} ${styles.blogParagraph}`}>
						This is my first post, and I&apos;m eager to refine my teaching and
						blogging styles. I welcome any{' '}
						<Link href="mailto:patrick@patdesigns.online">
							thoughtful feedback
						</Link>
						. Coding of any sort can be difficult. My hope here is to explore
						and educate-not alienate through over-simplification.
					</p>
				</>
			) : null}
			{variant[1].indexOf(4) !== -1 ? (
				<>
					<p className={styles.blogParagraph}>
						I have things to do. Why are you asking me to teach you CSS?
					</p>
					<p className={styles.blogParagraph}>
						Have you ever given Mars side-eye through a telescope? If you
						haven&apos;t--really, you should; it-it&apos;s one of the-- really,
						one of the peak experiences humanity has to offer itself. Have you
						seen my rocket?
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
					<p className={`${styles.ending} ${styles.blogParagraph}`}>
						Okay, maybe Elon Musk didn&apos;t write any of this--and maybe
						he&apos;s too busy to teach you CSS--but I did, and I&apos;m{' '}
						<em>certain</em> that I can teach anybody how to write CSS.
					</p>
				</>
			) : null}

			{variant[1].indexOf(1) !== -1 ? (
				<>
					<h2 className={`${styles.blogTitle} my-title`}>HTML as a Lego set</h2>
					<p className={`${styles.ending} ${styles.blogParagraph}`}>
						<em>Many</em> aspects of coding function just like building blocks!
						Sure, maybe they&apos;re a <em>little</em> more complex than Legos.
						Data structures, operands, and operators all <em>link</em> together
						in a system, which then operates toward a goal that you&apos;ve set
						for it. In this example, we&apos;ll be examining{' '}
						<Link href="https://www.w3schools.com/html/html_intro.asp">
							HTML
						</Link>
						-the coding language responsible for presenting web pages via your
						browser. HTML fits perfectly in this example because it doesn&apos;t
						really /do/ much of anything! It just sits there! As with our
						skeletons, though, it&apos;s far from useless. HTML provides
						much-needed structure to our web pages and other front-end
						applications.{' '}
						<Link href="https://www.w3schools.com/html/html_elements.asp">
							HTML elements
						</Link>{' '}
						really are very similar to mental building blocks. You&apos;re
						functionally <em>stacking</em> them on top of one another to build
						the basic layout of your site. If you can type on a keyboard, and
						you can build with Legos, you can teach yourself how to build an
						HTML site-when provided with the pathway that best suits you.
					</p>{' '}
					<h2 className={`${styles.blogTitle} my-title`}>
						A perfect beginning
					</h2>
					<p className={styles.blogParagraph}>
						A common theme you&apos;ll discover on your coding journey is this:
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
						I know what you&apos;re thinking-those are Mega Bloks! That&apos;s
						right. We just opened up the starter kit. As we dig deeper and
						deeper into HTML, we&apos;ll learn more and more about its elements
						-- and how we can use those to improve the structure of our code. In
						the beginning, it&apos;s fine to dig around and explore --
						that&apos;s how I learned! One piece of gentle advice, though:
						diving deeper and really understanding the importance of structure
						from early on is a <em>really</em> good idea.
					</p>
					<h3 className={`${styles.blogTitle} my-title`}>
						<strong>Takeaway:</strong>
					</h3>
					<p className={`${styles.blogParagraph} ${styles.ending}`}>
						HTML is very forgiving! Play around with it, build some stuff, see
						what you can do. You can write pretty much anything, and HTML will
						make it work. You can start by creating a{' '}
						<Link href="https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_templates_band&stacked=h">
							.html
						</Link>{' '}
						file on your computer, editing it, and running it in a browser.
					</p>{' '}
				</>
			) : null}
			{variant[1].indexOf(2) !== -1 ? (
				<>
					<h2 className={`my-title`}>HTML & CSS as an English paper</h2>
					<p className={styles.blogParagraph}>
						Great! Now you&apos;ve got your block tower built. Admire
						it-you&apos;ve earned it. Ahh! You just woke up, and remembered
						you&apos;ve got an English paper due first thing in the morning! The
						last time you tried to turn in a Lego tower to your professor, they
						laughed so hard that students from the hallway popped their heads in
						to see what was going on. Never again.
					</p>{' '}
					<p className={styles.blogParagraph}>
						{' '}
						So, what happens when we want to add a little complexity to coding?
						Well, as with nearly every learning endeavor: we break it down into
						smaller blocks, don&apos;t we?
					</p>
					<p className={styles.blogParagraph}>
						What&apos;s a thing that every English teacher appreciates?
						That&apos;s right--a well-formatted document! As you&apos;ve been
						playing with your blocks, you&apos;ve begun to take notice of the
						fact that many of them come in different shapes and sizes. Maybe
						you&apos;ve even started to draw comparisons in your own mind&apos;s
						eye, like this one--use those! Lean into them. Anyway, I think about
						HTML elements the same way I do building blocks, which is the same
						way that I think about English paper formatting rules. As we dive
						deeper into HTML, we can really begin to deepen this comparison --
						&lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, and so on serve as structural
						markers, just like the titles and subheadings of a paper. They grab
						attention and help organize thoughts—both for readers and ourselves.
					</p>
					<BlogImage
						src={drawing2.src}
						alt="Structured HTML & CSS, drawn."
						height={400}
						width={400}
					/>
					<p className={`${styles.blogParagraph} ${styles.ending}`}>
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
					<h3 className={`${styles.blogTitle} my-title`}>
						<strong>Takeaway:</strong>
					</h3>
					<p className={`${styles.blogParagraph} ${styles.ending}`}>
						HTML may be forgiving, but organization is important. Consider
						learning its structure while you build to save yourself a bunch of
						headaches down the road.
					</p>
				</>
			) : null}
			{variant[1].indexOf(3) !== -1 ? (
				<>
					<h2 className={`my-title`}>HTML & CSS as an art project</h2>
					<p className={styles.blogParagraph}>
						I don&apos;t know about you -- I got lucky and had a great English
						teacher. I remember them explaining to the class why they could take
						&quot;creative liberties&quot; while we couldn&apos;t. They said,
						&quot;Once you&apos;ve mastered the rules, you&apos;re allowed to
						bend them.&quot; At the time, I didn&apos;t fully understand. Now, I
						think I do: Nobody is grading our papers. That suits me, as a
						creative writer who felt stifled under the constraints of formal
						structure.
					</p>
					<p className={styles.blogParagraph}>
						<Link href="https://developer.mozilla.org/en-US/docs/Web/CSS">
							CSS
						</Link>{' '}
						allows us to get <em>creative</em> with it. CSS, when paired with{' '}
						<Link href="https://www.w3schools.com/css/css_selectors.asp">
							CSS selectors
						</Link>{' '}
						-- the &quot;names,&quot; or &quot;labels&quot; of HTML elements,
						along with{' '}
						<Link href="https://www.w3schools.com/cssref/sel_class.php">
							classes
						</Link>
						, IDs, and more -- allows for very fine control over the look{' '}
						<em>and</em> feel of a page. If you&apos;re someone with an artistic
						mind, just a little CSS can carry you further than you might expect.
					</p>
					<p className={styles.blogParagraph}>
						If you&apos;ve been following along with the{' '}
						<Link href="https://www.freecodecamp.org/learn/2022/responsive-web-design/">
							FreeCodeCamp front-end curriculum
						</Link>
						, and you understand what&apos;s happening on this page,
						there&apos;s a strong chance you&apos;re ready to start building
						creatively.
					</p>
					<Carousel
						images={[
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
					<h3 className={`${styles.blogTitle} my-title`}>
						<strong>Takeaway:</strong>
					</h3>
					<p className={`${styles.blogParagraph} ${styles.ending}`}>
						Developing good organizational and structural habits from the
						beginning of your journey will help you discover ways to create and
						to shine through all of space and time.
					</p>
				</>
			) : null}
		</section>
	);
}
