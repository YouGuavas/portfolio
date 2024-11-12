import styles from '../../styles/blog.module.scss';
import ByLine from '@/components/ByLine';
import Link from 'next/link';
export default function blog() {
	return (
		<>
			<section className={styles.blogBody}>
				<Link className={`back-link`} href="israel-hamas-conflict">
					Back
				</Link>

				<div className={`${styles.titleContainer}`}>
					<h1 className="my-title" id="1">
						A Letter To Leader Sinwar
					</h1>
					<ByLine by="Patrick Yambrick" date="November 11, 2024" />
				</div>
				<h2 className={`${styles.blogTitle} my-title`}>
					To Leader Sinwar — with highest respect,
				</h2>
				<p className={styles.blogParagraph}>
					Though I&apos;m certain you view me as no brother, I view you as a
					brother in spirit. I have lived a soft and cushioned life by
					comparison to <em>any</em> of your people. I know this. Still, I am
					certain that I can see your spirit, and it burns within me, too. You
					are a mighty lion who built himself from his own pain and anguish to
					protect his people from those very things. I liken lions like you to
					ancient tales of Atlas — mighty men who <em>carry</em> their
					people&apos;s futures upon their strong backs.
				</p>
				<p className={styles.blogParagraph}>
					When his people&apos;s roaring goes unheard for long enough, even the
					most peaceful lion may think to pick up arms. You do as you must to
					free Palestine. I see this. I know this. I am committed to that cause
					with you. One of my most respected friends is a very bright,
					intellectual Palestinian man who has been articulating your cause in
					his own way, so that your roaring would not fall upon deaf, Western
					ears. <em>All</em> Palestinian people deserve the freedom and the
					right to speak and to fight with that white-hot intensity that burns
					in your belly — I see you: shield turned sword. I envy that fire; mine
					is only a dull burn by comparison.
				</p>
				<p className={styles.blogParagraph}>
					I do not envy the pain that you and your people have had to endure,
					nor the pieces of yourselves that you&apos;ve felt forced to cut away.
					After all that I&apos;ve witnessed you <em>all</em> endure, I know
					better than to ask any Palestinian to bow. Instead, I bow to you. Your
					people deserve the same peace that I&apos;ve been blessed with. You,
					Leader, have a chance to take the mightiest step <em>forward</em>, and
					become Lion <em>and</em> Shield once more. Picture your legacy written
					across <em>all</em> of time and space, woven into the songs sung to
					future Palestinian babies by their mothers: of the Lion with a roar so
					great, he shouted down <em>every</em> missile aimed at his people.
				</p>
				<p className={styles.blogParagraph}>
					I&apos;ll never ask you to take a leap of faith — only one Mighty step
					— to a table with your enemy, and from the chaos and righteous rage
					that burns within you on behalf of those Palestinians whose bodies
					have paved your path, to dig <em>even</em> deeper, and to find within
					yourself the King of all the Lions — the Shield in any storm, and the
					ship in any sea. Turn that loss into a golden crown, and let it gleam
					in the sun — a beacon of Palestinian pride.
				</p>
				<p className={styles.blogParagraph}>
					Never bow your head, Leader Sinwar. And never stop shouting —
					someone&apos;s gotta fuckin&apos; do it. Only raise it higher, and
					consider how you might find a way to shout in the ear of the sun
					itself if it were threatening your people. And then, consider what you
					might do if the sun listened. Would you continue shouting? Or would
					you turn to your people and ask them — what do they need from you
					next?
				</p>
				<p className={styles.blogParagraph}>
					The whole world has heard your shouts of rage, deserved and true. I
					hear your people shouting sincerity. Will you break their shackles —
					and your own — and be their roar of peace, Lion Sinwar?
				</p>
				<div className={`${styles.closing}`}>
					<p>Sincerely,</p>
					<p>
						A <em>very</em> lucky monkey with a stick.
					</p>
				</div>
			</section>
		</>
	);
}
