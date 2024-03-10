import React from 'react'
import Header from './Header'

import Nav from './Nav'
import styles from '../styles/components/Layout.module.scss'

const Layout = ({ children }) => {
    return (
        <>
            <div className={styles.container}>
                <Header />

                <Nav
                    links={['Home', 'Work', 'Contact']}
                    pages={['work', 'contact']}
                />
            </div>

            {children}
        </>
    )
}
export default Layout
