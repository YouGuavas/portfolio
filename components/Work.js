import Link from 'next/link';
import codeEditor1 from '../public/images/codeEditor1.png';
import codeEditor2 from '../public/images/codeEditor2.png';
import portfolio1 from '../public/images/portfolio1.png';
import portfolio2 from '../public/images/portfolio2.png';
import shop1 from '../public/images/shop1.png';
import showcase2 from '../public/images/showcase2.png';
import unitConverter1 from '../public/images/unitConverter1.png';
import unitConverter2 from '../public/images/unitConverter2.png';
import Image from 'next/image';

import styles from '../styles/Work.module.scss';


export default function Work() {
  const projects = {
    codeEditor: {
      title: 'Code Editor',
      description: 'A code editor I built using CodeMirror, React, and Sass. Users should be able to write html, css, and javascript code, and execute it in the iframe below. Html and Css update live, and javascript will run when the button is pressed.',
      github: 'https://github.com/YouGuavas/code-editor',
      live: 'https://code-editor-vn5t7dek6-youguavas.vercel.app/',
      src1: codeEditor1.src,
      src2: codeEditor2.src
    },
    portfolio: {
      title: "This Portfolio Website",
      description: "A portfolio site I built to display my work using React & Tailwind.",
      github:"https://github.com/YouGuavas/portfolio",
      src1: portfolio1.src,
      src2: portfolio2.src

    },
    shop: {
      title: "Collectible Shop",
      description: "An ecommerce site for an imaginary collectible shop, built with React, Typescript, and Snipcart.",
      github: "https://github.com/YouGuavas/component-showcase",
      live: "https://guava-component-showcase.web.app/",
      src1: shop1.src,
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
  }
  return (
    <section id="Work" className={`${styles.work} h-full my-forest-bg p-6 text-center my-text-mustard font-body`}>
        <h1 className="my-title disappear-md top-10">Personal Projects</h1>
        <p className="disappear-md">These are projects I have done to further my own learning, comprehension, and growth.</p>
        <div className="grid grid-cols-3 gap-2 py-6">
          {Object.keys(projects).map((item, index) => { 
            const project = projects[item];
            return <Card key={index} project={project} />
          }
          )}
        </div>
    </section>
  )
}

function Card(props) {
  return(
  <div className={`${styles.card} my-bg-sage my-text rounded grid grid-cols-2 place-items-center text-center`}>
    <h4 className="col-span-2">{props.project.title}</h4>
    <div className={`col-span-2 my-bg-sage ${styles.imageContainer}`}>
      <Image className='main-image' height={134} width={250} alt="Screenshot of project page" src={props.project.src1} />
      <Image className='mobile-image' height={270} width={250} alt="Screenshot of project page" src={props.project.src2} />
    </div>
    <p className={`col-span-2`}>{props.project.description}</p>
    <p className={`col-span-2`}>View {props.project.live ? "it" : "the code"} here:</p>
    {props.project.live ? <Link name={`Live link to ${props.project.title}`} href={props.project.live} target="_blank" rel="noreferrer" className="col-span-2 my-btn">View it live</Link> : null}
    {props.project.github ? <Link name={`Github link to ${props.project.title}`} href={props.project.github} target="_blank" rel="noreferrer" className="col-span-2 my-btn">View it on github</Link> : null }
  </div>
  )
}