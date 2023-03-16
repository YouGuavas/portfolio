import styles from '../styles/skills.module.scss';

export default function Skills() {
    const skills = [{ name: 'React', url: 'https://reactjs.org/' },
    { name: 'Express', url: 'https://expressjs.com/' }, { name: 'MongoDB', url: 'https://www.mongodb.com/' },
    { name: 'Sass', url: 'https://sass-lang.com/' }, { name: 'Tailwind', url: 'https://tailwindcss.com/' },
    { name: 'Bootstrap', url: 'https://getbootstrap.com/' }, { name: 'Bulma', url: 'https://bulma.io/' },
    { name: 'Nextjs', url: 'https://nextjs.org/' }, { name: 'Typescript', url: 'https://www.typescriptlang.org/' },

    ];

    return (
        <section id="Skills" className={`${styles.skills} my-background-generic my-text`}>
            <div className="my-overlay">
                <h3 className="text-center my-title padded-title">Skills</h3>
                <ul className="grid rounded grid-cols-2 gap-2 p-6 text-center my-text md:mt-6 mt-2">
                    {skills.map((item) => {
                        return (
                            <a className="col-span-1 p-2" href={item.url} key={item.name}><li className={`my-text-forest-hover ${styles.listItem}`}>{item.name}</li></a>
                        )
                    })}

                </ul>
            </div>
        </section>
    )
}
