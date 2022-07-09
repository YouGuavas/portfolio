import Head from 'next/head';
import React from 'react';


function index() {
  
  return (
    <div>
        <Head>
            <title>Home | Patrick Yambrick</title>         
        </Head>
        <section className="p-6 h-screen grid md:grid-cols-3 grid-cols-4 grid-rows-3 my-bg-sage">
            <div className="font-body p-5 row-start-2 row-span-1 md:col-start-2 md:col-span-1 
            col-start-1 col-span-4 animate-ping-3 grid place-items-center text-center 
            my-bg-forest my-text rounded-lg shadow-lg">
              <p className="my-text">Hi, I'm Patrick 👋</p>
              <p className="my-text">I'm a full-stack developer, and I love learning new things.</p>
            </div>
        </section>
        <div className="h-screen my-bg-forest">
            <About />
            <Skills />
        </div>
    </div>
  );
}

function About() {
  return (
    <section className="my-text pt-6 px-6">
      <h3 className="font-bold text-center my-title">About Me</h3>
      <p className="px-12">My name is Patrick! Welcome to my site! 
        Here you will learn a bit about me as a person, 
        and about the things that I enjoy doing. 
        I like to create things: websites, woodworking projects, 
        and a bit of art here and there. 
        I'd like to help you build something, and <a className="font-bold rounded my-fade-in my-dotted-underline" href="/Contact">I want you to tell me all about it</a>.</p>
    </section>
  )
}


function Skills() {
  const skills = [{name: 'React', url: 'https://reactjs.org/'}, 
    {name: 'Express', url: 'https://expressjs.com/'}, {name: 'MongoDB', url: 'https://www.mongodb.com/'},
    {name: 'Sass', url: 'https://sass-lang.com/'}, {name: 'Tailwind', url: 'https://tailwindcss.com/'}, 
    {name: 'Bootstrap', url: 'https://getbootstrap.com/'}, {name: 'Bulma', url: 'https://bulma.io/'},
    {name: 'Nextjs', url: 'https://nextjs.org/'},

  ];
  return(
    <section className="my-text pt-6 px-12">
      <h3 className="font-bold text-center my-title">Skills</h3>
      <ul className="grid rounded grid-cols-2 gap-2 p-6 text-center my-bg-sage my-text-forest md:mt-6 mt-2">
        {skills.map((item, index) => {
          return (
            <li key={index} className="md:col-span-1 col-span-2"><a className="p-2 font-semibold my-bg-mustard-hover my-text-forest-hover rounded" href={item.url}>{item.name}</a></li>
          )
        })}
        
      </ul>
    </section>
  )
}


export default index;