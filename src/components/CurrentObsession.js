export default function CurrentObsession() {
  return(
    <div className="h-full my-forest-bg p-6 text-center">
      <section className="my-text font-body">
        <h1 className="font-bold m-2">Current Obsessions</h1>
        <Obsession data={{obsession: "Woodworking", when: "March, 2022", 
          projects: [
            {
              "Walking Stick": {description: "A walking stick. I made this by sanding and staining a fallen tree branch I found in my yard.", 
              pictures: [{src: '', alt: ''}]}
            },
            {
              "Hanging Shelf": {description: "A hanging shelf. I made this by sanding, staining, and drilling a spare piece of lumber I found in my shed.", 
              pictures: [{src: '', alt: ''}]}
            }
        ]}}/>
      </section>
    </div>
  )
}

function Obsession(props) {
  const data = props.data;
  return(
    <div className="w-full my-sage-bg my-text-forest p-6">
      <h2 className="font-bold">{data.obsession}</h2>
      <p>{data.when}</p>
      {//For all projects in an obsession, return relevant information/pictures
        data.projects.map((item, index) => {
          const project = Object.keys(item)[0];
          const information = item[project];
          const description = information.description;
          const pictures = information.pictures;
          return(
            <div key={index}>
              <h3 className="font-bold">{project}</h3>
              
              {//For all pictures related to a project, return a display "card"
              pictures.map((item, index) => {
                return (
                  <div key={index}>
                    <p>{description}</p>
                    <img alt={item.alt} src={item.src}/>
                  </div>
                )
              })}

            </div>
            )
          }
        )
      }
    </div>
  )
}