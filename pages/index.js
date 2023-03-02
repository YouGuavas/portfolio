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
      <Nav links={['Home', 'About', 'Work', 'Skills', 'Contact']}/> {/*'Blog', 'Obsessions' */}

        <Lander />
        <About />

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


function About() {
  return (
    <section id="About" className={`my-bg-sage px-6 vpwidth ${styles.about}`}>
      <h3 className="font-bold text-center my-title" id="About">About Me</h3>
      <p className="px-12">Hi, my name is Patrick! Welcome to my site!</p>
        <p className="px-12"> 
        I enjoy creating things: websites, woodworking projects, 
        and a bit of art here and there. I am most passionate about building things with code.
        More specifically, I love to create things for the web. 
        As a child, I always fantasized about building
        robots and things, so you can imagine my joy in finally discovering and diving into
        python just after high school. I dabbled in that for a while, then forgot about it
        while I explored the world around me. Some years later, I returned to python, 
        and from there began to consider coding as a career. That's how I discovered
        HTML, CSS, and Javascript. I thought they'd be an easy way to get my feet wet 
        in the world of programming for pay, and I never could have foreseen 
        the joy and fun they would bring. Now I do my best to write some piece of code
        for a web project every day, and I am always looking to learn new tricks
        while doing so. I aspire to be the best developer I am capable of being!
        </p>
        <p className="px-12">
        I&apos;d like to help you build something, and <Link className="font-bold rounded my-fade-in my-dotted-underline" href="/Contact">I want you to tell me all about it</Link>.</p>
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