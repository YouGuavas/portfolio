import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import projects from '../projects.json';


import styles from '../styles/work.module.scss';

export default function Work() {
  return (
    <div>
      <Head>
        <title>Work | Patrick Yambrick</title>
      </Head>
      <section id="Work" className={`${styles.work} my-background-generic text-center my-text-mustard`}>
        <div className="my-overlay">
          <h1 className="my-title disappear-md">Personal Projects</h1>
          <p className="disappear-md">These are projects I have done to further my own learning, comprehension, and growth.</p>
          <div className="grid grid-cols-3 gap-2 py-6">
            {projects.map((item, index) => {
              const project = item;
              return <Card key={index} project={project} />
            }
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

function Card(props) {
  return (
    <div className={`${styles.card}`}>
      <div style={{ 'backgroundImage': `url(${props.project.src1})` }} className={styles.backgroundImageContainer}>

      </div>

      <div className={`${styles.contentContainer} my-text-mustard grid grid-cols-2 place-items-center text-center`}>
        <h4 className="col-span-2">{props.project.title}</h4>
        <div className={`col-span-2 ${styles.projectDescription}`}>
          <p>{props.project.description}</p>
        </div>
        <p className={`col-span-2`}>View {props.project.live ? "it" : "the code"} here:</p>
        {props.project.live ? <Link name={`Live link to ${props.project.title}`} href={props.project.live} target="_blank" rel="noreferrer" className="col-span-2 my-btn">View it live</Link> : null}
        {props.project.github ? <Link name={`Github link to ${props.project.title}`} href={props.project.github} target="_blank" rel="noreferrer" className="col-span-2 my-btn">View it on github</Link> : null}
      </div>
    </div>
  )
}