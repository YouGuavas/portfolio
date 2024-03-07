import React from 'react'
import Header from './Header'

import Nav from './Nav'
import styles from '../styles/components/Layout.module.scss'
import { SpeedInsights } from '@vercel/speed-insights/next'

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
            <SpeedInsights />
        </>
    )
}
export default Layout
