import styles from '../../styles/blog.module.scss';
import ByLine from '@/components/ByLine';
export default function blog() {
	return (
		<>
			<section className={styles.blogBody}>
				<div className={`${styles.titleContainer}`}>
					<h1 className="my-title" id="1">
						Thoughts on the Israel-Hamas Conflict
					</h1>
					<ByLine by="Patrick Yambrick" date="November 9, 2024" />
				</div>
				<h2 className={`${styles.blogTitle} my-title`}>A Monke's Parable</h2>
				<p className={styles.blogParagraph}>
					Monke finds himself taking a walk, when he stumbles upon two brothers,
					squabbling over lines they had each drawn in the sand. Both believing
					theirs to be best, each brother held strong in his stance, roaring
					like the two mightiest lions this land had ever seen.
				</p>
				<p className={styles.blogParagraph}>
					So mighty were their roars -- heard across land and sea -- that they
					didn't hear Monke the first two times he tried to grab their
					attention. Finally, the Monke mustered up a mighty shout of his own,
					cutting through to both lions' ears: "Brothers, can you hear me now?
					Take a look around you, and tell me what you see?" The two mighty
					brothers stop for just long enough to listen, and what do they see
					behind them? Both brothers' wives, and all their neighbors, and
					families had died. Where once stood a great symbol of light and peace,
					and wisdom, now flowed <em>two</em> seas of babies' blood.
				</p>
				<p className={styles.blogParagraph}>
					These two brothers were unwilling to pause and breathe for long enough
					to think about what they might be losing in the midst of all their
					shouting. Holy land is <em>no</em> place for <em>innocent</em> blood
					to be spilt. I understand how the world works -- people are going to
					have their quarrels; sometimes they're even warranted -- but consider
					this: can you think of a better comeback story than two of the
					mightiest, wisest, and oldest brothers in the world finding a way to
					spring unexpected unity up from holy land? Sometimes, both brothers
					are stressed out, and need to take a breather. This monkey thinks the
					women and children who look to them as heroes <em>really</em> need
					some heroes right now. Look around you. They're begging you to listen.
				</p>
				<p className={styles.blogParagraph}>
					If I'm stressed out, I know <em>everyone</em> over there is. Maybe
					even especially the folks at the top. But the thing is, those folks
					are the ones who have the power to <em>act</em> on behalf of the folks
					whose voices are drowned out. I see people on both sides{' '}
					<em>wanting</em> to do what's right, only losing sight of where{' '}
					<em>they</em> might draw their <em>own</em> lines in the sand.
				</p>
			</section>
			<section className={styles.considerations}>
				<h2 className={`${styles.blogTitle} my-title`}>
					Consider these options
				</h2>
				<ul>
					<li>
						Maybe both sides have to <em>think</em> about "What if I{' '}
						<em>could</em> exist peacefully alongside these people? What might
						that look like to me?" What might be some small steps I'd be willing
						to <em>think</em> about taking toward that?
					</li>
					<li>
						What are your thoughts on an initial period of firm ceasefire on
						both sides, with a plan to move forward in small doses, little
						chats, you know? Something, something, something: Track II
						Diplomacy. Consider polling or talking to the people "beneath" you.
						See what <em>they</em> think? They're the ones dying. You can pick
						them up. We all have it within us to be warriors of spirit. During
						this period of ceasefire, if leaders on both sides <em>do</em> honor
						their agreements -- as <em>all</em> honorable and respectable humans
						do -- they may even find themselves accidentally inventing their own
						solutions, instead of pulling off each other's Band-Aids. How long
						might you be willing to trust the other side for, even if only{' '}
						<em>very</em> tentatively?
					</li>
					<li>
						<em>Think</em> about exchanging the hostages? To me, that's obvious,
						but I'm no world leader. You guys can figure out the math behind why
						1 =/= 1.
					</li>
					<li>
						I feel like a two-state solution allows leaders on both sides an
						easier path to just being like "Hey, dude, let's chill out for a
						minute." Consider how we treat those we respect and view as equals,
						vs how we often find ourselves treating those below us on the totem
						pole without having intended to do so. These two groups are so far
						apart right now -- I think they might be able to unite one day, if
						they wish, but that seems like it has to come by way of many small
						steps. Big leaps are scary, and when humans are afraid, we often
						find ourselves acting just a <em>little</em> like monkeys. But
						that's just me. Think about it?
					</li>
					<li>
						Personal opinion here: all sides of <em>any</em> conflict should do
						their best to avoid involving hospitals and schools in military
						operations <em>at all</em>. Yeah, <em>maybe</em> the other guy will
						put all of his women and children at risk, or maybe he'll think to
						say something like: "I love you, you'll be safe here -- Daddy's got
						to go do something <em>really</em> hard, but it'll be a whole lot
						easier knowing that <em>if</em> I make it back, I <em>know</em>{' '}
						you'll be here." Maybe that's not the "tough" approach we're all
						expecting. Here's what it is: a line drawn in the sand by humans who
						thought about their families <em>first</em>. I've learned many times
						throughout my life that when yelling like a lion doesn't work,
						breathing deep and thinking about the fact that we're all feeling a
						lot of the same things right now often does.
					</li>
				</ul>
			</section>
		</>
	);
}
