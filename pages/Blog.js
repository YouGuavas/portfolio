import styles from '../styles/Blog.module.scss';
import Link from 'next/link';
import Head from 'next/head';

import { useEffect } from 'react';




export default function Blogs(props) {
    const posts = {
        1: {title: 'My First Blog Post', id: 1, body: 'Test Text Test the Rest yes yes'}
      }
    return (
        <div className="p-6 place-items-center w-full h-screen text-center my-text">
            <Head>
                <title>Blog | Patrick Yambrick</title>         
            </Head>
            <section className="my-text">
             <h1 className="my-title">Blog Posts</h1>
             <ul className="p-6 text-center">
                {Object.keys(posts).map((post, index) => {
                    return <li key={index}><Link href={`/Blog/${posts[post].id}`}><a>{posts[post].title}</a></Link></li>
                })}
             </ul>
            </section>
        </div>
    )
}

export function Blog(props) {
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