import Head from 'next/head';
import codeEditor1 from '../public/images/codeEditor1.png';
import codeEditor2 from '../public/images/codeEditor2.png';
import portfolio1 from '../public/images/portfolio1.png';
import portfolio2 from '../public/images/portfolio2.png';
import showcase1 from '../public/images/showcase1.png';
import showcase2 from '../public/images/showcase2.png';
import unitConverter1 from '../public/images/unitConverter1.png';
import unitConverter2 from '../public/images/unitConverter2.png';


export default function Work() {
  const projects = {
    codeEditor: {
      title: 'Code Editor',
      description: 'A code editor I built using CodeMirror, react, and Sass. Users should be able to write html, css, and javascript code, and execute it in the iframe below. Html and Css update live, and javascript will run when the button is pressed.',
      github: 'https://github.com/YouGuavas/code-editor',
      live: 'https://code-editor-vn5t7dek6-youguavas.vercel.app/',
      src1: codeEditor1.src,
      src2: codeEditor2.src
    },
    /*gardenTracker: {
      title: 'Garden Tracker',
      description: 'This is a gardening tracker I built using the MERN stack and Sass. Users should be able to view general information about plants, register/login, and, if registered and logged in, add, and view data about their gardens.',
      github: 'https://github.com/YouGuavas/gardening-tracker',
      live: 'https://guavas-garden-tracker.herokuapp.com/',
      src1: 'https://lh3.googleusercontent.com/pw/AM-JKLW-yAXZeV9XSZyly3w3sglULjrjOk3EWk6LVlK5UYiS9ceZxjmmIb-I2_Vi2IQ0Q073AOjiGyKuXMCmVBrOsH9sl1ZtAEFxo2IznBnbgRdYdR0jlPI76vTkltfZ5_-zNj1_nAl5QvEcqSJxAD6LEFpm=w1178-h604-no?authuser=0',
      src2: 'https://lh3.googleusercontent.com/pw/AM-JKLW-yAXZeV9XSZyly3w3sglULjrjOk3EWk6LVlK5UYiS9ceZxjmmIb-I2_Vi2IQ0Q073AOjiGyKuXMCmVBrOsH9sl1ZtAEFxo2IznBnbgRdYdR0jlPI76vTkltfZ5_-zNj1_nAl5QvEcqSJxAD6LEFpm=w1178-h604-no?authuser=0',
    },*/
    portfolio: {
      title: "This Portfolio Website",
      description: "A portfolio site I built to display my work using React & Tailwind.",
      github:"https://github.com/YouGuavas/portfolio",
      src1: portfolio1.src,
      src2: portfolio2.src

    },
    showcase: {
      title: "React Component Showcase",
      description: "This is a showcase of components I have built with React and Sass.",
      github: "https://github.com/YouGuavas/component-showcase",
      live: "https://guava-component-showcase.web.app/",
      src1: showcase1.src,
      src2: showcase2.src,

    },
    unitConverter: {
      title: "Unit Converter",
      description: "A unit converter built with React.",
      github: "https://github.com/YouGuavas/unit-converter/",
      live: "https://unit-converter-phi-sable.vercel.app/",
      src1: unitConverter1.src,
      src2: unitConverter2.src
    },
    /*pokemon: {
      title: "Pokemon Collection Tracker",
      description: "This is a tool for keeping track of your Pokemon cards collection. Users should be able to add, remove, and view cards in their collection, as well as view cards yet to be collected. I built this project using the MERN stack and Sass.",
      github: "https://github.com/YouGuavas/pokemon-tracker",
      live: "https://pokemon-collection-tracker.herokuapp.com/",
      src1: "https://lh3.googleusercontent.com/pw/AM-JKLVglu0wIYmnxolOpFBAy0T5Y4mw_nm-95AvDYCXM94Pr5vkTKu8DluYF1g0gB_agQEVy17i21LwUTS-65kke8ZXDyIWQH0UmNLKwpzK7MI_5RNjwgGY8zYQI0VT4pk5-ThVRl6wrkH_RN55GYdoBvid=w500-h285-no?authuser=0",
      src2: "https://lh3.googleusercontent.com/pw/AM-JKLVglu0wIYmnxolOpFBAy0T5Y4mw_nm-95AvDYCXM94Pr5vkTKu8DluYF1g0gB_agQEVy17i21LwUTS-65kke8ZXDyIWQH0UmNLKwpzK7MI_5RNjwgGY8zYQI0VT4pk5-ThVRl6wrkH_RN55GYdoBvid=w500-h285-no?authuser=0"

    },*/
  }
  return (
    <div className={`h-full my-forest-bg p-6 text-center`}>
      <Head>
        <title>Work | Patrick Yambrick</title>         

        </Head>
      <section className="my-text-mustard font-body">
        <h1 className="my-title">Personal Projects</h1>
        <p>These are projects I have done to further my own learning, comprehension, and growth.</p>
        <div className="grid grid-cols-3 gap-2 py-6">
          {Object.keys(projects).map((item, index) => { 
            const project = projects[item];
            return <Card key={index} project={project} />
          }
          )}
        </div>
      </section>
    </div>
  )
}

function Card(props) {
  return(
  <div className="my-col-span-3 p-6 h-100 my-bg-sage my-text rounded grid grid-cols-2 place-items-center text-center">
    <h3 className="col-span-2 py-2">{props.project.title}</h3>
    <div className="col-span-2 p-2 my-bg-sage">
      <img className='main-image' height="134px" width="250px" alt="Screenshot of project page" src={props.project.src1} />
      <img className='mobile-image' height="134px" width="250px" alt="Screenshot of project page" src={props.project.src2} />
    </div>
    <p className={`col-span-2 ${props.project.live ? 'my-1' : 'my-8'}`}>{props.project.description}</p>
    <p className={`col-span-2 ${props.project.live ? 'my-1' : 'my-4'}`}>View {props.project.live ? "it" : "the code"} here:</p>
    {props.project.live ? <a href={props.project.live} target="_blank" rel="noreferrer" className="col-span-2 rounded p-2 my-2 my-btn">View it live</a> : null}
    {props.project.github ? <a href={props.project.github} target="_blank" rel="noreferrer" className="col-span-2 rounded p-2 my-2 my-btn">View it on github</a> : null }
  </div>
  )
}