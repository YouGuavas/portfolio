import styles from '../styles/TableOfContents.module.scss';

export default function TableOfContents(props) {
    return (
        <ol className={styles.tableOfContents}>
            {props.sections.map((section, index) => {
                return (
                <a key={index} href={`#${section}`}>
                    <li >
                        {section}
                    </li>
                </a>
                )
            })}
        </ol>
    )
}