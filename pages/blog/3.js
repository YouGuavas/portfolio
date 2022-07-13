import BlogPost from '../../components/BlogPost';
import BlogImage from '../../components/BlogImage';
import TableOfContents from '../../components/TableOfContents';
import styles from '../../styles/Blog.module.scss';
import Link from 'next/link';
import Head from 'next/head';

export default function () {
    const sections = [
        'Struggling With Styles',
        'Struggling With Structure',
        'Nasty Navigation',
        'Hosting Horrors'
    ]
    return (
    <BlogPost title="Struggles With Converting">
        <Head>
            <title>Struggles With Converting | Patrick Yambrick</title>
        </Head>
        <section className={styles.blogPostContainer}>
            <h1 className="my-title" id="Struggling to Convert">
                Struggling to Convert
            </h1>
            <ByLine by="Patrick Yambrick" date="Wednesday, July 13, 2022"/>
            <div className={styles.blogBody}>
                <p className={styles.blogParagraph}>
                    In <Link href="/Blog/2"><a className={styles.paragraphLink}>my previous post</a></Link>, I detailed
                    my process for converting from create-react-app to nextjs. Here, I will cover some of the struggles I 
                    faced -- and overcame -- while doing so.
                </p>
                <TableOfContents sections={sections} />
                <h2 className={`${styles.blogTitle} my-title`} id="Struggling With Styles">Struggling With Styles</h2>
                <p className={styles.blogParagraph}>
                    While working in development, everything was smooth and beautiful, 
                    so I grew excited and rushed to deploy. After doing so, I came across my first frustrating bug:
                    upon deploying to firebase, I discovered that my styling was all wrong! My unordered lists looked like
                    something out of 1993 -- completely unstyled -- and everything else was stretched and skewed in a displeasing way.
                    I was immediately frustrated, and chose not to give up. Instead, I decided to do some (read: "a lot of") digging.
                </p>
                <p className={styles.blogParagraph}>
                    In this case, the most useful step in solving my problem turned out to be <em>diagnosing</em> my problem.
                    After some digging (and only a moderate amount of head-banging), I determined that the source of my woes
                    was that my Tailwind styles weren't applying. Everything I'd customized was working fine, but Tailwind was
                    doing its best to give me a headache. 
                </p>
                <p className={styles.blogParagraph}>
                    Ultimately, thanks to a fair bit of Googling, I determined that the source of my problems lay in my Tailwind config.
                    All I had to do was change my Tailwind config exports' purge line to this:
                    <BlogImage src="https://lh3.googleusercontent.com/pw/AM-JKLVTkAjtFnkPlAJqRzfkxIARc0ULvm_lsweIkvjx4-HNoLTpXnpUCw5IoXpxHan5GTpQxeLTJS48hRy6tU_7rC9vogww8Jnt0Ex1rd44hq4bD7UndRV0gYbop8L6eaoeIqR0NEU0bBYZXm58lhYdaFY=w602-h78-no?authuser=0" />
                    And poof! Onto the Next task with a strong Tailwind at my back.
                </p>
                <h2 className={`${styles.blogTitle} my-title`} id="Struggling With Structure">Struggling With Structure</h2>
                <p className={styles.blogParagraph}>
                    This was more of a minor concern, but it still tripped me up a bit at first. I had grown so used to structuring files in
                    the way I'd developed while learning with create-react-app that acclimating to nextjs' file structure presented some challenges.
                    I felt that this was something of an 'acquired taste' scenario; after using next for a while, I sort of got used to things.
                    That means that if you're in a similar spot to the one I found myself in with this one -- and feeling a little overhwelmed with the change --, 
                    there's hope! Give yourself permission to mess up a couple of times, and you'll find your own way through it.
                </p>
                <h2 className={`${styles.blogTitle} my-title`} id="Nasty Navigation">Nasty Navigation</h2>
                <p className={styles.blogParagraph}>
                    Page navigation is much simpler in nextjs than it is with create-react-app, but that doesn't mean it comes entirely without its own challenges!

                </p>
                <h2 className={`${styles.blogTitle} my-title`} id="Hosting Horrors">Hosting Horrors</h2>
                <p className={styles.blogParagraph}>
                    Hosting Horrors
                </p>
            </div>
        </section>
    </BlogPost>
    )
}

const ByLine = (props) => {
    return (
        <div>
            <p className={styles.byLine}>By: {props.by}</p>
            <p className={styles.byLine}>Published on: {props.date}</p>
        </div>
    )
}