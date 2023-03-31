import styles from '../styles/skills.module.scss';

import skills from '../data/skills.json';

export default function Skills() {

    return (
        <section id="Skills" className={`${styles.skills} my-background-generic my-text`}>
            <div className="my-overlay">
                <h3 className="text-center my-title padded-title">Skills</h3>
                <ul className="rounded gap-4 p-6 text-center my-text md:mt-6 mt-2">
                    {skills.map((item) => {
                        return (
                            <li key={item.name} className={`my-text-forest-hover ${styles.listItem}`}>
                                <a className="my-4" href={item.url}>
                                    {item.name}
                                </a>
                                <caption>
                                    {item.description ? item.description : null}
                                </caption>
                            </li>
                        )
                    })}

                </ul>
            </div>
        </section>
    )
}
