import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import Work from '../components/Work';
import Contact from '../components/Contact';

import styles from '../styles/Home.module.scss';


function index() {
  
  return (
    <div className={styles.scroller}>
        <Head>
            <title>Home | Patrick Yambrick</title>
        </Head>

        <Lander />
        <Skills />
        <Work />

        <div className="vpheight my-bg-sage">
            <About />
        </div>
        
        <Contact />
    </div>
  );
}

function Lander() {
  return (
    <section id="Home" className={`p-6 vpheight w-screen ${styles.lander}`}>
      <div>
        <h1 className={styles.banner}><span>Patrick</span> Yambrick</h1>
        <p className={`my-text-mustard`}>Developer.</p>
      </div>
    </section>
  )
}


function About() {
  return (
    <section className={`my-text-mustard pt-6 px-6 vpheight ${styles.about}`}>
      <h3 className="font-bold text-center my-title" id="About">About Me</h3>
      <p className="px-12">My name is Patrick! Welcome to my site! 
        Here you will learn a bit about me as a person, 
        and about the things that I enjoy doing. 
        I like to create things: websites, woodworking projects, 
        and a bit of art here and there. 
        I&apos;d like to help you build something, and <Link className="font-bold rounded my-fade-in my-dotted-underline" href="/Contact">I want you to tell me all about it</Link>.</p>
      <p className="px-12 my-text-mustard">I&apos;m a full-stack developer, and I love learning new things.</p>
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
    <section className={`${styles.skills} my-text pt-6 px-12 vpheight`}>
      <h3 className="text-center my-title">Skills</h3>
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