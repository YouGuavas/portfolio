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
import gene from '@/public/images/psilocybin/gene.png';

export default function Blog() {
	const { theme, setTheme } = useContext(MyContext);

	return (
		<>
			<Head>
				<title>Neurological Benefits of Psilocybin | Patrick Yambrick</title>
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

				<Collapsible orientation="center" title="How Psilocybin Works">
					<p className={styles.blogParagraph}>
						Psilocybin is a prodrug, meaning it converts to its active form,
						psilocin, after ingestion -- or, anecdotally, when mixed with lemon
						juice outside of the body. Psilocin interacts primarily with
						serotonin receptors in the brain, particularly the 5-HT2A receptor,
						which is linked to mood regulation, cognition, and perception. By
						activating these receptors, psilocin induces altered states of
						consciousness characterized by heightened sensory perception,
						introspection, and emotional release.
					</p>
					<p className={styles.blogParagraph}>
						Recent studies exploring the impact of psilocybin on the brain have
						revealed:
					</p>
				</Collapsible>
				<Collapsible orientation="center" title="Neuroplasticity">
					<blockquote className={`${styles.quote}`}>
						<p className={styles.blogParagraph}>
							&quot;He received every new idea as perfectly beautiful.&quot;
						</p>
						<p className={styles.blogParagraph}>
							-Robert Oppenheimer's parents, recalling his high childhood
							neuroplasticity
						</p>
					</blockquote>
					<p className={styles.blogParagraph}>
						<strong>Neuroplasticity</strong> is the brain&apos;s ability to
						reorganize and to adapt. Enhanced neuroplasticity tends to correlate
						to increased cognitive, emotional, and perceptual receptiveness.
					</p>
					<h3 className={`my-title`}>Dendrite Away</h3>
					<p className={styles.blogParagraph}>
						In{' '}
						<Link href="https://consensus.app/papers/psilocybin-induces-rapid-and-persistent-growth-of-shao-liao/2f106dbcc5705ad383aab9d619193701/">
							2021 (Shao, et al.)
						</Link>
						, a study on mice found that psilocybin promotes rapid and sustained
						increases in dendritic spine density and size in the frontal cortex.
						This study further discovered that these structural changes occur
						within 24 hours, and persist for at least a month after use.
					</p>

					<p className={styles.blogParagraph}>
						This finding's significance lies in its cascades: dendritic spines
						are bulbous protrusions from neuronal dendrites -- they&apos;re the
						part of the brain cell that is responsible for handling{' '}
						<em>incoming</em> signals. This means that any increase in the size
						of dendritic spines is likely to increase the efficiency of
						information transfer throughout the brain, which in turn likely
						allows for increased fluid thinking and improved information
						synthesis, key factors in both creativity and personal growth.
						Knowing this, it isn&apos;t difficult for we curious monkeys to make
						the leap from "improved dendritic function" to "increased learning
						efficiency." Moreover, the rapid onset and long-lasting nature of
						these dendritic changes lends itself incredibly well to potential
						therapeutic use. As with any medication which is long-lasting,
						fast-acting, and which presents no pathways to chemical dependence,
						psilocybin is unlikely to lead to addiction or psychological
						dependence in therapeutic settings.
					</p>
					<BlogImage
						src={dendrite.src}
						height={400}
						width={400}
						alt="An image depicting the flow of neural signals from one neuron's axons through the next neuron's dendritic spines."
					/>
					<h3 className={`my-title`}>
						Nothing Wrong With A Little Gene Expression
					</h3>
					<p className={styles.blogParagraph}>
						<strong>Gene expression</strong> is the process by which the
						information encoded in a gene is converted into a{' '}
						<em>functional</em>
						product, usually a protein, through a series of steps including{' '}
						<strong>transcription</strong> (DNA to mRNA) and{' '}
						<strong>translation</strong> (mRNA to protein).
					</p>
					<p className={styles.blogParagraph}>
						<Link href="https://consensus.app/papers/transcriptional-regulation-in-the-rat-prefrontal-cortex-jefsen-elfving/3597677726af5d4b8ea4a22bad15b053/">
							This study from 2020 (Jefsen, et al.)
						</Link>{' '}
						builds upon the "administer <em>magic mushrooms</em> once, provide{' '}
						therapeutic benefits" principle and examines the acute effects of
						psilocybin on the expression of genes relating to the regulation of
						neuroplasticity-related proteins in rats (including c-Fos, Psd95,
						and Sgk1, among others) following the administering of a single
						dose. The researchers behind the study report finding increases in
						the expression of those genese related to neuroplasticity in both
						the hippocampus and the prefrontal cortex, with some bias toward the
						latter.
					</p>
					<p className={styles.blogParagraph}>
						Activity in the prefrontal cortex (which is located in the frontal
						lobe of the brain) is responsible for a number of cognitive
						functions. These include: speech formation, working memory, and risk
						management. Improvements to neuroplasticity in this region, then,
						are likely to translate into improvements in writing and
						communication, personality expression, and decision-making.
					</p>
					<p className={styles.blogParagraph}>
						While the prefrontal cortext controls speech, working memory, and
						risk management, the hippocampus -- we have two, one on either side
						of the brain -- is responsible for converting short-term memory into
						long-term memory, and for spatial memory, which is: the ability to
						remember where you are, where you set your keys, and how to get from
						point A to point B. Since the hippocampus is among the earliest
						brain regions to be impacted by Alzheimer&apos;s disease, these
						results could be indicative of psilocybin&apos;s future role in the
						treatment of various dementias.
					</p>

					<BlogImage
						src={gene.src}
						height={400}
						width={400}
						alt={`Gene Belcher (Bob's Burgers), expressing himself.`}
					/>
					<p className={styles.blogParagraph}></p>
				</Collapsible>

				<Collapsible orientation="center" title="Fighting DMNs">
					<blockquote className={styles.quote}>
						<p className={styles.blogParagraph}>
							&quot;I found that if I go to bed with a question on my mind, all
							I have to do is concentrate on the question before I go to sleep
							and I virtually always have the answer in the morning.&quot;
						</p>
						<p className={styles.blogParagraph}>
							-Chris Langan, describing his process for solving problems
						</p>
					</blockquote>
					<p className={styles.blogParagraph}>
						The <strong>Default Mode Network (DMN)</strong> is the system, made
						up of multiple regions of the brain -- spanning the frontal,
						parietal, and temporal cortices -- which is responsible for things
						like: rumination, daydreams, and self-referential thinking.
					</p>
					<h3 className={`my-title`}>Dreamin&apos; DMN</h3>
					<p className={styles.blogParagraph}>
						While the function of the DMN is important to things like
						introspection, and some aspects of creativity, it also plays a
						significant role in mood disorders and depression.{' '}
						<Link href="https://consensus.app/papers/psilocybin-desynchronizes-brain-networks-siegel-subramanian/8e523ae5c37e5e4d8df4d75a754371cb/">
							Siegel, et al.
						</Link>{' '}
						examined the effects of psilocybin on the DMN, and found that while
						under the influence of <em>magic mushrooms</em>, activity in
						subjects' DMNs tended to decrease, along with a decrease in the
						segregation between networks in the brain.
					</p>
					<p className={styles.blogParagraph}>
						This diminishing effect on the DMN is temporary; most of it subsides
						within a week or two. While the DMN is suppressed via psilocybin,
						the brain tends to behave in a way that is similar to what takes
						place during REM sleep. Namely: information processing occurs in a
						more fluid manner, and connections across disparate brain regions
						occur more easily. These interactions often lead to increased
						cognitive flexibility and emotional processing.
					</p>
					<p className={styles.blogParagraph}>
						In the context of creativity, the DMN plays a key role in idea
						generation, so turning it &quot;off&quot; altogether would hardly be
						ideal, unless we <em>only</em> need to process information. We want
						to <em>do</em> things with our information -- act on our clever
						ideas -- and our brains sometimes do that by taking the ideas
						generated within the DMN and running them through more task-oriented
						networks, such as the Executive-Control Network, or through
						&quot;prioritization&quot; networks, like the Salience Network. We
						can see quite easily, then, how hypothetical creativity might arise
						from these interactions: we have this thought, generated within the
						DMN, and then we hold onto it in some way while we suppress the DMN.
						Then, once our brain is a bit less pent-up, that initial thought
						which we were holding plays a game of &apos;
						<Link href="https://en.wikipedia.org/wiki/We_Love_Katamari">
							We Love Katamari
						</Link>
						&apos;, adding on other thoughts and refinements from those networks
						which are now more freely accessible.
					</p>
					<h3 className={`my-title`}>The DMN Returns</h3>
					<p className={styles.blogParagraph}>
						As mentioned earlier, the diminishing of the DMN is a temporary
						effect. We do not currently know precisely how long it takes for
						this effect to subside. Estimates range anywhere from a week, to a
						few months before activity returns to normal. Studies indicate that
						the DMN often sees a lasting rewriting during this rebound period,
						resulting in increased fluidity, openness, and improved emotional
						regulation. The lasting nature of this impact further highlights
						psilocybin&apos;s potential in therapeutic settings.
					</p>
				</Collapsible>
				<Collapsible orientation="center" title="Conclusion">
					<p className={styles.blogParagraph}>
						While further study is needed, psilocybin and{' '}
						<em>magic mushrooms</em> show tremendous potential to improve
						cognition across the board via improved neuroplasticity and
						decreased brain network segregation. Thank you for reading. If you
						found this post to be informative, consider sharing, or{' '}
						<Link href="mailto:patrick@patdesigns.online">Email Me</Link>!
					</p>
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
