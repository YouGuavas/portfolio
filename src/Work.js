export default function Work() {
  const projects = {
    lavilla: {
      title: "La Villa Website Redesign",
      description: "A redesign of a local restaurant's website",
      github: "https://github.com/YouGuavas/lavilla",
      live: "https://lavilla-123.web.app/",
      src: "https://lh3.googleusercontent.com/pw/AM-JKLVDx-0PcfFUiXlqeQHmisL7uM2-dJD_BcV_LpyqVpIog4l_ennm2pzeEdZC9yS6ZFY_esTJu6t1CqGlb-Em0z_K4S9CwfZvxDDervaUClBYbnENO4iS5z3bvqbnahUrPDG_fjMxEyEjVm57nDxQKLcu=w119-h80-no?authuser=0"
    }
  }
  return (
    <div className="h-screen bg-green-500 p-6 text-center">
      <section className="text-white">
        <h2 className="font-bold">Personal Projects</h2>
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
    <h6 className="col-span-2 py-2">{props.project.title}</h6>
    <img className="col-span-2 py-2" alt="" src={props.project.src} />
    <p className="col-span-2 py-2">{props.project.description}</p>
    <a href={props.project.live} className="col-span-2 w-1/2 hover:bg-green-800 border rounded p-2 my-2 hover:text-gray-300 font-semibold">View it live</a>
    <a href={props.project.github} className="col-span-2 w-1/2 border rounded p-2 my-2 hover:text-gray-300 hover:bg-green-800 font-semibold">View it on github</a>
  </div>
  )
}