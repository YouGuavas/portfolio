import '../styles/globals.scss'
import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/images/logoDark.png'

function App({ Component, pageProps }) {
    return (
        <React.Fragment>
            <Header />
            <Link name="Logo Home" href="#Home" scroll={false}>
                <Image
                    alt="My personal logo"
                    className="my-logo"
                    height={96}
                    width={96}
                    src={logo.src}
                />
            </Link>
            <Nav
                links={['Home', 'About', 'Work', 'Skills', 'Contact']}
                pages={['about', 'work', 'contact']}
            />{' '}
            {/*'Blog', 'Obsessions' */}
            <Component {...pageProps} />
            <Footer />
            <script
                async
                src="https://platform.twitter.com/widgets.js"
                charset="utf-8"
            ></script>
        </React.Fragment>
    )
}

export default App
