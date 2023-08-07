import Link from 'next/link'
import styles from '../styles/Home.module.scss'

export default function About() {
    return (
        <section id="About" className={`${styles.about}`}>
            <div className={`alt-rotate alt-wrapper`}>
                <h2 className="font-bold md:px-4 px-3 my-title" id="About">
                    About Patrick
                </h2>
                <p className="md:px-4 px-3">
                    Hi, my name is Patrick! Welcome to my site!
                </p>
                <p className="md:px-4 px-3">
                    I enjoy creating things: websites, woodworking projects, and
                    a bit of art here and there. I am most passionate about
                    building things with code. More specifically, I love to
                    create things for the web. As a child, I always fantasized
                    about building robots and things, so you can imagine my joy
                    in finally discovering and diving into python just after
                    high school. I dabbled in that for a while, then forgot
                    about it while I explored the world around me. Some years
                    later, I returned to python, and from there began to
                    consider coding as a career. That&apos;s how I discovered
                    HTML, CSS, and Javascript. I thought they&apos;d be an easy
                    way to get my feet wet in the world of programming for pay,
                    and I never could have foreseen the joy and fun they would
                    bring. Now I do my best to write some piece of code for a
                    web project every day, and I am always looking to learn new
                    tricks while doing so. I aspire to be the best developer I
                    am capable of being!
                </p>
                <p className="md:px-4 px-3">
                    I&apos;d like to help you build something, and{' '}
                    <Link
                        className="font-bold rounded my-fade-in my-underline"
                        href="/contact"
                    >
                        I want you to tell me all about it
                    </Link>
                    .
                </p>
            </div>
        </section>
    )
}
