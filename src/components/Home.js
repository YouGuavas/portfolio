export default function Home() {
  return (
    <div>
      <section className="p-6 h-screen my-forest-bg grid md:grid-cols-3 grid-cols-4 grid-rows-3">
        <div className="font-body p-5 row-start-2 row-span-1 md:col-start-2 md:col-span-1 
        col-start-1 col-span-4 animate-ping-3 grid place-items-center text-center 
        my-sage-bg my-text-forest rounded-lg border-2 border-mustard shadow-lg">
          <p className="my-text-forest">Hi, I'm Patrick 👋</p>
          <p className="my-text-forest">I'm a full-stack developer, and I love learning new things.</p>
        </div>
      </section>
      <div className="h-screen my-sage-bg">
        <About />
        <Skills />
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="my-text-forest pt-6 px-6">
      <h3 className="font-bold text-center">About Me</h3>
      <p className="px-12">My name is Patrick! Welcome to my site! 
        Here you will learn a bit about me as a person, 
        and about the things that I enjoy doing. 
        I like to create things: websites, woodworking projects, 
        and a bit of art here and there. 
        <a className="font-bold my-mustard-hover rounded" href="/contact%20me"> Contact me </a> 
        if you think you'd like me to create something for you. 
        Feel free to tell me a bit about it, and about yourself!</p>
    </section>
  )
}


function Skills() {
  const skills = [{name: 'React', url: 'https://reactjs.org/'}, 
    {name: 'Express', url: 'https://expressjs.com/'}, {name: 'MongoDB', url: 'https://www.mongodb.com/'},
    {name: 'Sass', url: 'https://sass-lang.com/'}, {name: 'Tailwind', url: 'https://tailwindcss.com/'}, 
    {name: 'Bootstrap', url: 'https://getbootstrap.com/'}, {name: 'Bulma', url: 'https://bulma.io/'}
  ];
  return(
    <section className="my-text-forest pt-6 px-12">
      <h3 className="font-bold text-center">Skills</h3>
      <ul className="grid grid-cols-2 gap-2 p-6 text-center border-2 border-forest md:mt-6 mt-2">
        {skills.map((item, index) => {
          return (
            <li key={index} className="md:col-span-1 col-span-2"><a className="p-2 font-semibold my-mustard-hover rounded" href={item.url}>{item.name}</a></li>
          )
        })}
        
      </ul>
    </section>
  )
}