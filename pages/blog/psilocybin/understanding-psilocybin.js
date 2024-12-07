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
					<p className={styles.blogParagraph}>
						<strong>Neuroplasticity</strong> is the brain&apos;s ability to
						reorganize and to adapt.
					</p>
					<h3 className={`my-title`}>Dendrite Away</h3>
					<p className={styles.blogParagraph}>
						In{' '}
						<Link href="https://consensus.app/papers/psilocybin-induces-rapid-and-persistent-growth-of-shao-liao/2f106dbcc5705ad383aab9d619193701/">
							2021
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
							This study
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
					<p className={styles.blogParagraph}>Gene expression</p>
					<BlogImage
						src={gene.src}
						height={400}
						width={400}
						alt={`Gene Belcher (Bob's Burgers), expressing himself.`}
					/>
					<p className={styles.blogParagraph}></p>
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
