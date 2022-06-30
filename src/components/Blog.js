import '../styles/Blog.scss';
import '../styles/App.scss';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';




export function Blogs(props) {
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
                    return <li key={index}><Link to={`/blog/${posts[post].id}`}>{posts[post].title}</Link></li>
                })}
             </ul>
            </section>
        </div>
    )
}

export function Blog(props) {
    const { BLOG_ID } = useParams();
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