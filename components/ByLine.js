import styles from '../styles/blog.module.scss';
import { useContext } from 'react';
import { MyContext } from './Layout';
const Disclaimer = function () {
	return (
		<p className={styles.blogParagraph}>
			<strong>Disclaimer:</strong> I am not a medical professional, and I do not
			condone any illegal activities. My intent with this series is to spread
			awareness of the science behind psilocybin, especially as it pertains to
			safe use and the treatment of mental illnesses, such as depression.
			Further, as a matter of personal philosophy, grounded in understanding the
			brain: I do not advise the use of any substance for users under age 25, or
			who have predispositions to severe mental illness, regardless of legality.
		</p>
	);
};
const ByLine = function (props) {
	const { theme, setTheme } = useContext(MyContext);

	return (
		<div className={`${styles.byLineContainer} ${theme}`}>
			<p className={styles.byLine}>By: {props.by}</p>
			<p className={styles.byLine}>Published on: {props.date}</p>
		</div>
	);
};

export { ByLine, Disclaimer };
