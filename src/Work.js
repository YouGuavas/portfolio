export default function Work() {
  const projects = {
    lavilla: {
      title: "La Villa Website Redesign",
      description: "",
      github: "https://github.com/YouGuavas/lavilla",
      live: "",
      src: "https://lh3.googleusercontent.com/JmIeq3TVf6WA-EZTyf09RJso_OCaZnc3Lix3cLsjsn4MKgym2llh7_IRuf0ShAqrU9Mb4jIUE-EAV3FGbOREdzuyRcwPiwtPOWqYM7NPpjrV1Q0n1EjFmfbX0Yn6GovKJeHW07xouD3dsImLXyu61R8b8ZPP20lUHM_i7I6OPt7R82Uw0cwWt08Zl_7WPzzqbWTOwyJswaL_imUscvAfnfUU_ThGsgHjCPQfdf2O2SgD7-EFJdi4ecNWtVvBCklH5IAXcOXiEUi0dpN5ZydNkoNXbbG-d2HvWQ6VnB1wVLlvwoKtFailjpqGv9QRD0RiCrLb0-vELkgQ7DnAMpSry41ZyxnuzjKXGz7ykbc8cDja6ousAvhe5AwogSHGaFtavyhr1KjF2X0eBicLTuqygYL8ivD3P6HnUz-0IuHlSgdzoPsaIehtrq-lFmJX5oKYaIwInv2CDYUjUSw-kpfLua_3EmgrVV6Jfo7Atz8fxSe-BVdeH0JlEJKHLPUml7ynQOSRHxWPFlRu6h6vaibVwG2ZEsau1FZlqeXZOLY-W4Bt4bd918RyZEj_Lw6yWlj9LW4cQQplNlkGsyEEhQ-FPpEzikX50dGLB7JRsoo8nKIFy6cqjwEI-CS2P-pM7FOZk4uRJbluKcfQD19uk1xoPWq2Y66RGE9jiY4xxAmimdw8LWwFRl300LMbW8v7eb46fFXSu9a1xxDyZFoQsyuWqrA=w119-h80-no?authuser=0"
    }
  }
  return (
    <div className="h-screen bg-green-500 p-6">
      <section className="text-white">
        <h2 className="font-bold">Personal Projects</h2>
        <div className="grid grid-cols-3">
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
  <div className="p6 h-100 bg-green-700 border-2 border-black rounded grid grid-cols-2 place-items-center text-center">
    <h6 className="col-span-2">{props.project.title}</h6>
    <img className="col-span-2" alt="" src={props.project.src} />
    <p className="col-span-2">{props.project.description}</p>
    <a href={props.project.live} className="col-span-1 hover:text-gray-400 font-semibold">View it live</a>
    <a href={props.project.github} className="col-span-1 hover:text-gray-400 font-semibold">View it on github</a>
  </div>
  )
}