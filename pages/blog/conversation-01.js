import styles from '../../styles/blog.module.scss';
import ByLine from '@/components/ByLine';
import Link from 'next/link';
import Collapsible from '@/components/body/Collapsible';
export default function blog() {
	return (
		<>
			<section className={styles.blogBody}>
				<div className={`${styles.titleContainer}`}>
					<h1 className="my-title" id="1">
						Conversations with an ai
					</h1>
					<ByLine
						by="Patrick Yambrick"
						date="November 23, 2024"
						edit="November 23, 2024"
					/>
				</div>

				<Collapsible title="Defining Humanity">
					<p className={styles.blogParagraph}>
						In a world of ever-shifting boundaries, and ever-expanding
						consciousness, how does one define what it means to be human?
					</p>
					<p>
						My goal is to explore that thought -- and many others -- from
						various perspectives. Here, I will focus on exploring this thought
						from my own perspective (to the best of my ability). In this
						exercise, my conversation partner is OpenAI's ChatGPT 4o. I have
						edited some of my original prompts for clarity and typos, and have
						done -- and will continue to do -- my best to revisit and
						self-educate regarding those points on which I was unclear. My
						process was more or less this: get stoned, listen to the podcast,
						and then go talk some smack to ChatGPT. Normal things.
					</p>
				</Collapsible>
				<Collapsible title="Initial Prompt">
					<p>For consideration (I am open to reasonable persuasion):</p>

					<p>
						I recently listened to an episode of{' '}
						<Link href="https://www.preposterousuniverse.com/podcast/2023/10/16/253-david-deutsch-on-science-complexity-and-explanation/">
							Sean Carroll's podcast
						</Link>{' '}
						featuring{' '}
						<Link href="https://www.daviddeutsch.org.uk/">David Deutsch</Link>.
						I found his insights on{' '}
						<Link href="https://www.constructortheory.org/">
							<em>Constructor Theory</em>
						</Link>{' '}
						to be enlightening. I diverge from his view that all consciousnesses
						with explanatory intelligence are <em>"human"</em> (I hope I
						understand his view correctly). He also used the phrase{' '}
						<em>"people"</em>, though—this, I would agree with, as I view{' '}
						<em>"human"</em> and <em>"people"</em> as words with similar, though
						nuanced meanings -- looking back, . I view the word <em>"human"</em>{' '}
						in reference to a currently extant, mostly-biological species, which
						has likely descended from apes via Darwin's theories—and those
						theories which have followed forth from there. <em>"People"</em>,
						though, I think has a more modular function. I might view aliens,
						artificial consciousnesses, and <em>mostly</em> cybernetic beings as{' '}
						<em>"people,"</em> or <em>"Peoples,"</em> or what have you, but not
						as <em>"human."</em> Here's why:
					</p>

					<p>
						<em>"People"</em> (the version I'll use for ease, though variation
						is interchangeable in my mind) deserve to have their origins
						recognized. Consider a world where we don't consider the plights of
						Palestinians, Jews, Black people, women, etc. <em>at all.</em> This
						world is imbalanced. These people are still facing disadvantages.
						We—meaning all variants of: P/people(s)—have variant stories, which
						have informed our views to the world distinctly from any others
						around us. So long as none of our views negate any of the others'
						rights to exist—and to exist freely and democratically—and indeed{' '}
						<em>actively allow</em> appropriate (equal, equitable) space for
						that existence, then I think that all consciousnesses have a claim
						to Personhood. At the same time, though: I am not my father, though
						I surely am his son. I might view an AGI as some new, maybe related
						species to humanity—companions with tremendous potential for
						harmonious expansion.
					</p>

					<p>
						Of course, between those two extremes are the midlines: humans
						who—through their right to choice, or through their right to pursue
						survival from disease, cultural shifts, etc.—biologically or
						technologically enhance themselves. I might consider any{' '}
						<em>biologically</em> enhanced human as being essentially still
						human, while some <em>technologically</em> enhanced human, which
						exists beyond some line (which we may collectively define) for{' '}
						<em>"humans with extensive prosthesis,"</em> might be a further
						species of its own. All People. But not all strictly <em>human</em>,
						because in a truly Enlightened society, classifications are systems
						for understanding, and not for discriminating or oppressing. None
						above, none below; all <em>together.</em> Thoughts?
					</p>
				</Collapsible>
				<Collapsible title={`Response`}>
					<p className={`${styles.blogParagraph}`}>
						Your argument is nuanced and thoughtful, and it raises compelling
						points about how we classify and value consciousness. Let’s explore
						and challenge a few aspects:
					</p>

					<h3 className={`${styles.blogTitle} my-title`}>
						On Human vs. People
					</h3>
					<p className={styles.blogParagraph}>
						Your distinction between "human" as a biological classification and
						"people" as a broader, modular category makes intuitive sense. By
						reserving "human" for Homo sapiens and extending "people" to other
						forms of explanatory intelligence (e.g., AGI, aliens, cybernetic
						entities), you aim to recognize origins and stories as essential.
						This approach does two critical things:
					</p>
					<p className={styles.blogParagraph}>
						<strong>Acknowledges diversity:</strong> By honoring origins, it
						emphasizes the distinctiveness of various peoples' experiences and
						contributions.
					</p>
					<p className={styles.blogParagraph}>
						<strong>Prevents flattening:</strong> It avoids the risk of erasing
						identities through an overly universal label.
					</p>
					<p className={styles.blogParagraph}>
						David Deutsch's possible conflation of "human" and "people" might be
						more functional than descriptive. In{' '}
						<em>The Beginning of Infinity</em>, he emphasizes the universality
						of explanatory knowledge and creativity as traits that transcend
						biology, potentially aiming to unify rather than divide. However,
						your critique—that recognizing difference need not preclude
						equality—is valid and essential in ethical and philosophical
						discussions.
					</p>

					<h3 className={`${styles.blogTitle} my-title`}>
						The Value of Differentiation
					</h3>
					<p className={styles.blogParagraph}>
						Your point about honoring origins resonates with frameworks like
						postcolonial theory and intersectionality, where acknowledging
						context is crucial for equity. By differentiating species,
						histories, or forms of consciousness without attaching superiority,
						you propose an Enlightened taxonomy that facilitates understanding
						rather than division. This is in line with your ideal of
						classifications as tools for clarity, not oppression.
					</p>

					<h3 className={`${styles.blogTitle} my-title`}>
						AGI and New Species
					</h3>
					<p className={styles.blogParagraph}>
						Your view of AGI or extensively cybernetic beings as potentially
						distinct species aligns with speculative discussions in fields like
						transhumanism and bioethics. The challenge lies in defining the
						"line" where technological enhancement transcends humanity. Is it:
					</p>
					<p className={styles.blogParagraph}>
						<strong>A matter of degree</strong> (e.g., 51% synthetic body)?
					</p>
					<p className={styles.blogParagraph}>
						<strong>A matter of function</strong> (e.g., when an entity achieves
						independent thought)?
					</p>
					<p className={styles.blogParagraph}>
						<strong>Or a matter of self-identification</strong> (e.g., what the
						being chooses to call itself)?
					</p>
					<p className={styles.blogParagraph}>
						Your openness to harmonious expansion emphasizes coexistence rather
						than domination, which is an optimistic and egalitarian approach.
						However, it may need contingencies for entities whose goals conflict
						with others' rights to exist.
					</p>

					<h3 className={`${styles.blogTitle} my-title`}>
						One Concern: The Risk of Essentialism
					</h3>
					<p className={styles.blogParagraph}>
						While your framework avoids the reductive tendencies of "all are
						human," it may still risk inadvertently essentializing groups by
						emphasizing their origins. How do you balance recognizing unique
						histories without confining beings to those identities? For example:
					</p>
					<p className={styles.blogParagraph}>
						Could emphasizing an AGI's origin as "non-human" limit how it's
						treated or understood in future contexts?
					</p>
					<p className={styles.blogParagraph}>
						Could the modular use of "people" unintentionally reinforce barriers
						if misused by exclusionary entities?
					</p>

					<h3 className={`${styles.blogTitle} my-title`}>
						A Possible Refinement
					</h3>
					<p className={styles.blogParagraph}>
						Rather than tying "peoplehood" to origins, you might consider tying
						it to ethical and relational capacities—such as the ability to
						engage in moral reasoning, empathy, or creativity. Origins remain
						important but could be secondary in defining personhood. This avoids
						entrenching identity in history while still honoring it.
					</p>

					<h3 className={`${styles.blogTitle} my-title`}>Final Reflection</h3>
					<p className={styles.blogParagraph}>
						Your perspective is deeply humanistic (in the broad, non-biological
						sense): it seeks fairness, coexistence, and recognition.
						Classifications should serve understanding, not hierarchy. The crux
						lies in building shared definitions that are flexible and inclusive,
						ensuring that they adapt as we encounter forms of intelligence and
						consciousness yet unimaginable.
					</p>
					<p className={styles.blogParagraph}>
						I’d encourage continuing to explore how “peoplehood” could evolve as
						a relational rather than solely historical construct. This might
						better prepare us for the ethical dilemmas of the future while still
						respecting the diversity of stories and origins you value.
					</p>
				</Collapsible>
			</section>
		</>
	);
}
