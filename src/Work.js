export default function Work() {
  const projects = {
    lavilla: {
      title: "La Villa Website Redesign",
      description: "A redesign of a local restaurant's website",
      github: "https://github.com/YouGuavas/lavilla",
      live: "https://lavilla-123.web.app/",
      src: "https://lh3.googleusercontent.com/pw/AM-JKLXnSElJlJyU7XGPr7i1Rd2-yMJmjVRVSwn9KYwZh0lSD2PVWsWYDkrBRHmcYEdoCTJadkgWc7eJ6RxR3QOAyIgf0zVaFEiCF_1UfGHlWBGjqiLuRcXOFIvXsRPZ9Sy37FeOcQNaPcFj7bBwHCRH4VwD=w250-h134-no?authuser=0"
    },
    portfolio: {
      title: "This Portfolio Website",
      description: "I made this portfolio using React & Tailwind. View the code here:",
      github:"https://github.com/YouGuavas/portfolio",
      src: "https://lh3.googleusercontent.com/pw/AM-JKLX_ykqxhy-NMI71Lgxj44T2eRlWvvTO5uM85YjPtlHt4uQMlxGDz0458C7MQwtWsyXHhjyesz6K8Ii1H5J50YGWN7A9VWmglGKVLWRyceEPfIaAMNnQl3ZxBAjrkrM8BqA6zF7cLi4mCrNUaC9nl_zC=w250-h142-no?authuser=0"
    }
  }
  return (
    <div className="h-full my-forest-bg p-6 text-center">
      <section className="my-text font-body">
        <p className="font-bold">Personal Projects</p>
        <p>These are projects I have done to further my own learning, comprehension, and growth.</p>
        <div className="grid grid-cols-3 gap-2 py-6">
          {Object.keys(projects).map((item) => { 
            const project = projects[item];
            return <Card project={project} />
          }
          )}
        </div>
      </section>
    </div>
  )
}

function Card(props) {
  return(
  <div className="md:col-span-1 col-span-3 p-6 h-100 my-forest-bg border-2 border-sage rounded grid grid-cols-2 place-items-center text-center">
    <p className="col-span-2 py-2">{props.project.title}</p>
    <div className="col-span-2 p-2 my-sage-bg">
      <img height="134" width="250" alt="Screenshot of project page" src={props.project.src} />
    </div>
    <p className="col-span-2 py-2">{props.project.description}</p>
    {props.project.live ? <a href={props.project.live} target="_blank" rel="noopener" className="col-span-2 font-semibold w-full border rounded p-2 my-2 my-btn">View it live</a> : null}
    {props.project.github ? <a href={props.project.github} target="_blank" rel="noopener" className="col-span-2 w-full font-semibold border rounded p-2 my-2 my-btn">View it on github</a> : null }
  </div>
  )
}