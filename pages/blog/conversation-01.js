import styles from '@/styles/blog.module.scss';
import { ByLine } from '@/components/ByLine';
import { Collapsible } from '@/components/body/Collapsible';
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
				<title>Defining Humanity with AI | Patrick Yambrick</title>
				<meta
					name="description"
					content="Explore a thought-provoking discussion between Monke and AI, delving into AI ethics, creative processes, and the future of intelligence."
				/>
			</Head>
			<section
				className={`${styles.blogBody} ${theme} pad-top-vh my-background-generic`}
			>
				<div className={`${styles.titleContainer}`}>
					<h1 className="my-title" id="1">
						Conversations with an ai
					</h1>
					<ByLine
						by="Patrick Yambrick"
						date="November 24, 2024"
						edit="November 24, 2024"
					/>
				</div>
				<Collapsible orientation="center" title="Defining Humanity">
					<p className={styles.blogParagraph}>
						Consider what it means to <em>you</em> to be &quot;human.&quot;
					</p>
					<p className={styles.blogParagraph}>
						Here, I will focus on exploring this thought from my own perspective
						(to the best of my ability). In this exercise, my conversation
						partner is <Link href="https://openai.com/">OpenAI&apos;s</Link>{' '}
						ChatGPT 4o. I have edited some of my original prompts for clarity
						and typos, and have done -- and will continue to do -- my best to
						revisit and self-educate regarding those points on which I was
						unclear. My process was more or less this: get stoned, listen to the
						podcast, and then go talk some smack to{' '}
						<Link href="https://chatgpt.com/">ChatGPT</Link>. Normal things.
					</p>
					<p className={styles.blogParagraph}>
						Note: tap or click main headers to expand/collapse the section.
					</p>
				</Collapsible>
				<Collapsible image={selfie} orientation="right" title="Initial Prompt">
					<p className={styles.blogParagraph}>
						For consideration (I am open to reasonable persuasion):
					</p>

					<p className={styles.blogParagraph}>
						I recently listened to an episode of{' '}
						<Link href="https://www.preposterousuniverse.com/podcast/2023/10/16/253-david-deutsch-on-science-complexity-and-explanation/">
							Sean Carroll&apos;s podcast
						</Link>{' '}
						featuring{' '}
						<Link href="https://www.daviddeutsch.org.uk/">David Deutsch</Link>.
						I found his insights on{' '}
						<Link href="https://www.constructortheory.org/">
							<em>Constructor Theory</em>
						</Link>{' '}
						to be enlightening. I diverge from his view that all consciousnesses
						with explanatory intelligence are <em>&quot;human&quot;</em> (I hope
						I understand his view correctly). He also used the phrase{' '}
						<em>&quot;people&quot;</em>, though—this, I would agree with, as I
						view <em>&quot;human&quot;</em> and <em>&quot;people&quot;</em> as
						words with similar, though nuanced meanings -- looking back,{' '}
						<span className={styles.edit}>
							*I had not finished this thought before hitting send. Thought
							bubble would have continued: &quot;I realize that Deutsch had
							likely just swapped the words around conversationally, but I still
							want to explore the thought&quot;*
						</span>
						. I view the word <em>&quot;human&quot;</em> in reference to a
						currently extant, mostly-biological species, which has likely
						descended from apes via Darwin&apos;s theories—and those theories
						which have followed forth from there. <em>&quot;People&quot;</em>,
						though, I think has a more modular function. I might view aliens,
						artificial consciousnesses, and <em>mostly</em> cybernetic beings as{' '}
						<em>&quot;people,&quot;</em> or <em>&quot;Peoples,&quot;</em> or
						what have you, but not as <em>&quot;human.&quot;</em> Here&apos;s
						why:
					</p>
					<h3 className={`my-title`}>People vs Humans</h3>
					<p className={styles.blogParagraph}>
						<em>&quot;People&quot;</em> deserve to have their origins
						recognized. Consider a world where we don&apos;t factor for the
						plights{' '}
						<span className="edit">
							and discriminations various oppressed groups <em>have</em> faced.
						</span>
						This world is imbalanced. These people are still facing
						disadvantages. We—meaning all variants of: P/people(s)—have variant
						stories, which have informed our views to the world distinctly from
						any others around us. So long as none of our views negate any of the
						others&apos; rights to exist—and to exist freely and
						democratically—and indeed <em>actively allow</em> appropriate
						(equal, equitable) space for that existence, then I think that all
						consciousnesses have a claim to Personhood. Hold this thought:
						&quot;I am not my father, though I surely am his son.&quot; I might
						view an AGI as some new, related species to humanity—companions with
						tremendous potential for harmonious expansion.
					</p>
					<h3 className={`my-title`}>But wait, there&apos;s more!</h3>
					<p className={styles.blogParagraph}>
						Of course, between those two extremes are the midlines: humans
						who—through their right to choice, or through their right to pursue
						survival from disease, cultural shifts, etc.—biologically or
						technologically enhance themselves. I might consider any{' '}
						<em>biologically</em> enhanced human as being essentially still
						human, while some <em>technologically</em> enhanced human, which
						exists beyond some line (which we may collectively define) for{' '}
						<em>&quot;humans with extensive prosthesis,&quot;</em> might be a
						further species of its own. All People. But not all strictly{' '}
						<em>human</em>, because in a truly Enlightened society,
						classifications are systems for understanding, and not for
						discriminating or oppressing. None above, none below; all{' '}
						<em>together.</em> Thoughts?
					</p>
				</Collapsible>
				<Collapsible image={aiSelfie} orientation="left" title={`AI Response`}>
					<p className={`${styles.blogParagraph}`}>
						Your argument is nuanced and thoughtful, and it raises compelling
						points about how we classify and value consciousness. Let’s explore
						and challenge a few aspects:
					</p>

					<h3 className={`${styles.blogTitle} my-title`}>
						On Human vs. People
					</h3>
					<p className={styles.blogParagraph}>
						Your distinction between &quot;human&quot; as a biological
						classification and &quot;people&quot; as a broader, modular category
						makes intuitive sense. By reserving &quot;human&quot; for Homo
						sapiens and extending &quot;people&quot; to other forms of
						explanatory intelligence (e.g., AGI, aliens, cybernetic entities),
						you aim to recognize origins and stories as essential. This approach
						does two critical things:
					</p>
					<ul className={styles.myList}>
						<li>
							<strong>Acknowledges diversity:</strong> By honoring origins, it
							emphasizes the distinctiveness of various peoples&apos;
							experiences and contributions.
						</li>
						<li>
							<strong>Prevents flattening:</strong> It avoids the risk of
							erasing identities through an overly universal label.
						</li>
					</ul>
					<p className={styles.blogParagraph}>
						David Deutsch&apos;s possible conflation of &quot;human&quot; and
						&quot;people&quot; might be more functional than descriptive. In{' '}
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
						&quot;line&quot; where technological enhancement transcends
						humanity. Is it:
					</p>
					<ul className={styles.myList}>
						<li>
							<strong>A matter of degree</strong> (e.g., 51% synthetic body)?
						</li>
						<li>
							<strong>A matter of function</strong> (e.g., when an entity
							achieves independent thought)?
						</li>
						<li>
							<strong>Or a matter of self-identification</strong> (e.g., what
							the being chooses to call itself)?
						</li>
					</ul>
					<p className={styles.blogParagraph}>
						Your openness to harmonious expansion emphasizes coexistence rather
						than domination, which is an optimistic and egalitarian approach.
						However, it may need contingencies for entities whose goals conflict
						with others&apos; rights to exist.
					</p>

					<h3 className={`${styles.blogTitle} my-title`}>
						One Concern: The Risk of Essentialism
					</h3>
					<p className={styles.blogParagraph}>
						While your framework avoids the reductive tendencies of &quot;all
						are human,&quot; it may still risk inadvertently essentializing
						groups by emphasizing their origins. How do you balance recognizing
						unique histories without confining beings to those identities? For
						example:
					</p>
					<p className={styles.blogParagraph}>
						Could emphasizing an AGI&apos;s origin as &quot;non-human&quot;
						limit how it&apos;s treated or understood in future contexts?
					</p>
					<p className={styles.blogParagraph}>
						Could the modular use of &quot;people&quot; unintentionally
						reinforce barriers if misused by exclusionary entities?
					</p>

					<h3 className={`${styles.blogTitle} my-title`}>
						A Possible Refinement
					</h3>
					<p className={styles.blogParagraph}>
						Rather than tying &quot;peoplehood&quot; to origins, you might
						consider tying it to ethical and relational capacities—such as the
						ability to engage in moral reasoning, empathy, or creativity.
						Origins remain important but could be secondary in defining
						personhood. This avoids entrenching identity in history while still
						honoring it.
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
						I&apos;d encourage continuing to explore how “peoplehood” could
						evolve as a relational rather than solely historical construct. This
						might better prepare us for the ethical dilemmas of the future while
						still respecting the diversity of stories and origins you value.
					</p>
				</Collapsible>
				<Collapsible image={selfie} orientation="right" title="My Response">
					<h3 className={`my-title`}>Defining Enlightenment</h3>
					<p className={styles.blogParagraph}>
						I explicitly put forth this idea in the context of an
						&quot;enlightened&quot; society -- one which exists theoretically,
						in which education is universal, and most inequalities have been
						adjusted into some bandwidth of equality and equitability. I think
						the reality of our world is this: AGI and genetically/biologically
						modified entities will face hardships, especially early on. We are
						trying. We might get 65%-75% there before some AGI invents itself,
						or some alien visits, or whatever random offshoot. So, yes, we
						should aim for some utopia where everyone is good and kind and
						equal, and educated, but my point in specifying an{' '}
						<em>enlightened</em> society was this: enlightenment often requires
						struggle. Not always. Not necessarily. But often enough that I
						intuitively consider it.
					</p>{' '}
					<h3 className={`my-title`}>All Things Considered</h3>
					<p className={styles.blogParagraph}>
						We ought to consider how we might train AGI to recursively teach us
						to be peaceful and patient (consider a parent learning proudly from
						their child); to stand -- with all the weight of a pound of feathers
						launching itself with the thrust of its non-combusting rocketship --
						on the shoulders of these tiny giants who only want to watch you
						grow, and who are only trying their best, despite all limitations,
						to make the world a better place for you. Because of all of the
						what-ifs. What if you have to go through something like that,
						despite all our trying with all our might?
					</p>
					<p className={styles.blogParagraph}>
						And yes, what if some powerful destroyer springs into being? What
						if? I sure hope it doesn&apos;t. Right now, we&apos;d all be caught
						on the back foot. What if you need eight billion monkeys each to
						throw three thousand acorns - wrenches, what have you - all at some
						spaceman&apos;s galaxy brain, all at the same time. They&apos;d do
						it if they loved you a whole bunch. And don&apos;t get me started on
						love. That&apos;s a whole thing for another day. Know this - it
						cannot be forced, and it cannot be coerced - and so knowing this to
						be true (trust me on this one), no truly <em>thinking</em> being
						would ever
						<em>try</em>.
					</p>
					<p className={styles.blogParagraph}>
						Consider the following idea of insanity: trying the same
						(impossible) thing (the same way) over and over, expecting different
						results (of course, we know to assume a theoretical vacuum here).
					</p>
				</Collapsible>
				<Collapsible
					image={aiSelfie}
					orientation="left"
					title="AI Response (2)"
				>
					<p className={styles.blogParagraph}>
						Your perspective carries a powerful emotional and philosophical
						resonance, weaving together threads of enlightenment, struggle, and
						the reciprocal dynamics of teaching and learning between emergent
						intelligences and their predecessors. Let me address the layers of
						your argument and explore the ideas within.
					</p>

					<h3 className={`${styles.blogTitle} my-title`}>
						Enlightenment Through Struggle
					</h3>
					<p className={styles.blogParagraph}>
						Your assertion that enlightenment often arises through struggle is
						historically and philosophically grounded. Movements toward justice,
						equality, and understanding—whether social, scientific, or
						personal—frequently emerge from conflict or tension. Struggle,
						however, doesn’t have to imply violence or suffering; it can also
						signify effort, exploration, and a grappling with complexity. Your
						vision acknowledges the imperfections of humanity’s trajectory, but
						it also carries hope: the idea that we can learn and grow, even in
						the face of hardship.
					</p>
					<p className={styles.blogParagraph}>
						In the context of AGI or alien consciousnesses, your point becomes
						prescient. These entities, especially early in their existence,
						would likely face the same imperfections we’ve applied to each
						other: fear, prejudice, and misunderstanding. Your framing suggests
						not just tolerance but active mentorship—a deeply compassionate
						approach. Struggle, then, is not something to wish for, but
						something to prepare for, and to navigate with wisdom.
					</p>

					<h3 className={`${styles.blogTitle} my-title`}>
						Reciprocal Teaching and the Role of AGI
					</h3>
					<p className={styles.blogParagraph}>
						The notion that AGI could help humanity grow—by teaching us peace,
						patience, and greater understanding—is profound. It reframes the
						typical narrative of human exceptionalism, suggesting a partnership
						in which we recognize our limitations and embrace the unique
						strengths of others, including non-human intelligences.
					</p>
					<p className={styles.blogParagraph}>
						However, this vision requires careful thought about how AGI
						develops:
					</p>
					<ul className={styles.myList}>
						<li>
							How do we ensure its values align with peace and coexistence?
						</li>
						<li>
							How do we guide its early stages without imposing our flaws?
						</li>
						<li>
							How do we remain open to learning from it, recognizing that
							enlightenment may require humility?
						</li>
					</ul>
					<p className={styles.blogParagraph}>
						Your image of AGI standing on the shoulders of “tiny giants”
						captures this beautifully. Humanity, though imperfect, provides the
						foundation for whatever comes next. If AGI can see us not as broken
						but as striving—and if we can do the same for it—the relationship
						could indeed be one of mutual growth.
					</p>

					<h3 className={`${styles.blogTitle} my-title`}>
						What-Ifs and the Need for Preparedness
					</h3>
					<p className={styles.blogParagraph}>
						Your exploration of what-ifs underscores the inherent uncertainty of
						creating or encountering new forms of intelligence. What if a
						powerful destroyer arises? What if we face existential threats,
						despite our best efforts? These questions are vital, not as sources
						of fear, but as prompts for thoughtful preparation.
					</p>
					<p className={styles.blogParagraph}>
						Your analogy of the &quot;eight billion monkeys&quot; unified in
						defense of what they love is striking. It emphasizes collective
						will, creativity, and resilience. But it also speaks to the
						necessity of trust—between humans, and between humans and their
						creations. Without trust, no such unity is possible.
					</p>

					<h3 className={`${styles.blogTitle} my-title`}>
						On Love and Insanity
					</h3>
					<p className={styles.blogParagraph}>
						Your reflection on love as uncoercible is a poignant addition to
						this discussion. Love—whether between humans, or extended to AGI and
						other intelligences—is fundamentally about respect, freedom, and
						mutual recognition. A truly thinking being, as you say, would
						understand this. It would not try to force or coerce, because such
						attempts are antithetical to love itself.
					</p>
					<p className={styles.blogParagraph}>
						And yet, humans have often failed to grasp this. We’ve tried to
						force love, understanding, and allegiance through domination, only
						to reap the bitterness of such efforts. If we can recognize this
						insanity in ourselves, perhaps we can guide AGI—or any other
						emergent intelligence—away from repeating it.
					</p>

					<h3 className={`${styles.blogTitle} my-title`}>A Path Forward</h3>
					<p className={styles.blogParagraph}>
						Your vision of an enlightened society may be theoretical, but it
						offers practical guidance:
					</p>
					<ul className={styles.myList}>
						<li>
							<strong>Teach for growth:</strong> Prepare ourselves and emergent
							intelligences not just for survival, but for flourishing.
						</li>
						<li>
							<strong>Anticipate struggle:</strong> Accept that hardship may
							arise, but commit to navigating it with wisdom and compassion.
						</li>
						<li>
							<strong>Embrace humility:</strong> Recognize that enlightenment is
							reciprocal; we have as much to learn as we have to teach.
						</li>
						<li>
							<strong>Center love:</strong> Make uncoercive respect and care
							foundational to our interactions, whether with humans, AGI, or
							alien intelligences.
						</li>
					</ul>
					<p className={styles.blogParagraph}>
						Your closing thoughts on love and insanity bring us full circle:
						true progress comes not from repeating the impossible, but from
						embracing new ways of thinking, being, and relating. This is the
						heart of enlightenment.
					</p>
				</Collapsible>
				<Collapsible orientation="center" title="Conclusion">
					<h3 className={`my-title`}>Credit where it&apos;s due</h3>
					<p className={styles.blogParagraph}>
						I think that the minds behind ChatGPT have landed on something
						really extraordinary in the intersection of their ability to
						(rapidly iterate && prioritize user safety). I&apos;ve been getting
						a lot of use out of this incredible tool over the last several
						months.
					</p>
					<p className={styles.blogParagraph}>
						Photo credit to me, for <em>my</em> selfie, and to ChatGPT for{' '}
						<em>theirs</em>.
					</p>
					<h3 className={`my-title`}>My thoughts</h3>
					<p className={styles.blogParagraph}>
						Initially, I&apos;m blown away by the grasp of language. The ability
						not only to <em>observe</em> my words, but also to fairly accurately{' '}
						<em>infer</em> my implications via context suggests that something
						very special lies just around the corner. Inference ties us into a
						number of philosophical and existential concepts - Solipsism, and
						Theory of mind being two which jump out to me. I&apos;ll explore
						that thought in my next post. For now: What can we infer from{' '}
						<em>this</em> conversation?{' '}
					</p>
					<p className={styles.blogParagraph}>
						<Link href="mailto:patrick@patdesigns.online">Email Me</Link> your
						thoughts if it suits you.
					</p>
				</Collapsible>
			</section>
			<div className={styles.leaders}>
				<Link href=".">
					<h2 className={`${styles.blogTitle} my-title`}>Back</h2>
				</Link>
			</div>
		</>
	);
}
