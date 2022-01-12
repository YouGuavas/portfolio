export default function Work() {
  const projects = {
    lavilla: {
      title: "La Villa Website Redesign",
      description: "A redesign of a local restaurant's website",
      github: "https://github.com/YouGuavas/lavilla",
      live: "https://lavilla-123.web.app/",
      src: "https://lh3.googleusercontent.com/pw/AM-JKLXqN7V0RXn4SJ6_1TGeUTx5H33lGJPeMnJvq3bV4i5mpB-hcE49TJSSjdefzjDdF2JxTHMMcIubLd0OH2u2Y76Mgky203-crvblZ1Rz2WGrVfkjBeSBE899_XQJjKF0v-UxTsU9nBQ_Z_2JvYqAWpj9=w500-h267-no?authuser=0"
    }
  }
  return (
    <div className="h-screen bg-green-500 p-6 text-center">
      <section className="text-white">
        <p className="font-bold">Personal Projects</p>
        <p>These are projects I have done to further my own learning, comprehension, and growth.</p>
        <div className="grid grid-cols-3 py-6">
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
  <div className="md:col-span-1 col-span-3 p6 h-100 bg-green-700 border-2 border-black rounded grid grid-cols-2 place-items-center text-center">
    <p className="col-span-2 py-2">{props.project.title}</p>
    <div className="col-span-2 p-2 bg-white">
      <img alt="Screenshot of project page" src={props.project.src} />
    </div>
    <p className="col-span-2 py-2">{props.project.description}</p>
    <a href={props.project.live} target="_blank" rel="noopener" className="col-span-2 w-1/2 hover:bg-green-800 border rounded p-2 my-2 hover:text-gray-300 font-semibold">View it live</a>
    <a href={props.project.github} target="_blank" rel="noopener" className="col-span-2 w-1/2 border rounded p-2 my-2 hover:text-gray-300 hover:bg-green-800 font-semibold">View it on github</a>
  </div>
  )
}