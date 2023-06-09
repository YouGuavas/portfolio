import React from 'react'
import Header from './Header'
import logo from '../public/images/logoDark.png'
import Link from 'next/link'
import Image from 'next/image'
import Nav from './Nav'
import Footer from './Footer'
import styles from '../styles/Layout.module.scss'

const Layout = ({ children }) => {
    return (
        <>
            <div className={styles.container}>
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
                />
            </div>

            {children}
            <Footer />
        </>
    )
}
export default Layout
