import styles from '../styles/Nav.module.scss'
import Link from 'next/link'

import { useEffect } from 'react'

export default function Nav(props) {
    const links = props.links

    const renderLinks = (item, index) => {
        return (
            <li key={index}>
                <Link
                    scroll={false}
                    id={item.toLowerCase()}
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className={`${styles.standardMenuLink}`}
                    name={`Nav ${item}`}
                >
                    {item}
                </Link>
            </li>
        )
    }

    const navHighlighter = () => {
        const pages = props.pages
        if (window) {
            let pageName = window.location.pathname
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove(styles.active)
            })
            if (pageName === '/') {
                return document
                    .getElementById('home')
                    .classList.add(styles.active)
            }
            document
                .getElementById(`${pageName.slice(1)}`)
                .classList.add(styles.active)
        }
    }

    useEffect(
        function () {
            navHighlighter()
            window.addEventListener('scroll', navHighlighter)
        },
        [links, navHighlighter]
    )

    return (
        <nav
            className={`${styles.myNavFull} ${styles.navHeader}`}
            id="menu-full"
        >
            <ul className={styles.standardMenu}>
                {links.map((item, index) => {
                    return renderLinks(item, index)
                })}
            </ul>
        </nav>
    )
}
