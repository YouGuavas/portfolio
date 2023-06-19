import styles from '../styles/SkillsUsed.module.scss'
export default function SkillsUsed(props) {
    const skills = props.skills
    return (
        <ul className={`${styles.skillsUsed}`}>
            {skills.map((skill, index) => {
                return <li key={index}>{skill}</li>
            })}
        </ul>
    )
}
