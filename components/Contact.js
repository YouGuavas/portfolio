import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Home.module.scss';
import { useContext } from 'react';
import { MyContext } from './Layout';

const Contact = (props) => {
	const { theme, setTheme } = useContext(MyContext);

	return (
		<section className={`${styles.contact} ${theme}`}>
			<div className={`very-rotate alt-wrapper`}>
				<h2
					className={`${styles.iconTitle} font-bold md:px-4 px-3 my-title`}
					id="Contact"
				>
					Contact Patrick
				</h2>
				<p>
					Thank you for your interest in my web development services. If you
					have any questions, inquiries, or would like to discuss a potential
					project, please feel free to get in touch with me. I&apos;m always
					excited to collaborate and create outstanding web experiences.
				</p>
				<ul>
					<li className={`${styles.icon}`}>
						<Link href="mailto:patrick@patdesigns.online">
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
	);
};
export default Contact;
