import Head from 'next/head';


export default function BlogPost(props) {
    return (
        <div className="p-6 place-items-center w-full h-screen text-center my-text">
            <Head>
                <title>{props.title} | Patrick Yambrick</title>
            </Head>
            <div className="my-text">
                {props.children}
            </div>
        </div>
    )
}