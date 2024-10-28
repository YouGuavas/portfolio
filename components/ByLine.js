import styles from '../styles/blog.module.scss';

export default function ByLine(props) {
	return (
		<div className={`${styles.byLineContainer}`}>
			<p className={styles.byLine}>By: {props.by}</p>
			<p className={styles.byLine}>Published on: {props.date}</p>
		</div>
	);
}
