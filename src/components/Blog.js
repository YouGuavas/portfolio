import '../styles/Blog.scss';
import '../styles/App.scss';
import { Link, useParams } from 'react-router-dom';




export function Blogs(props) {
    const posts = props.posts;
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
    return (
        <div className="p-6 place-items-center w-full h-screen text-center my-text">
            <section className="my-text font-body">
                <h1 className='my-title'>{posts[BLOG_ID].title}</h1>
                {posts[BLOG_ID].body}
            </section>
        </div>
    )
}