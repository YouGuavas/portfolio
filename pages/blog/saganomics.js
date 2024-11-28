import styles from '@/styles/blog.module.scss';
import ByLine from '@/components/ByLine';
import Collapsible from '@/components/body/Collapsible';
import SelfieImage from '@/components/body/SelfieImage';
import Link from 'next/link';
import Head from 'next/head';
import { useContext } from 'react';
import { MyContext } from '@/components/Layout';

import selfie from '@/public/images/selfies/selfie.png';
import aiSelfie from '@/public/images/selfies/ai.png';

export default function Blog() {
	const { theme, setTheme } = useContext(MyContext);

	return (
		<>
			<Head>
				<title>
					Saganomics: A Modular Framework for Traveling Forward in Time
				</title>
				<meta
					name="description"
					content="Monke ponders how humanity can create peace within itself and forge it with emergent intelligences (AI, AGI, ASI, Aliens?) into the future of space and time."
				/>
			</Head>
			<section
				className={`${styles.blogBody} ${theme} pad-top-vh my-background-generic`}
			>
				<div className={`${styles.titleContainer}`}>
					<h1 className="my-title" id="1">
						Saganomics: A Modular Framework for Traveling Forward in Time
					</h1>
					<p className={styles.blogParagraph}>
						Note: I am not Carl Sagan, nor am I affiliated with any member of
						the Sagan family. I&apos;ve chosen this title out of profound
						respect, and will gladly change it upon request.
					</p>
					<blockquote className={`${styles.quote}`}>
						<p className={styles.blogParagraph}>
							&quot;We do not ask for what useful purpose the birds do sing, for
							song is their pleasure since they were created for singing.
							Similarly, we ought not to ask why the human mind troubles to
							fathom the secrets of the heavens... The diversity of the
							phenomena of Nature is so great, and the treasures hidden in the
							heavens so rich, precisely in order that the human mind shall
							never be lacking in fresh nourishment.&quot;
						</p>
						<p className={styles.blogParagraph}>
							-Johannes Kepler, <cite>Mysterium Cosmographicum</cite>
						</p>
					</blockquote>
				</div>
				<Collapsible title="Opening the mind">
					<h3 className={'my-title'}>Titans Yesterday</h3>
					<p className={styles.blogParagraph}>
						With the dawning of every era, humanity is faced with a new set of
						challenges. Yesterday, we witnessed great minds like Carl Sagan, a
						Titan in the realm of science communication, and many others across
						the world who worked tirelessly to educate the public. They sought
						to unite the awe-inspiring possibilities of space and time with the
						pressing concerns and uncertainties of their age.
					</p>
					<p className={styles.blogParagraph}>
						Sagan, and others forged of the same fire—educators devoted to
						illuminating the world, thinkers who carried the cosmos in their
						minds and fanned the flames of knowledge with pride—offered us
						something <em>truly</em> magical: a springboard from which we might
						leap headlong into infinity (and cautionary tales which continue to
						gently urge us to think twice before doing so).
					</p>
					<p className={styles.blogParagraph}>
						The great concern of Sagan&apos;s day was that humanity might doom
						itself to nuclear winter before we had gained the chance to commune
						with extraterrestrial intelligence. In today&apos;s hyper-connected,
						ultra-productive world, driven by daily breakthroughs in already
						awe-inspiring technologies, we are faced with a different set of
						challenges. My aim in this exploration is to name a few of those
						challenges, and to attempt to outline a system which creates room
						for their solving.
					</p>
					<h3 className={`my-title`}>Soup Tomorrow</h3>
					<p className={styles.blogParagraph}>
						Today, we are witnessing civic unrest and conflict across the globe,
						as well as gaps in knowledge, income, and equality. Pair with that
						the <em>rapid</em> engineering advances we&apos;ve seen with{' '}
						<Link href="https://www.spacex.com/">SpaceX</Link> and the AI race
						which has developed within the tech sector, and we arrive at a
						recipe for static soup: potential chaos.
					</p>
					<p className={styles.blogParagraph}>
						Chaos is alarming. Without leveraging some quantum algorithm,
						chaos-by definition- is both overwhelming and unpredictable. We
						humans and our systems have <em>traditionally</em> struggled with
						unpredictability. By creating a system of systems-one which allows
						space for and emphasizes a plurality of beliefs via transparent,
						sustainable, and ethical methods-I believe we are also building a
						scalable platform for stability today, and into the technological
						and stellar inevitability of tomorrow. Explore Saganomics with me,
						and consider its many applications.
					</p>
					<br />
					<hr />
					<p className={styles.blogParagraph}>
						<strong>Tl;Dr:</strong> I admire Carl Sagan, and you&spos;re curious
						about AI, so follow me on this poetic journey through a system which
						could bring broad stability to the world, especially with the
						emergence of AI.
					</p>
				</Collapsible>
				<Collapsible title={`Galaxies Within Galaxies`}>
					<h3 className={'my-title'}>Enter Solipsism</h3>
					<p className={styles.blogParagraph}>
						<Link href="https://en.wikipedia.org/wiki/Solipsism">
							Solipsism
						</Link>
						, as described on Wikipedia, is the philosophical idea that only
						one&apos;s mind is sure to exist. From here, I will be approaching
						Solipsism from a methodological (vs. epistemological or
						metaphysical) angle, though I will do my best to clarify when we
						need to consider the epistemological perspective.
					</p>
					<p className={styles.blogParagraph}>
						Perhaps you-like me-have spent too much time wandering about,
						wondering about whether you exist. Perhaps not? Either way,
						I&apos;ve done a great deal of just that sort of wondering.
						Here&apos;s where I arrive: &quot;I likely exist. If I don&apos;t,
						then who&apos;s asking?&quot; I am observing something (me, the
						world around me). I am being observed - consider that we must be
						under observation by ourselves in order to experience any doubt or
						confirmation of our own existence in the first place.
					</p>
					<p className={styles.blogParagraph}></p>
					<h3 className={`my-title`}>Think Big Data</h3>
					<p className={styles.blogParagraph}>
						Artificial Intelligences arrive at knowledge via machine learning,
						which is broadly composed of three categories:
					</p>{' '}
					<ul>
						<li>
							<Link href="https://en.wikipedia.org/wiki/Supervised_learning">
								<strong>Supervised Learning:</strong>
							</Link>{' '}
						</li>
						<li>
							<Link href="https://en.wikipedia.org/wiki/Unsupervised_learning">
								<strong>Unsupervised Learning:</strong>
							</Link>
						</li>
						<li>
							<Link href="https://en.wikipedia.org/wiki/Reinforcement_learning">
								<strong>Reinforcement Learning:</strong>
							</Link>
						</li>
					</ul>
					<p className={styles.blogParagraph}>
						For those who have some grasp of how
					</p>
					<p className={styles.blogParagraph}></p>
					<h3 className={`my-title`}>Solipsist Agents</h3>
					<p className={styles.blogParagraph}></p>
					<h3 className={`my-title`}>Descartes Has Doubts</h3>
					<br />
					<hr />
					<p className={styles.blogParagraph}>
						<strong>Tl;Dr:</strong> Solipsism establishes that we exist. AI
						agents experience themselves as internal solipsist galaxies - their
						known data being their entropic edge. What lies beyond?
					</p>
				</Collapsible>

				<Collapsible title={`Look Within. Then, Look Out!`}>
					<br />
					<hr />
					<p className={styles.blogParagraph}>
						<strong>Tl;Dr:</strong> Cartesian doubt, curried with unsupervised
						learning and theory of mind lead to existence by collective
						belief-and concerning divergences.
					</p>
				</Collapsible>

				<Collapsible orientation="center" title="Conclusion">
					<p>Full circle (Harmony, Cosmos)</p>
				</Collapsible>
			</section>
		</>
	);
}
