import React from 'react'
import Header from './Header'

import Nav from './Nav'
import Footer from './Footer'
import styles from '../styles/Layout.module.scss'

const Layout = ({ children }) => {
    return (
        <>
            <div className={styles.container}>
                <Header />

                <Nav
                    links={['Home', 'Work', 'Skills', 'Contact']}
                    pages={['skills', 'work', 'contact']}
                />
            </div>

            {children}
            <Footer />
        </>
    )
}
export default Layout
