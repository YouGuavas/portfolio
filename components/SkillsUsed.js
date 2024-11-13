import { useContext } from 'react';
import { MyContext } from './Layout';
import styles from '../styles/components/SkillsUsed.module.scss';

export default function SkillsUsed(props) {
	const { theme, setTheme } = useContext(MyContext);

	const skills = props.skills;
	return (
		<ul className={`${styles.skillsUsed} ${theme}`}>
			{skills.map((skill, index) => {
				return (
					<li className={`outline-text`} key={index}>
						{skill}
					</li>
				);
			})}
		</ul>
	);
}
