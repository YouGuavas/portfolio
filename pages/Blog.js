import styles from '../styles/Blog.module.scss';
import Link from 'next/link';
import Head from 'next/head';

import { useEffect } from 'react';




export default function Blogs(props) {
    const posts = [
        {title: 'Struggling to Convert', id: 3},
        {title: 'Converting', id: 2},
        {title: 'My First Blog Post', id: 1},
    ]
    return (
        <div className="p-6 place-items-center w-full h-screen text-center my-text">
            <Head>
                <title>Blog | Patrick Yambrick</title>         
            </Head>
            <section className="my-text">
             <h1 className="my-title">Blog Posts</h1>
             <ul className={`p-6 text-center ${styles.blogsList}`}>
                {posts.map((post, index) => {
                    return <Link key={index} href={`/Blog/${post.id}`}><a id={post.title}><li className="my-bg-sage my-text-forest">{post.title}</li></a></Link>
                })}
             </ul>
            </section>
        </div>
    )
}