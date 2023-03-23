import styles from '../styles/skills.module.scss';

import skills from '../data/skills.json';

export default function Skills() {

    return (
        <section id="Skills" className={`${styles.skills} my-background-generic my-text`}>
            <div className="my-overlay">
                <h3 className="text-center my-title padded-title">Skills</h3>
                <ul className="grid rounded grid-cols-2 gap-2 p-6 text-center my-text md:mt-6 mt-2">
                    {skills.map((item) => {
                        return (
                            <a className="col-span-1 p-2" href={item.url} key={item.name}>
                                <li className={`my-text-forest-hover ${styles.listItem}`}>
                                    {item.name}
                                    <caption>
                                        {item.description ? item.description : null}
                                    </caption>
                                </li></a>
                        )
                    })}

                </ul>
            </div>
        </section>
    )
}
