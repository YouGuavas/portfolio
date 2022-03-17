export default function Work() {
  const projects = {
    lavilla: {
      title: "La Villa Website Redesign",
      description: "A redesign of a local restaurant's website. I built this project using React & Tailwind.",
      github: "https://github.com/YouGuavas/lavilla",
      live: "https://lavilla-123.web.app/",
      src: "https://lh3.googleusercontent.com/pw/AM-JKLXnSElJlJyU7XGPr7i1Rd2-yMJmjVRVSwn9KYwZh0lSD2PVWsWYDkrBRHmcYEdoCTJadkgWc7eJ6RxR3QOAyIgf0zVaFEiCF_1UfGHlWBGjqiLuRcXOFIvXsRPZ9Sy37FeOcQNaPcFj7bBwHCRH4VwD=w250-h134-no?authuser=0"
    },
    portfolio: {
      title: "This Portfolio Website",
      description: "A portfolio site I made to display my work. I made this portfolio using React & Tailwind.",
      github:"https://github.com/YouGuavas/portfolio",
      src: "https://lh3.googleusercontent.com/pw/AM-JKLW-F4BRK6Y97vQM1NeFYFf0iCEF9Nn1w50tHOLhG2XW7ObCZuUQLIOwZu6uZk1RE0PIQo53nfEIvYNZ4-2Ryuveb6iVKsj3tXxyiprLIOT-5Wb-ST2jGYQ0oGhTvQfRxM1KCBl09j6CrkFZM0cUtKPZ=w500-h287-no?authuser=0"
    },
    pokemon: {
      title: "Pokemon Collection Tracker",
      description: "A tool for keeping track of your Pokemon cards collection. I made this project using React, Sass, Mongodb, and Express.",
      github: "https://github.com/YouGuavas/pokemon-tracker",
      live: "https://pokemon-collection-tracker.herokuapp.com/",
      src: "https://lh3.googleusercontent.com/pw/AM-JKLVglu0wIYmnxolOpFBAy0T5Y4mw_nm-95AvDYCXM94Pr5vkTKu8DluYF1g0gB_agQEVy17i21LwUTS-65kke8ZXDyIWQH0UmNLKwpzK7MI_5RNjwgGY8zYQI0VT4pk5-ThVRl6wrkH_RN55GYdoBvid=w500-h285-no?authuser=0"
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
      <img height="134px" width="250px" alt="Screenshot of project page" src={props.project.src} />
    </div>
    <p className={`col-span-2 ${props.project.live ? 'my-1' : 'my-8'}`}>{props.project.description}</p>
    <p className={`col-span-2 ${props.project.live ? 'my-1' : 'my-4'}`}>View {props.project.live ? "it" : "the code"} here:</p>
    {props.project.live ? <a href={props.project.live} target="_blank" rel="noopener" className="col-span-2 font-semibold w-full border rounded p-2 my-2 my-btn">View it live</a> : null}
    {props.project.github ? <a href={props.project.github} target="_blank" rel="noopener" className="col-span-2 w-full font-semibold border rounded p-2 my-2 my-btn">View it on github</a> : null }
  </div>
  )
}