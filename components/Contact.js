import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Home.module.scss'

const Contact = props => {
    return (
        <section className={`${styles.contact}`}>
            <div className={`very-rotate main-wrapper`}>
                <h2
                    className={`${styles.iconTitle} font-bold md:px-4 px-3 my-title`}
                    id="Contact"
                >
                    Contact Patrick
                </h2>
                <p>
                    Thank you for your interest in my web development services.
                    If you have any questions, inquiries, or would like to
                    discuss a potential project, please feel free to get in
                    touch with me. I&apos;m always excited to collaborate and
                    create outstanding web experiences.
                </p>
                <ul>
                    <li className={`${styles.icon}`}>
                        <Link href="mailto:patrickyambrick@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </Link>
                    </li>
                    <li className={`${styles.icon}`}>
                        <Link href="/contact">
                            <FontAwesomeIcon icon={faPhone} />
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default Contact
