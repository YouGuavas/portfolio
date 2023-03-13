import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Nav from '../components/Nav';
import Work from '../components/Work';
import Contact from '../components/Contact';
import projects from '../projects.json';
import logo from '../public/images/logo.png';
import styles from '../styles/Home.module.scss';


function index() {
  
  return (
    <div >
        <Head>
            <title>Home | Patrick Yambrick</title>
        </Head>
        <Link name="Logo Home" href="#Home" scroll={false}>
        <Image alt="My personal logo" className="my-logo" height={96} width={96} src={logo.src} />
      </Link>

        <Lander />

        <Work projects={projects}/>
        <Skills />

        <Contact />
    </div>
  );
}

function Lander() {
  return (
    <section id="Home" className={`p-6 vpheight ${styles.lander}`}>
      <div>
        <h1 className={styles.banner}><span>Patrick</span> Yambrick</h1>
        <p className={`my-text-mustard`}>Developer.</p>
      </div>
    </section>
  )
}




function Skills() {
  const skills = [{name: 'React', url: 'https://reactjs.org/'}, 
    {name: 'Express', url: 'https://expressjs.com/'}, {name: 'MongoDB', url: 'https://www.mongodb.com/'},
    {name: 'Sass', url: 'https://sass-lang.com/'}, {name: 'Tailwind', url: 'https://tailwindcss.com/'}, 
    {name: 'Bootstrap', url: 'https://getbootstrap.com/'}, {name: 'Bulma', url: 'https://bulma.io/'},
    {name: 'Nextjs', url: 'https://nextjs.org/'}, {name: 'Typescript', url: 'https://www.typescriptlang.org/'},

  ];
  return(
    <section id="Skills" className={`${styles.skills} my-text vpwidth vpheight`}>
      <h3 className="text-center my-title padded-title">Skills</h3>
      <ul className="grid rounded grid-cols-2 gap-2 p-6 text-center my-text md:mt-6 mt-2">
        {skills.map((item) => {
          return (
            <a className="col-span-1 p-2" href={item.url} key={item.name}><li className={`my-text-forest-hover ${styles.listItem}`}>{item.name}</li></a>
          )
        })}
        
      </ul>
    </section>
  )
}


export default index;