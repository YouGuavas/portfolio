export default function Home() {
  return (
    <div>
      <div className="p-6 h-screen my-forest-bg grid md:grid-cols-3 grid-cols-4 grid-rows-3">
        <div className="font-body p-5 row-start-2 row-span-1 md:col-start-2 md:col-span-1 
        col-start-1 col-span-4 animate-ping-3 grid place-items-center text-center 
        my-sage-bg my-text-forest rounded-lg border-2 border-mustard shadow-lg">
          <p className="my-text-forest">Hi, I'm Patrick 👋</p>
          <p className="my-text-forest">I'm a full-stack developer, and I love learning new things.</p>
        </div>
      </div>
      <div className="h-screen my-sage-bg">
        <Skills />
      </div>
      </div>
  );
}

function Skills() {
  const skills = [{name: 'React', url: 'https://reactjs.org/'}, 
    {name: 'Express', url: ''}, {name: 'MongoDB', url: ''},
    {name: 'Sass', url: ''}, {name: 'Tailwind', url: ''}, 
    {name: 'Bootstrap', url: ''}, {name: 'Bulma', url: ''}
  ];
  return(
    <div className="my-text-forest p-6">
      <h3 className="font-bold text-center">Skills</h3>
      <ul className="grid grid-cols-2 gap-2 p-6 text-center border-2 border-forest md:mt-6 mt-2">
        {skills.map((item, index) => {
          return (
            <li key={index} className="md:col-span-1 col-span-2"><a className="p-2 font-semibold my-mustard-hover" href={item.url}>{item.name}</a></li>
          )
        })}
        
      </ul>
    </div>
  )
}