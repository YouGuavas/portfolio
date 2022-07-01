import '../styles/Blog.module.scss';
//import '../styles/App.scss';
import Link from 'next/link';
import { useEffect } from 'react';




export default function Blogs(props) {
    const posts = props.posts;
    useEffect(() => {
        document.title = "Blogs | Patrick Yambrick";
       }, [document.title]
     )
    return (
        <div className="p-6 place-items-center w-full h-screen text-center my-text">
            <section className="my-text font-body">
             <h1 className="my-title">Blog Posts</h1>
             <ul className="p-6 text-center">
                {Object.keys(posts).map((post, index) => {
                    return <li key={index}><Link href={`/blog/${posts[post].id}`}><a>{posts[post].title}</a></Link></li>
                })}
             </ul>
            </section>
        </div>
    )
}

export function Blog(props) {
    //const { BLOG_ID } = useParams();
    const BLOG_ID = '1'
    const posts = props.posts;
    const title = posts[BLOG_ID].title;
    useEffect(() => {
        document.title = `${title} | Patrick Yambrick`;
       }, [document.title]
     )
    return (
        <div className="p-6 place-items-center w-full h-screen text-center my-text">
            <section className="my-text font-body">
                <h1 className='my-title'>{title}</h1>
                {posts[BLOG_ID].body}
            </section>
        </div>
    )
}