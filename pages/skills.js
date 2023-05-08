import { useEffect } from 'react';
import styles from '../styles/skills.module.scss';
import { create } from '../utils/_functions';

import skills from '../data/skills.json';

export default function Skills() {
    const create = (elementType) => {
        if (typeof document !== 'undefined') {
            const newElement = document.createElement(elementType);
            return newElement;
        }
        return;
    }
    useEffect(() => {
        if (typeof document !== null) {
            skills.map((item) => {
                const container = document.getElementById(item.name + '-id');
                const newCaption = create('caption');
            }
            )
        }
    }, [])
    return (
        <main id="Skills" className={`${styles.skills} my-background-generic my-text`}>
            <section className="my-overlay">
                <h3 className="text-center my-title padded-title">Skills</h3>
                <ul className="rounded gap-4 p-6 text-center my-text md:mt-6 mt-2">
                    {skills.map((item) => {
                        return (
                            <li id={item.name + '-id'} key={item.name} className={`my-text-forest-hover ${styles.listItem}`}>
                                <a className="my-4" href={item.url}>
                                    {item.name}
                                </a>

                            </li>
                        )
                    })}

                </ul>
            </section>
        </main>
    )
}
